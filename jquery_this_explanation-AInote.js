// ===== $(this) 用法完整解析 =====

// 首先，我們來理解程式碼的 HTML 結構（推測）
/*
<div class="box">
    <button id="blueBtn" class="btn-class" data-color="blue">藍色按鈕</button>
</div>
<div class="box">
    <button id="redBtn" class="btn-class" data-color="red">紅色按鈕</button>
</div>
*/

<script>
$(document).ready(function () {
    // 1. 元素綁定
    const blueBtn = $("#blueBtn");      // 選取 id="blueBtn" 的元素
    const redBtn = $("#redBtn");        // 選取 id="redBtn" 的元素
    const btnClass = $(".btn-class");   // 選取所有 class="btn-class" 的元素（包含上面兩個按鈕）

    console.log('blueBtn', blueBtn);    // jQuery 物件，包含藍色按鈕
    console.log('redBtn', redBtn);      // jQuery 物件，包含紅色按鈕
    console.log('btnClass', btnClass);  // jQuery 物件，包含所有 .btn-class 按鈕

    // 2. 事件處理
    btnClass.click(function (e) {
        console.log('btnClass click ok');
        
        // 【重點】$(this) 指的是「被點擊的那個按鈕」
        // this = 原生 DOM 元素
        // $(this) = 將原生 DOM 包裝成 jQuery 物件
        
        let btnBox = $(this).parent();          // 取得被點擊按鈕的父元素
        console.log('btnBox', btnBox);
        
        let tmpColor = $(this).attr('data-color');  // 取得被點擊按鈕的 data-color 屬性
        let tmpText = `box ${tmpColor}`;            // 組合新的 class 名稱
        btnBox.attr('class', tmpText);              // 設定父元素的 class
    });
});
</script>

// ===== 詳細說明 $(this) 的運作原理 =====

// 1. 【this 的意義】
btnClass.click(function (e) {
    // 在這個函數內：
    // this = 被點擊的那個 DOM 元素（原生 JavaScript 物件）
    // $(this) = 將 this 包裝成 jQuery 物件，才能使用 jQuery 方法
    
    console.log('原生 this:', this);           // <button id="blueBtn" class="btn-class" data-color="blue">
    console.log('jQuery $(this):', $(this));  // jQuery 物件
});

// 2. 【逐步拆解程式碼執行過程】

// 假設點擊藍色按鈕，執行流程：
btnClass.click(function (e) {
    // Step 1: this 現在指向被點擊的藍色按鈕
    // this = <button id="blueBtn" class="btn-class" data-color="blue">
    
    // Step 2: $(this).parent() 找到按鈕的父元素
    let btnBox = $(this).parent();
    // btnBox = <div class="box">（包含藍色按鈕的 div）
    
    // Step 3: $(this).attr('data-color') 取得按鈕的屬性值
    let tmpColor = $(this).attr('data-color');
    // tmpColor = "blue"
    
    // Step 4: 組合新的 class 名稱
    let tmpText = `box ${tmpColor}`;
    // tmpText = "box blue"
    
    // Step 5: 設定父元素的 class
    btnBox.attr('class', tmpText);
    // 結果：<div class="box blue">
});

// ===== 3. 【不同情況的 $(this) 示範】=====

// 情況 A：點擊藍色按鈕
// HTML: <button id="blueBtn" class="btn-class" data-color="blue">藍色</button>
$('#blueBtn').click(function() {
    console.log($(this).attr('id'));           // "blueBtn"
    console.log($(this).attr('data-color'));   // "blue"
    console.log($(this).text());               // "藍色"
});

// 情況 B：點擊紅色按鈕
// HTML: <button id="redBtn" class="btn-class" data-color="red">紅色</button>
$('#redBtn').click(function() {
    console.log($(this).attr('id'));           // "redBtn"
    console.log($(this).attr('data-color'));   // "red"
    console.log($(this).text());               // "紅色"
});

// ===== 4. 【$(this) vs this 的差異】=====

$('.btn-class').click(function() {
    // 原生 DOM 物件 (this)
    console.log('原生 this:', this);
    console.log('取得 id (原生):', this.id);
    console.log('取得屬性 (原生):', this.getAttribute('data-color'));
    
    // jQuery 物件 $(this)
    console.log('jQuery $(this):', $(this));
    console.log('取得 id (jQuery):', $(this).attr('id'));
    console.log('取得屬性 (jQuery):', $(this).attr('data-color'));
    
    // 只有 jQuery 物件才能使用 jQuery 方法
    // this.parent();        // ❌ 錯誤！原生 DOM 沒有 parent() 方法
    // $(this).parent();     // ✅ 正確！jQuery 物件有 parent() 方法
});

// ===== 5. 【完整的實際應用範例】=====

// HTML 結構
/*
<div class="container">
    <div class="box" id="box1">
        <button class="btn-class" data-color="blue" data-text="藍色主題">藍色按鈕</button>
    </div>
    <div class="box" id="box2">
        <button class="btn-class" data-color="red" data-text="紅色主題">紅色按鈕</button>
    </div>
    <div class="box" id="box3">
        <button class="btn-class" data-color="green" data-text="綠色主題">綠色按鈕</button>
    </div>
</div>
*/

$(document).ready(function() {
    $('.btn-class').click(function() {
        // 取得被點擊的按鈕資訊
        const clickedBtn = $(this);
        const color = clickedBtn.attr('data-color');
        const text = clickedBtn.attr('data-text');
        
        // 取得按鈕的父容器
        const parentBox = clickedBtn.parent();
        
        // 移除其他 box 的 active 狀態
        $('.box').removeClass('active blue red green');
        
        // 為目前的 box 加上對應的 class
        parentBox.addClass(`active ${color}`);
        
        // 顯示資訊
        console.log(`點擊了 ${color} 按鈕，主題：${text}`);
        
        // 可以進一步操作
        clickedBtn.text(`已選擇 ${text}`);
    });
});

// ===== 6. 【箭頭函數的注意事項】=====

$('.btn-class').click(function() {
    // 傳統函數：this 指向被點擊的元素
    console.log('傳統函數 this:', $(this));  // ✅ 正確
});

$('.btn-class').click(() => {
    // 箭頭函數：this 不會指向被點擊的元素！
    console.log('箭頭函數 this:', $(this));  // ❌ 錯誤！this 指向 window
});

// 箭頭函數要使用事件參數
$('.btn-class').click((e) => {
    // 使用 e.target 或 e.currentTarget
    console.log('箭頭函數取得元素:', $(e.currentTarget));  // ✅ 正確
});

// ===== 7. 【常見的 $(this) 使用場景】=====

// 場景 1：切換按鈕狀態
$('.toggle-btn').click(function() {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
        $(this).text('已啟用');
    } else {
        $(this).text('已停用');
    }
});

// 場景 2：表單驗證
$('.form-input').blur(function() {
    const value = $(this).val();
    const fieldName = $(this).attr('name');
    
    if (value === '') {
        $(this).addClass('error');
        $(this).next('.error-msg').text(`${fieldName} 不能為空`);
    } else {
        $(this).removeClass('error');
        $(this).next('.error-msg').text('');
    }
});

// 場景 3：動態內容更新
$('.like-btn').click(function() {
    const currentLikes = parseInt($(this).text());
    $(this).text(currentLikes + 1);
    $(this).addClass('liked');
});

// ===== 總結 =====

/*
$(this) 的核心概念：

1. 【this 的含義】
   - 在事件處理函數中，this 指向觸發事件的 DOM 元素
   - this 是原生 JavaScript 物件，不是 jQuery 物件

2. 【$(this) 的作用】
   - 將原生 DOM 元素包裝成 jQuery 物件
   - 才能使用 jQuery 的方法（如 .parent(), .attr(), .addClass() 等）

3. 【使用時機】
   - 需要操作觸發事件的元素時
   - 需要取得該元素的屬性、內容、父元素等
   - 需要對該元素進行 jQuery 操作時

4. 【注意事項】
   - 傳統函數才有正確的 this，箭頭函數沒有
   - this 是原生物件，$(this) 是 jQuery 物件
   - 不要混淆兩者的使用方法

5. 【你的程式碼解釋】
   當點擊任何 .btn-class 按鈕時：
   - $(this) = 被點擊的那個按鈕
   - $(this).parent() = 該按鈕的父元素
   - $(this).attr('data-color') = 該按鈕的 data-color 屬性值
   - 最終效果：改變父元素的 class 名稱
*/