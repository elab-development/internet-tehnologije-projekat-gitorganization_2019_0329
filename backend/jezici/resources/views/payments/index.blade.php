@extends('layouts.app')

@section('content')
<div class="container">
    <h1>Payments</h1>
    @if($payments->isEmpty())
        <p>No payments found.</p>
    @else
        <ul>
            @foreach ($payments as $payment)
                <li>
                    <a href="{{ route('payments.show', $payment->id) }}">Payment ID: {{ $payment->id }}</a>
                </li>
            @endforeach
        </ul>
    @endif
</div>
@endsection
