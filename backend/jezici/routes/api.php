<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\AdminLoggedIn;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => ['auth:sanctum','role:admin', 'adminLoggedIn']], function () {
    Route::get('/admin',function(Request $request){
        return $request->user();
    });

    Route::put('/courses/{id}/update', [CourseController::class, 'update']);
    Route::delete('/courses/{id}/delete', [CourseController::class, 'destroy']);

    Route::post('/courses/insert', [CourseController::class,'insert']);

    Route::post('/admin/logout', [AuthController::class, 'logout']);
});



Route::get('/users/{id}', [UserController::class, 'show'])->name('user.show');//prikaz korisnickog profila
Route::get('/courses', [CourseController::class, 'index'])->name('courses.index');//prikaz svih kurseva
Route::get('/courses/{id}', [CourseController::class, 'show'])->name('courses.show');//prikaz pojedinacnog kursa
Route::get('/payments/create', [PaymentController::class, 'create'])->name('payments.create');//kreiranje nove uplate
Route::post('/payments', [PaymentController::class, 'store'])->name('payments.store');//cuvanje nove uplate
Route::get('/payments', [PaymentController::class, 'index'])->name('payments.index');//prikaz svih uplata
Route::get('/payments/{id}', [PaymentController::class, 'show'])->name('payments.show');//prikaz pojedinacne uplate
Route::get('/payments/{id}/add-courses', [PaymentController::class, 'addCoursesForm'])->name('payments.add_courses_form');//dodavanje kusreva uplati, forma
Route::post('/payments/{id}/add-courses', [PaymentController::class, 'addCourses'])->name('payments.add_courses');//cuvanje kurseva za uplatu
Route::get('/users', [UserController::class, 'index'])->name('user.index');//prikaz svih korsnika

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('forgot/password',[AuthController::class,'forgotPassword']);


