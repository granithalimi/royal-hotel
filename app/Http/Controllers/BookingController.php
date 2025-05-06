<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BookingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Inertia::render("Booking");
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        Booking::create(["user_id" => auth()->id(), "name" => $request->name, "check_in" => $request->check_in, "check_out" => $request->check_out,  "phone_number" => $request->phone]);
        return to_route("home");
    }

    /**
     * Display the specified resource.
     */
    public function show(Booking $booking)
    {
        //
        // return Inertia::render("MyBookings");
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Booking $booking)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Booking $booking)
    {
        //
        Booking::where("id", $booking->id)->first()->update(['status' => $request->action]);
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Booking $booking)
    {
        Booking::where("id", $booking->id)->first()->delete();
        return redirect()->back();
        //
    }
}
