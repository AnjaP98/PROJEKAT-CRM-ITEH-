<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\KlijentController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
//registracija
Route::post('register',[UserController::class,'register']);
//login
Route::post('login',[UserController::class,'login']);
//dodavanje klijenta
Route::post('dodaj',[KlijentController::class,'dodajKlijenta']);
//svi klijenti
Route::get('klijenti',[KlijentController::class,'listaKlijenata']);
//obrisi klijenta
Route::delete('obrisi/{id}',[KlijentController::class,'obrisiKlijenta']);
//pregled jednog klijenta
Route::get('klijent/{ime}',[KlijentController::class,'vidiKlijenta']);
//pretraga
Route::get('pretraga/{ime}',[KlijentController::class,'pretraga']);

