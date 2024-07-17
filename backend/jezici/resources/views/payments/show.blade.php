@extends('layouts.app')

@section('content')
<div class="container">
    <h1>Payment Details</h1>
    <p><strong>ID:</strong> {{ $payment->id }}</p>
    <p><strong>Amount:</strong> {{ $payment->cena }}</p>
    <p><strong>Created At:</strong> {{ $payment->created_at }}</p>
    <p><strong>Updated At:</strong> {{ $payment->updated_at }}</p>
</div>
@endsection

