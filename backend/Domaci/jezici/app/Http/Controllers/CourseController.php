<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;

class CourseController extends Controller
{
    public function index(Request $request)
    {
        $query = Course::query();


        if ($request->has('kurs')) {
            $query->where('kurs', 'like', '%' . $request->query('kurs') . '%');
        }


        $perPage = min($request->query('per_page', 3), 3);


        $courses = $query->paginate($perPage);

        return response()->json($courses);
    }

    public function show($id)
    {
        $course = Course::findOrFail($id);
        return response()->json($course);
    }
}
