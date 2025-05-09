<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\TestController;
use App\Models\User;
use App\Models\Booking;
use Inertia\Inertia;

Route::get('/', function () {
    // return Inertia::render('Welcome', [
    //     'canLogin' => Route::has('login'),
    //     'canRegister' => Route::has('register'),
    //     'laravelVersion' => Application::VERSION,
    //     'phpVersion' => PHP_VERSION,
    // ]);
    return redirect()->route('home');
});

Route::get("/home", function () {
    return Inertia::render('Home');
})->name("home");
Route::get('/mybookings', function(){
    return Inertia::render("MyBookings", [
        "mybookings" => Booking::where("user_id", auth()->id())->get()
    ]);
})->name("mybooking");

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        "bookings" => Booking::all(),
    ]);
})->middleware(['auth', 'verified', 'role:admin'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::resource('/booking', BookingController::class)->only(['store', 'index', "destroy", "update"]);

});

require __DIR__.'/auth.php';





                // {
                //     auth.user ?
                //         <div>
                //             <Link href={route("profile.edit")}>Profile</Link>
                //         <br/>
                //             <Link href={route("logout")} method="post" as="button">Logout</Link>
                //         </div>
                //     :
                // }
