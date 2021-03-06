<?php

use Illuminate\Database\Seeder;

class EkologCategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories_ekologs')
            ->insert($this->generateData());
    }

    protected $categories = [
        'Мыло',
        'Щётки',
        'Ролики для лица',
        'Посуда',
        'Другое'
    ];

    protected function generateData()
    {
        $data = [];
        foreach ($this->categories as $category){
            $data[] = [
                'category' =>$category,
            ];
        }
        return $data;
    }
}
