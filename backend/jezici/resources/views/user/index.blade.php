@extends('layouts.app')

@section('content')
<div class="container">
    <h1>Users</h1>
    @if($users->isEmpty())
        <p>No users found.</p>
    @else
        <ul>
            @foreach ($users as $user)
                <li>
                    <a href="{{ route('user.show', $user->id) }}">{{ $user->name }}</a>
                </li>
            @endforeach
        </ul>
    @endif
</div>
@endsection
