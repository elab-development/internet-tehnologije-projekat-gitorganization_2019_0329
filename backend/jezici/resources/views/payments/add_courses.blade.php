@extends('layouts.app')

@section('content')
<div class="container">
    <h1>Add Courses to Payment</h1>
    <form action="{{ route('payments.attach_courses', $payment->id) }}" method="POST">
        @csrf
        <div class="form-group">
            <label for="courses">Select Courses:</label>
            <select class="form-control" id="courses" name="courses[]" multiple>
                @foreach ($courses as $course)
                <option value="{{ $course->id }}">{{ $course->kurs }}</option>
                @endforeach
            </select>
        </div>
        <button type="submit" class="btn btn-primary">Add Courses</button>
    </form>
</div>
@endsection
