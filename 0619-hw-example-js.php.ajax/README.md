# 1. JS / jQuery 運算流程與錯誤紀錄

## 📌 功能目標

製作一個簡易的加法計算器，當使用者輸入兩個數字並選擇運算符號（如 +、-、*、/）後，網頁會自動即時顯示運算結果，**不需要按下按鈕即可更新結果**。

---

## 🧠 開發重點與學習筆記

### ✅ 1. 正確取得數字輸入值

```javascript
const num1 = $('#num1');
const num1Value = Number(num1.val());
```

### ✅ 2. switch() 錯誤使用與修正

```javascript
// ❌ 錯誤寫法
switch('opt') {
  case '+':
    tmpresult = num1Value + num2Value;
    break;
}
```

### ✅ 3. 為什麼 .change(tmpresult) 無效？

```javascript
result.change(tmpresult); // ❌ 無效
```
```javascript
$('.result').text(tmpresult); // ✅ 更新畫面
```
### ✅ 4. 即時刷新結果的做法

**核心概念**：使用 .on('input change') 綁定所有輸入欄位，只要欄位一變動，就即時觸發函式更新畫面。

```javascript
$('#num1, #num2, #opt').on('input change', updateResult);
```
###  總結：jQuery 常見用法對照表

| 功能     | 正確用法                                       | 說明              |
| ------ | ------------------------------------------ | --------------- |
| 取得輸入值  | `$('#id').val()`                           | 取得 `<input>` 的值 |
| 設定輸入值  | `$('#id').val('新值')`                       | 改變 `<input>` 的值 |
| 顯示文字內容 | `$('.result').text('內容')`                  | 將內容顯示在畫面上       |
| 綁定事件   | `.on('input', func)` 或 `.on('change', func)` | 偵測輸入欄位或選單變更     |
| 初始設定   | `updateResult()`                           | 頁面載入時預先執行一次     |


# 2. form to php 運算流程與錯誤紀錄

    我把form裡面資料```PHP var_dump($data);```之後出現
    array(3) {
        ["num1"]=>
        string(3) "100"
        ["num2"]=>
        string(2) "50"
        ["opt"]=>
        string(1) "+"
    }

    所以我要計算的話我要讓string -> int
    我先用function 把它拆解出來看它裡面的key value

    if (isset($data['num1'])) {
            $num1 =  intval($data['num1']);
        }

        我拿出Value的方式不對，應該要這樣才能取出$key下面的value

# 3. ajax 運算流程與錯誤紀錄

3.
$this層級問題要注意，前面找bug發現自己把this放在form表單.的外面 一直抓不到response
 $('#calcForm').on('submit', function (e) {
            e.preventDefault(); // 阻止表單跳轉

            let data = $(this).serialize(); // 正確抓取整個表單資料
            console.log('送出的 data:', data);