@extends('layouts.app')

@section('content')
<div class="container">
    <h1>Courses</h1>
    @if($courses->isEmpty())
        <p>No courses found.</p>
    @else
        <ul>
            @foreach ($courses as $course)
                <li>
                    <a href="{{ route('courses.show', $course->id) }}">Course: {{ $course->kurs }}</a>
                </li>
            @endforeach
        </ul>
    @endif
</div>
@endsection

