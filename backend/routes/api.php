<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

// Route::resource('todos',[App\Http\Controllers\TodoController::class,'index']);
Route::resource('todos', App\Http\Controllers\TodoController::class);