<?php
// 此檔案要放在伺服器  根目錄localhost設定D:\
// 設定 CORS - 允許你的電腦網域
header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Origin: http://192.168.211.52/hello.php");

// 學生資料陣列 - 包含 id, name, 喜歡的一句話
$data = [
    'id' => 2,
    'name' => '李晏如',
    'msg' => '學習沒有捷徑，但有方法。把絆腳石變成墊腳石'
];

echo json_encode($data);