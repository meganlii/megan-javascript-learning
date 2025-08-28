<?php
// cors fix 
// 公園
header("Access-Control-Allow-Origin: *");
// 開放特定網域
// header("Access-Control-Allow-Origin: http://127.0.0.1:5500");
// 註解 寫在php內
// 如果寫在html , ajax接收檔案 就不會json

// 後台
// 1.接收菜單
// 2.菜單內容 麵線 甜不辣
// 3.煮 麵線 甜不辣
// 4.送餐 前面服務生 
// 5.送 麵線 甜不辣


// 後台
// 1.接收菜單
// 2.菜單內容 麵線 甜不辣
// 3.煮 麵線 甜不辣
// 4.送餐 前面服務生 
// 5.送 麵線 甜不辣

function dd($data)
{
    echo "<pre>";
    print_r($data);
    echo "</pre>";
}


// $data = [
//     [
//         'id' => 1,
//         'name' => 'amy'
//     ],
//     [
//         'id' => 2,
//         'name' => 'bob'
//     ],
//     [
//         'id' => 3,
//         'name' => 'cat'
//     ]
// ];


$data = [
    'num1' => 100,
    'num2' => 50,
    'sum' => 150
];

// dd($data);
echo json_encode($data);
