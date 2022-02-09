<?php

namespace Database\Factories;

use App\Models\Klijent;
use App\Models\Kompaniaj;
use Illuminate\Database\Eloquent\Factories\Factory;
use Database\Factories\KompaniajFactory;

class KlijentFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Klijent::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'ime' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            'kompanija_id'=>Kompaniaj::factory(),
        ];
    }
}
