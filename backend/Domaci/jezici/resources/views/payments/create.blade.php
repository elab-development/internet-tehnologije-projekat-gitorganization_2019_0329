@extends('layouts.app')

@section('content')
<div class="container">
    <h1>Create Payment</h1>

    <form action="{{ route('payments.store') }}" method="POST">
        @csrf
        <div class="form-group">
            <label for="user_id">User ID:</label>
            <input type="text" name="user_id" id="user_id" class="form-control">
        </div>
        <div class="form-group">
            <label for="amount">Amount:</label>
            <input type="text" name="amount" id="amount" class="form-control">
        </div>
        <div class="form-group">
            <label for="paid_at">Paid At:</label>
            <input type="datetime-local" name="paid_at" id="paid_at" class="form-control">
        </div>
        <button type="submit" class="btn btn-primary">Create</button>
    </form>
</div>
@endsection
