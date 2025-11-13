<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Musica;

class MusicaController extends Controller
{
   
    public function index()
    {
        return response()->json(Musica::all());
    }
    
      public function store(Request $request)
    {
        try{
           Musica::create($request->all());
        }catch(\Exception $e){
            return response()->json([
                'success'=>false,
                'error'=>$e->getMessage()
            ],500);
        }
         
    }

}