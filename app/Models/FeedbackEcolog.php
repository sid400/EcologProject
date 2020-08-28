<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FeedbackEcolog extends Model
{
    protected $fillable = [
        'name',
        'email',
        'text',
    ];
}
