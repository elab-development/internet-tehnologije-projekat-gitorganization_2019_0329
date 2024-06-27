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

            return view('user.profile', compact('user', 'payments'));
        }

        public function index()
        {
            $users = User::all();
            return view('user.index', compact('users'));
        }
    }



