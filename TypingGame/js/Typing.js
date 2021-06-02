
var hiragana = "逃げ恥婚";
var word = "nigehajikon";

var count = 0;
var typeCount = 0;
var MissCount = 0;


var dispword = document.getElementById("DispWord");
dispword.textContent = hiragana;
var typeWord = document.getElementById("Word");
typeWord.textContent = word;
var WordCountLabel = document.getElementById("WordCount");
var MissTypeLabel = document.getElementById("MissType");





window.addEventListener('keydown',function(e){
    console.log(e.key);

    if(e.key === word[count]){
        console.log('good');
        count++;
        updateWord()
        typeCount++;
        WordCountLabel.textContent = typeCount;
    }else{
        console.log('bad');
        MissCount++;
        MissTypeLabel.textContent = MissCount;
    }
});


//入力している文字を更新する関数を作る
function updateWord(){
    var update = "";
    for(var i = 0; i < count; i++){
        update += '-';
    }
    typeWord.textContent = update + word.substring(count);

}