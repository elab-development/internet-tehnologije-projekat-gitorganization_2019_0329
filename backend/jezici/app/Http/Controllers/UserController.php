<?php

    namespace App\Http\Controllers;

    use Illuminate\Http\Request;
    use App\Models\User;

    class UserController extends Controller
    {
        public function show($id)
        {
            $users = User::findOrFail($id);
           // $payments = $users->payments()->with('courses')->get();

            return  response()->json([
                'users' => $users,
                //'payments' => $payments
            ], 200);
        }

        public function index()
        {
            $users = User::all();
                    return response()->json($users, 200);

        }
    }




