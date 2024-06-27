@extends('layouts.app')

@section('content')
<div class="container">
    <h1>{{ $user->name }}'s Profile</h1>

    <h2>Payments</h2>
    @foreach ($payments as $payment)
        <div>
            <h3>Payment ID: {{ $payment->id }}</h3>
            <p>Amount: ${{ $payment->amount }}</p>
            <p>Paid at: {{ $payment->paid_at }}</p>

            <h4>Courses:</h4>
            <ul>


            @foreach ($payment->courses as $course)
                    <li>{{ $course->title }}</li>
                @endforeach
            </ul>
        </div>
    @endforeach
</div>
@endsection
