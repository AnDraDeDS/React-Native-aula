<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Musica extends Model
{
    protected $table = 'musicas';
    public $timestamps = false;

    protected $fillable = ['nome', 'compositor', 'duracao', 'estilo'];
}
