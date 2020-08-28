<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEkologsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ekologs', function (Blueprint $table) {
            $table->id();
            $table->integer('product_id')->unique();
            $table->string('pre_name', '50')->nullable();
            $table->string('name', '50');
            $table->integer('category');
            $table->string('short_description', '200')->nullable();
            $table->string('img_path');
            $table->integer('price');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ekologs');
    }
}
