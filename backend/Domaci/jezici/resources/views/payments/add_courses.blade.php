@extends('layouts.app')

@section('content')
<div class="container">
    <h1>Add Courses to Payment ID: {{ $payment->id }}</h1>

    <form action="{{ route('payments.add_courses', $payment->id) }}" method="POST">
        @csrf
        <div class="form-group">
            <label for="course_ids">Select Courses:</label>
            <select name="course_ids[]" id="course_ids" multiple class="form-control">
                @foreach ($courses as $course)
                    <option value="{{ $course->id }}">{{ $course->title }}</option>
                @endforeach
            </select>
        </div>
        <button type="submit" class="btn btn-primary">Add Courses</button>
    </form>
</div>
@endsection
