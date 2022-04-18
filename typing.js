window.addEventListener('load',initialize);

// dom elements
let seconds = document.querySelector('.seconds');
let message = document.querySelector('.message');
let input = document.querySelector('.inputbox');
let scoreDisplay = document.querySelector('.score');
let timeDisplay = document.querySelector('.time');
let currentWord = document.querySelector(".totype")

//global variables
const level = prompt('How many seconds do you think you can beat🤤?') ;
let currentLevel = Number(level);
let time = currentLevel + 1;
let score = 0;
let isplaying;

const words = ['xanthosine' , 'nucleotidase', 'porphyrin' , 'pyrimidine' , 'base analogs', 'conjugation' ,'mutation' , 'adenosine monophosphate'
,'tricarboxylic' , 'glycosaminoglycan' ,'lanosterol' ,'chylomicron' , 'zwitterion' ,'homocysteine' , 'hyaluronic acid'
,'spectrophotometry' , 'electrophoresis','xeroderma pigmentosum', 'prostaglandin', 'peptidiglycan','mevalonate','acridine orange','ethyl methyl sulfonate'
,'nicotinamide adenine dinucleotide' , 'flavin mono nucleotide',
'economic',
'economy',
'edge',
'education',
'effect',
'effort',
'eight',
'either',
'election',
'else',
'employee',
'end',
'energy',
'enjoy',
'enough',
'enter',
'entire',
'environment',
'environmental',
'especially',
'establish',
'even',
'evening',
'event',
'ever',
'every',
'everybody',
'everyone',
'everything',
'evidence',
'exactly',
'example',
'executive',
'exist',
'expect',
'experience',
'expert',
'explain',
'eye',
'face',
'fact',
'factor',
'fail',
'fall',
'family',
'far',
'fast',
'father',
'fear',
'federal',
'feel',
'feeling',
'few',
'field',
'fight',
'figure',
'fill',
'film',
'final',
'finally',
'financial',
'find'];

function showWord(words){
    const randIndex = Math.floor( Math.random() * words.length);
    currentWord.innerHTML = words[randIndex];
}

function initialize(){
    showWord(words);
    seconds.innerHTML = currentLevel;
    input.addEventListener('input', startGame);
    setInterval (countdown , 1000);
    setInterval (checkStatus , 50);
}

function countdown(){
    if (time > 0 ){
        time--;
    }else if (time === 0){
        isplaying = false;
    }
    timeDisplay.innerHTML= time;
}

function checkStatus(){
        if (!isplaying && time === 0){
            message.innerHTML = 'Gameover!!!'
            score=-1;
        }
    }

function checkMatch(){
    const inputValue = input.value.toLowerCase();
        if(inputValue === currentWord.innerHTML){
        message.innerHTML = 'Correct!!!'
        return true;
    }else{
        message.innerHTML = '';
        return false;
    }
}

function startGame(){
    if(checkMatch()){
    isplaying = true;
    time = currentLevel ;
    showWord(words);
    input.value ='';
    score++;
    }

    if (score === -1){
    scoreDisplay.innerHTML = '0';
    } else {
    scoreDisplay.innerHTML = score;
    }
}