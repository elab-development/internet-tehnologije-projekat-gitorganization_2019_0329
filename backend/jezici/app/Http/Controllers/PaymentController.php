<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Models\Payment;
use App\Models\Course;

class PaymentController extends Controller
{
    public function create()
    {
        return response()->json(['message' => 'Endpoint not needed for API'], 200);
    }

    public function store(Request $request)
    {
        $payment = new Payment();
        $payment->user_id = $request->user_id;
        $payment->amount = $request->amount;
        $payment->paid_at = $request->paid_at;
        $payment->save();

        return response()->json($payment, 201);
    }

    public function index()
    {
        $payments = Payment::with('user')->get();
        return response()->json($payments);
    }

    public function show($id)
    {
        $payment = Payment::with('courses')->findOrFail($id);
        return response()->json($payment);
    }

    public function addCoursesForm($id)
    {
        $payment = Payment::findOrFail($id);
        $courses = Course::all();
            return response()->json(['message' => 'Endpoint not needed for API'], 200);
    }

    public function addCourses(Request $request, $id)
    {
        $payment = Payment::findOrFail($id);
        $payment->courses()->sync($request->course_ids);

        return response()->json($payment->load('courses'), 200);
    }
}


