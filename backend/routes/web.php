<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MusicaController;


Route::get('/', function () {
    return view('welcome');
});

Route::get('/api/musicas', [MusicaController::class, 'index']);

