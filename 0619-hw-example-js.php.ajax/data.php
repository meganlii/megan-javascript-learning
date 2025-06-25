<?php

function dd($data) {
    echo "<pre>";
    print_r($data);
    echo "</pre>";
}

// $data = [
//     [
//         'num1' => 100,
//         'num2' => 50,
//         'opt' => '+'
//     ]
// ];
$input = $_GET;
$result = [];
foreach ($input as $key => $value) {
    if (isset($input['num1'])) {
        $num1 = intval($input['num1']);
    }
    if (isset($input['num2'])) {
        $num2 = intval($input['num2']);
    }
    if (isset($input['opt'])) {
        $opt = $input['opt'];
    }
    switch ($opt) {
        case '+':
            $tmpresult = $num1 + $num2;
            $result = ['result' => $tmpresult];
            break;
        case '-':
            $tmpresult = $num1 - $num2;
            $result = ['result' => $tmpresult];
            break;
        case '*':
            $tmpresult = $num1 * $num2;
            $result = ['result' => $tmpresult];
            break;
        case '/':
            $tmpresult = $num1 / $num2;
            $result = ['result' => $tmpresult];
            break;
    }
}

// dd($data);
echo json_encode($result);

?>