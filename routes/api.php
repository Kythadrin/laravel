<?php

use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

Route::post('/login', [HomeController::class, 'login']);
Route::post('/register', [HomeController::class, 'register']);
Route::post('/logout', [HomeController::class, 'logout'])->middleware('auth:sanctum');
