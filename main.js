'use strict';
// 配列でどんな言葉が出るのか用意しておく
let whenTexts = ['平日に','休日に','元旦に','大晦日に','祝日に','夜','朝','学校前に','食事中に','入浴中に','テレビを見ているときに'];
let whereTexts = ['家で','お店で','お風呂場で','お寺で','学校で','職場で','布団で','海で','山で','リビングで','トイレで'];
let whoTexts = ['僕が','私が','親が','子供が','近所の人が','店員さんが','医者が','お坊さんが','総理大臣が','大統領が','先生が','上司が'];
let whatTexts = ['遊んだ','仕事をさぼった','叫んだ','狂った','食べた','くつろいだ','働いた','寝た','話しかけた','一人で笑った'];

// 「いつ」ボタンが押されたときの処理
let whenbtn = document.getElementById('whenButton');
whenbtn.addEventListener('click', function(e){
    let whenText = document.getElementById('whenText');
    // 配列からランダムに選ぶ
    whenText.textContent=whenTexts[Math.floor(Math.random() * whenTexts.length)];
})

// 「どこで」ボタンが押されたときの処理
let wherebtn = document.getElementById('whereButton');
wherebtn.addEventListener('click', function(e){
    let whereText = document.getElementById('whereText');
    // 配列からランダムに選ぶ
    whereText.textContent=whereTexts[Math.floor(Math.random() * whereTexts.length)];
})

// 「誰が」ボタンが押されたときの処理
let whobtn = document.getElementById('whoButton');
whobtn.addEventListener('click', function(e){
    let whoText = document.getElementById('whoText');
    // 配列からランダムに選ぶ
    whoText.textContent=whoTexts[Math.floor(Math.random() * whoTexts.length)];
})

// 「なにを」ボタンが押されたときの処理
let whatbtn = document.getElementById('whatButton');
whatbtn.addEventListener('click', function(e){
    let whatText = document.getElementById('whatText');
    // 配列からランダムに選ぶ
    whatText.textContent=whatTexts[Math.floor(Math.random() * whatTexts.length)];
})

// リセットボタンが押されたときの処理
let resetbtn = document.getElementById('resetButton');
resetbtn.addEventListener('click',function(e){
    // ページをリロード
    window.location.reload();
})
