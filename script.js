var againButton = document.querySelector('#again');
var computeButton = document.querySelector('#compute');
var form = document.querySelector('textarea');

againButton.onclick = function(){
    form.value = '';
    document.querySelector('#count').innerHTML = '';
    document.querySelector('#longest').innerHTML = '';
    document.querySelector('#shortest').innerHTML = '';
    document.querySelector('#backwards').innerHTML = '';
}

computeButton.onclick = function(){
    if(form.value!=''){
        var words = splitToWords(form.value);
        document.querySelector('#count').innerHTML = counter(words);
        document.querySelector('#longest').innerHTML = longest(words);
        document.querySelector('#shortest').innerHTML = shortest(words);
        document.querySelector('#backwards').innerHTML = backwards(form.value);
    } else {
        alert('ну как бы чтобы обработать текст нужен текст, а ты ничего не ввел');
    }
}

function splitToWords(line){
    var words = [];
    words = line.split('\n').join(' ').split('.').join(' ').split(',').join(' ').split('-').join(' ').split('(').join(' ').split(')').join(' ').split('!').join(' ').split('?').join(' ').split(':').join(' ').split(';').join(' ').split('\'').join(' ').split('\"').join(' ').split(' ');
    var l = words.length;
    for(l;l>0;l--){
        if(words[l]==''){
            words.splice(l,1);
        }
    }
    return words;
}

function counter(words){
    var counter = 0;
    for(var i = 0;i<words.length;i++){
        if(words[i]!=''){
        counter++;
        }
    }   
    return counter;
}

function longest(words){
    var lst = '';
    for(var i = 0;i<words.length;i++){
        if(words[i].length>lst.length){
            lst = words[i];
        }
    }
    return lst;
}

function shortest(words){
    var sst = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
    for(var i = 0;i<words.length;i++){
        if(words[i].length<sst.length){
            sst = words[i];
        }
    }
    return sst;
}

function backwards(line){
    return line.split('').reverse().join('');
}