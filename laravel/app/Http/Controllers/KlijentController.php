<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Klijent;

class KlijentController extends Controller
{
    //dodavanje novog
    function dodajKlijenta(Request $req){

        $klijent=new Klijent;
        $klijent->ime=$req->input('ime');
        $klijent->email=$req->input('email');
        $klijent->kompanija_id=$req->input('kompanija_id');
       
        $klijent->save();
        return $klijent;
    }
    function listaKlijenata(){

        return Klijent::all();
    }
    function obrisiKlijenta($id){
        $result=Klijent::find($id)->delete();
        if($result){
            return ["Uspesno obrisan klijent."];
        }else{
            return ["Greska prilikom brisanja."];
        }
    }


    // $knjiga = Knjiga::find($id);
    //    $knjiga->delete();
    function vidiKlijenta($ime){
        return Klijent::find($ime);
    }

    function pretraga($ime){
        return Klijent::where('ime','Like',"%$ime%")->get();
    }

    function edit(Request $req,$id){
        $result=Klijent::where('id',$id)->update();


    }
   
   
}
