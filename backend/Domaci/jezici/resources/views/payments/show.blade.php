@extends('layouts.app')

@section('content')
<div class="container">
    <h1>Payment ID: {{ $payment->id }}</h1>
    <p>Amount: ${{ $payment->amount }}</p>
    <p>Paid at: {{ $payment->paid_at }}</p>

    <h4>Courses:</h4>
    <ul>
        @foreach ($payment->courses as $course)
            <li>{{ $course->title }}</li>
        @endforeach
    </ul>

    <a href="{{ route('payments.add_courses_form', $payment->id) }}" class="btn btn-primary">Add Courses</a>
</div>
@endsection
