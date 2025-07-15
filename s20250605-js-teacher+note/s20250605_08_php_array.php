<?php
// 索引陣列  只有數字key值
$indexArr = [1, 2, 3];

// 關聯陣列 => 有胖箭頭 有key值-字串或數字
// key => value
$assocArr = [
    's1' => 'amy',
    's2' => 'bob',
    's3' => 'cat'
];

// 二維陣列
$data = [
    [
        'id' => 1,
        'name' => '台北店',
        'mobile' => '0911',
        'love' => [
            'js',
            'php',
            'css'
        ]
    ],
    [
        'id' => 2,
        'name' => '台中店',
        'mobile' => '0922',
        'love' => [
            [
                't1' => [1, 2, 3]
            ],
            [
                't2' => [
                    ['key1' => 'value1'],
                    ['key2' => 'value2'],
                ]
            ],
            [
                't3' => 'ok2'
            ]
        ]
    ],
    [
        'id' => 3,
        'name' => '高雄店',
        'mobile' => '0933',
    ],
];

// 迴圈取值 將陣列中的元素拆成key和value兩個變數
// 最常用 for很少用
foreach ($indexArr as $key => $value) {
    # code...
}

foreach ($assocArr as $key => $value) {
    # code...
}
