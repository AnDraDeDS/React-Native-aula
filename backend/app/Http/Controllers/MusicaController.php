<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Musica;

class MusicaController extends Controller
{
   
    public function index()
    {
        return Musica::all();
    }


}