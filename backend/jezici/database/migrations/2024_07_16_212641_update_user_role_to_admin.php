<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class UpdateUserRoleToAdmin extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Provera da li kolona 'role' već postoji, ako ne, dodaj je
        if (!Schema::hasColumn('users', 'role')) {
            Schema::table('users', function (Blueprint $table) {
                $table->string('role')->default('user');
            });
        }

        // Ažuriranje role korisnika sa ID-jem 12 na 'admin'
        DB::table('users')
            ->where('id', 12)
            ->update(['role' => 'admin']);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {

        // Vraćanje role korisnika sa ID-jem 12 na 'user' ako je potrebno
        DB::table('users')
            ->where('id', 12)
            ->update(['role' => 'user']);
    }
}
