<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\PaymentController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/user/{id}', [UserController::class, 'show'])->name('user.profile');//prikaz korisnickog profila
Route::get('/courses', [CourseController::class, 'index'])->name('courses.index');//prikaz svih kurseva
Route::get('/courses/{id}', [CourseController::class, 'show'])->name('courses.show');//prikaz pojedinacnog kursa
Route::get('/payments/create', [PaymentController::class, 'create'])->name('payments.create');//kreiranje nove uplate
Route::post('/payments', [PaymentController::class, 'store'])->name('payments.store');//cuvanje nove uplate
Route::get('/payments', [PaymentController::class, 'index'])->name('payments.index');//prikaz svih uplata
Route::get('/payments/{id}', [PaymentController::class, 'show'])->name('payments.show');//prikaz pojedinacne uplate
Route::get('/payments/{id}/add-courses', [PaymentController::class, 'addCoursesForm'])->name('payments.add_courses_form');//dodavanje kusreva uplati, forma
Route::post('/payments/{id}/add-courses', [PaymentController::class, 'addCourses'])->name('payments.add_courses');//cuvanje kurseva za uplatu
Route::get('/users', [UserController::class, 'index'])->name('users.index');//prikaz svih korsnika










