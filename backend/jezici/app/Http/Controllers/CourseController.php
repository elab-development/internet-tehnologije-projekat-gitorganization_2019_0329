<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;

class CourseController extends Controller
{
    public function index()
    {
        $courses = Course::all();
        return response()->json($courses);
    }

    public function show($id)
    {
        $course = Course::findOrFail($id);
        return response()->json($course);
    }

    public function insert(Request $request)
    {
        $request->validate([
            'kurs' => 'required|string|max:255',
            'opis' => 'nullable|string',
        ]);

        $course = new Course();
        $course->kurs = $request->kurs;
        $course->opis = $request->opis;
        $course->save();

        return response()->json(['message' => 'Kurs uspešno dodat', 'course' => $course], 201);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'kurs' => 'required|string|max:255',
            'opis' => 'nullable|string',
        ]);

        $course = Course::findOrFail($id);
        $course->kurs = $request->kurs;
        $course->opis = $request->opis;
        $course->save();

        return response()->json(['message' => 'Kurs uspešno ažuriran', 'course' => $course]);
    }

    public function delete($id)
    {
        $course = Course::findOrFail($id);
        $course->delete();

        return response()->json(['message' => 'Kurs uspešno obrisan']);
    }


    public function search(Request $request)
    {
        $searchTerm = $request->query('search');
    
        $courses = Course::where('kurs', 'like', "%$searchTerm%")->get();
    
        return response()->json($courses);
    }
    
    
    
    
    










}
