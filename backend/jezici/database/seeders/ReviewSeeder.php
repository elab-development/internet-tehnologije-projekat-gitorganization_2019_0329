<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Review;
use App\Models\Course;
use App\Models\User;

class ReviewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::all();
        $courses = Course::all();

        foreach ($users as $user) {
            foreach ($courses as $course) {
                Review::factory()->create([
                    'user_id' => $user->id,
                    'course_id' => $course->id,
                ]);
            }
        }    }
}



