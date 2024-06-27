@extends('layouts.app')

@section('content')
<div class="container">
    <h1>All Courses</h1>
    <ul>
        @foreach ($courses as $course)
            <li>
                <a href="{{ route('courses.show', $course->id) }}">{{ $course->title }}</a>
            </li>
        @endforeach
    </ul>
</div>
@endsection
