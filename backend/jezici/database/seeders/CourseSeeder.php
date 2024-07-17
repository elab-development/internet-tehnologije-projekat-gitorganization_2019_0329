<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Course;


class CourseSeeder extends Seeder{

    /**
     * Run the database seeds.
     */
public function run(): void



    {
        Course::insert([
            ['id' => '1', 'kurs' => 'Engleski jezik B2', 'opis'=> 'Engleski jezik srednjeg nivoa', 'created_at' => now(),
            'updated_at' => now(),],
            ['id' => '2', 'kurs' => 'Italijanski jezik A1','opis'=> 'Itaalijanski jezik osnovnog nivoa', 'created_at' => now(),
            'updated_at' => now(),]
        ]);


}
}

