<?php
function dd($data)
{
    echo "<pre>";
    // print_r($data);
    var_dump($data);
    echo "</pre>";
}

function string2int($data)
{
    foreach ($data as $key => $value) {
        // echo "<pre>";
        // print('key:'.$key);
        if (isset($data['num1'])) {
            $num1 =  intval($data['num1']);
        }
        if (isset($data['num2'])) {
            $num2 =  intval($data['num2']);
        }
        if (isset($data['opt'])) {
            $opt =  ($data['opt']);
        }

        // var_dump($num1);
        // var_dump($num2);
        // echo "</pre>";
        switch ($opt) {
            case '+':
                $result = $num1 + $num2;
                echo $result;
                return $result;
            case '-':
                $result = $num1 - $num2;
                echo $result;
                return $result;
            case '*':
                $result = $num1 * $num2;
                echo $result;
                return $result;
            default:
                $result = $num1 / $num2;
                echo $result;
                return $result;
        }
    }
}

$input = $_GET;
// dd($input);
string2int($input);
