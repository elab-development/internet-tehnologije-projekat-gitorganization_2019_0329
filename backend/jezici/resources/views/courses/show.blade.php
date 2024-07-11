
@extends('layouts.app')

@section('content')
<div class="container">
    <h1>Course Details</h1>
    <p><strong>ID:</strong> {{ $course->id }}</p>
    <p><strong>Course:</strong> {{ $course->kurs }}</p>
    <p><strong>Payment ID:</strong> {{ $course->payment_id }}</p>
    <p><strong>Created At:</strong> {{ $course->created_at }}</p>
    <p><strong>Updated At:</strong> {{ $course->updated_at }}</p>
</div>
@endsection


