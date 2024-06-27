@extends('layouts.app')

@section('content')
<div class="container">
    <h1>All Payments</h1>
    <ul>
        @foreach ($payments as $payment)
            <li>
                <a href="{{ route('payments.show', $payment->id) }}">Payment ID: {{ $payment->id }}</a>
                - Amount: ${{ $payment->amount }}
                - User: {{ $payment->user->name }}
            </li>
        @endforeach
    </ul>
</div>
@endsection
