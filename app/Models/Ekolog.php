<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ekolog extends Model
{
    protected $fillable = [
        'product_id',
        'pre_name',
        'name',
        'category',
        'short_description',
        'img_path',
        'price',
    ];

}
