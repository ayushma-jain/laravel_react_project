<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

// Route::middleware('cors')->group(function () {
//     Route::apiResource('todos', TodoController::class);
// });
Route::resource('todos', App\Http\Controllers\TodoController::class);