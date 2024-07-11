<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Payment;
use App\Models\User;



class PaymentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Kreiramo korisnike kako bismo mogli da koristimo njihove ID-eve
        $user1 = User::create([
            'name' => 'Milica',
            'email' => 'milica123@gmail.com',
            'password' => bcrypt('milica123')
        ]);

        $user2 = User::create([
            'name' => 'Petar',
            'email' => 'petar123@gmail.com',
            'password' => bcrypt('petar123')
        ]);

        // Unos podataka za prvo plaćanje sa cenom 10 000
        Payment::create([
            'user_id' => $user1->id,
            'cena' => 10000,
        ]);

        // Unos podataka za drugo plaćanje sa cenom 15 000
        Payment::create([
            'user_id' => $user2->id,
            'cena' => 15000,
        ]);
    }
}
