@extends('layouts.app')

@section('content')
<div class="container">
    <h1>{{ $user->name }}'s Profile</h1>
    <p><strong>ID:</strong> {{ $user->id }}</p>
    <p><strong>Email:</strong> {{ $user->email }}</p>
    <p><strong>Email Verified At:</strong> {{ $user->email_verified_at }}</p>
    <p><strong>Created At:</strong> {{ $user->created_at }}</p>
    <p><strong>Updated At:</strong> {{ $user->updated_at }}</p>

    <h2>Payments</h2>
    @if($user->payments->isEmpty())
        <p>No payments found.</p>
    @else
        <ul>
            @foreach ($user->payments as $payment)
                <li>
                    <strong>ID:</strong> {{ $payment->id }}
                    <strong>Amount:</strong> {{ $payment->cena }}
                    <strong>Created At:</strong> {{ $payment->created_at }}
                </li>
            @endforeach
        </ul>
    @endif

    <h2>Courses</h2>
    @if($user->courses->isEmpty())
        <p>No courses found.</p>
    @else
        <ul>
            @foreach ($user->courses as $course)
                <li>
                    <strong>ID:</strong> {{ $course->id }}
                    <strong>Course:</strong> {{ $course->kurs }}
                    <strong>Payment ID:</strong> {{ $course->payment_id }}
                    <strong>Created At:</strong> {{ $course->created_at }}
                </li>
            @endforeach
        </ul>
    @endif
</div>
@endsection

