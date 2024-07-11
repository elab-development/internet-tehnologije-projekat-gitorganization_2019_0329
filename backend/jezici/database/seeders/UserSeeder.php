<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
// Unos prvog korisnika
User::create([
    'id'=> '1',
    'name' => 'Milica',
    'email' => 'milica@gmail.com',
    'password' => bcrypt('milica123'),
]);

// Unos drugog korisnika
User::create([
    'id'=> '2',
    'name' => 'Petar',
    'email' => 'petar@gmail.com',
    'password' => bcrypt('petar123'),
]);
    }
}



