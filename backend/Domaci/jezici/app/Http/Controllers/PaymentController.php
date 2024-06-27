<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Models\Payment;
use App\Models\Course;

class PaymentController extends Controller
{
    public function create()
    {
        return view('payments.create');
    }

    public function store(Request $request)
    {
        $payment = new Payment();
        $payment->user_id = $request->user_id;
        $payment->amount = $request->amount;
        $payment->paid_at = $request->paid_at;
        $payment->save();

        return redirect()->route('payments.index');
    }

    public function index()
    {
        $payments = Payment::with('user')->get();
        return view('payments.index', compact('payments'));
    }

    public function show($id)
    {
        $payment = Payment::with('courses')->findOrFail($id);
        return view('payments.show', compact('payment'));
    }

    public function addCoursesForm($id)
    {
        $payment = Payment::findOrFail($id);
        $courses = Course::all();
        return view('payments.add_courses', compact('payment', 'courses'));
    }
    public function addCourses(Request $request, $id)
    {
        $payment = Payment::findOrFail($id);
        $payment->courses()->sync($request->course_ids);
        return redirect()->route('payments.show', $payment->id);
    }
}
