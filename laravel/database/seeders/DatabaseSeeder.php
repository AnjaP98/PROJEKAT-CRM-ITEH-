<?php

namespace Database\Seeders;
use Database\Factories\KlijentFactory;
use Database\Factories\UserFactory;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Klijent;
use App\Models\Kompaniaj;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        Kompaniaj::truncate();
        User::truncate();
        Klijent::truncate();

        //kreiranje 10 korisnika i 10 klijenata
        \App\Models\User::factory(10)->create();
        \App\Models\Klijent::factory(10)->create();
    }
}
