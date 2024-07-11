<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\API\AuthController;


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

/*Route::get('/user/{id}', [UserController::class, 'show'])->name('user.show');//prikaz korisnickog profila
Route::get('/courses', [CourseController::class, 'index'])->name('courses.index');//prikaz svih kurseva
Route::get('/courses/{id}', [CourseController::class, 'show'])->name('courses.show');//prikaz pojedinacnog kursa
Route::get('/payments/create', [PaymentController::class, 'create'])->name('payments.create');//kreiranje nove uplate
Route::post('/payments', [PaymentController::class, 'store'])->name('payments.store');//cuvanje nove uplate
Route::get('/payments', [PaymentController::class, 'index'])->name('payments.index');//prikaz svih uplata
Route::get('/payments/{id}', [PaymentController::class, 'show'])->name('payments.show');//prikaz pojedinacne uplate
Route::get('/users', [UserController::class, 'index'])->name('user.index');//prikaz svih korsnika



Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);




Route::get('/', function () {
    return view('home'); // Ovde pretpostavljamo da postoji Blade predložak sa imenom 'home'
})->name('home');

*/
