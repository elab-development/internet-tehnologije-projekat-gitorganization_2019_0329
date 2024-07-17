<?php

    namespace App\Http\Controllers;

    use Illuminate\Http\Request;
    use App\Models\User;

    class UserController extends Controller
    {
        public function show($id)
        {
            $user = User::findOrFail($id);
            $payments = $user->payments()->with('courses')->get();

            return  response()->json([
                'user' => $user,
                'payments' => $payments
            ], 200);
        }

        public function index()
        {
            $users = User::all();
                    return response()->json($users, 200);

        }
    }




