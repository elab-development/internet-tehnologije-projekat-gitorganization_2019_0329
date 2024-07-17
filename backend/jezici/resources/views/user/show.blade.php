@extends('layouts.app')

@section('content')
<div class="container">
    <h1>{{ $user->name }}'s Profile</h1>
    <p><strong>ID:</strong> {{ $user->id }}</p>
    <p><strong>Name:</strong> {{ $user->name }}</p>
    <p><strong>Email:</strong> {{ $user->email }}</p>
    <p><strong>Email Verified At:</strong> {{ $user->email_verified_at }}</p>
    <p><strong>Created At:</strong> {{ $user->created_at }}</p>
    <p><strong>Updated At:</strong> {{ $user->updated_at }}</p>
</div>
@endsection



