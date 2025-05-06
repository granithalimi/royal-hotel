<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    //
    protected $fillable = [
        "user_id",
        "status",
        "check_in",
        "check_out",
        "name",
        "phone_number"
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
