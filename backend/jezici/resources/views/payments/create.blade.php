@extends('layouts.app')

@section('content')
<div class="container">
    <h1>Create Payment</h1>
    <form action="{{ route('payments.store') }}" method="POST">
        @csrf
        <div class="form-group">
            <label for="cena">Amount:</label>
            <input type="text" class="form-control" id="cena" name="cena">
        </div>
        <!-- Dodaj dodatna polja ako su potrebna -->
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>
@endsection

