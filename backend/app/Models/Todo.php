<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Todo extends Model
{
    use HasFactory,SoftDeletes;
    protected $fillable = [
        'task', 'complete_status',
    ];

    protected $dates = ['deleted_at'];

     // Accessor to format the created_at date
     public function getCreatedAtAttribute($value)
     {
         return \Carbon\Carbon::parse($value)->format('Y-M-d');
     }
 
     // Accessor to format the updated_at date
     public function getUpdatedAtAttribute($value)
     {
         return \Carbon\Carbon::parse($value)->format('Y-M-d');
     }
}
