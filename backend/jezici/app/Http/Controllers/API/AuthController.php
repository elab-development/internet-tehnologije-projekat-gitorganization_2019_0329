<?php


namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;
use App\Models\User;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users,email',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $token = $user->createToken('Token Name')->plainTextToken;

        return response()->json(['token' => $token], 201);
    }
/*
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('Token Name')->plainTextToken;
            return response()->json(['token' => $token], 200);
        }

        return response()->json(['message' => 'Unauthorized'], 401);
    }
}
*/

public function login(Request $request)
{
    $request->validate([
        'email' => 'required|string|email',
        'password' => 'required|string',
    ]);
  /*  if(!Auth::attempt($request->only('email','password'))){
        return response()->json(['message'=>'Unauthorized'], 401);
  */
    $user = User::where('email', $request->input('email')) -> firstOrFail();
    $csrfToken = Crypt::encrypt(csrf_token());
    if($user->role!='admin'){
    DB::statement("UPDATE users SET role='loggedIn' WHERE id=$user->id");
    }

    $token = $user->createToken('auth_token')->plainTextToken;

    return response()->json([
        'success'=>true,
        'message' => 'Hello, Team: ' . $user->name . ' welcome! Have a nice day!',
        'access_token' => $token,
        'token_type' => 'Bearer',
        'csrf_token' => $csrfToken,
        'role'=>$user->role
    ]);
}


public function forgotPassword(Request $request)
{
     $request->validate([
       'email' => 'required',
       'password' => 'required|string|min:8'
     ]);
     $user = User::where('email', $request->email) -> firstOrFail();
     if([$request->email,'=', $user->email]) {
         $user->password=Hash::make($request->password);
         $user->save();
     }
     return response()->json($user);
}

public function logout(Request $request)
 {
     $id=Auth::id();
     $user = Auth::user();
     if ($user->role !== 'admin') {
      DB::statement("UPDATE users SET role='loggedOut' WHERE id=$id");
     }
    $request->user()->tokens()->delete();
    return response()->json(['message'=> 'Successfully logged out!']);
 }

}





