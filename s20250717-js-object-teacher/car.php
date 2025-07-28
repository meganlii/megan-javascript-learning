<?php
// $car = '紅色的汽車';
// $tank = '綠色的坦克車';

function dd($data)
{
    echo "<pre>";
    print_r($data);
    echo "</pre>";
}


interface Money{
    public function fly();
}


interface Money100{
    public function swim();
}

class Car implements Money,Money100
{

    // porperties
    public $name;
    public $color;


    // methods
    function run()
    {
        echo "$this->color 的 $this->name 正在跑<br>";
    }

    function fly()
    {
        echo "$this->color 的 $this->name 正在飛<br>";
    }

    function swim()
    {
        echo "$this->color 的 $this->name 正在游泳<br>";
    }
}


class Car2 implements Money100
{

    // porperties
    public $name;
    public $color;


    // methods
    function run()
    {
        echo "$this->color 的 $this->name 正在跑<br>";
    }
 
    function swim()
    {
        echo "$this->color 的 $this->name 正在游泳<br>";
    }
}


// new
$car = new Car();
$car->name = '小客車';
$car->color = '紅色';
$car->run();
$car->fly();

$tank = new Car();
$tank->name = '坦克車';
$tank->color = '綠色';
$tank->run();


dd($car);
dd($tank);
