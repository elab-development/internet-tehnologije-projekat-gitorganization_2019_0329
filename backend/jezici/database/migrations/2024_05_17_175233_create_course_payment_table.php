<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('course_payment', function (Blueprint $table) {
            $table->id();
            $table->foreignId('course_id');
            $table->foreignId('payment_id');
            $table->timestamps();


            //definisanje stranih kljuceva
                $table->foreign('course_id')->references('id')->on('courses')->onDelete('cascade');
                $table->foreign('payment_id')->references('id')->on('payments')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('course_payment');
    }
};
