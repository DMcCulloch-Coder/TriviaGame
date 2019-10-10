// To Do:
// ending screen "title / ending statment / correct, incorrect, unasnwered / start over button"
// find a way to suffle the answers (make the answers into an array?  how to find correct if = to correct (copy of right answer!!!))
// add video clips to the objects!  // also make the c === answer text

$(document).ready(function() {

    //set global variables
    let quiz = { 
        'question-1': {q: 'What do the Dursley\'s get Harry for Christmas in his first year?', 
            a1: 'Old Socks', a2: 'Tissue', a3: '50 pence piece', a4: 'Toothpick', c: '50 pence piece', i:'../images/steam.webp'},
        'question-2': {q: 'Which store is NOT in Diagon Alley?', 
            a1: 'Eeylops Owl Emporium', a2: 'Dervish & Bangs', a3: 'Magical Menagerie', a4: 'Twilfitt & Tatting\'s', c: 'Dervish & Bangs', i:'../images/liar.webp'},
        'question-3': {q: 'What spell made Herminone\'s teeth to rapidly enlarge?', 
            a1: 'Densaugeo', a2: 'Tarantellegra', a3: 'Episkey', a4: 'Fornunculus', c: 'Densaugeo', i:'../images/worth-it.webp'},
        'question-4': {q: 'What was the first potion Snape makes first year\'s learn?', 
            a1: 'Polyjuice Potion', a2: 'A potion to cure boils', a3: 'Polyjuice Potion', a4: 'An antidote to common poisons', c: 'A potion to cure boils', i:'../images/slap.webp'},
        'question-5': {q: 'What was Harry\'s first pet?', 
            a1: 'Snow Owl', a2: 'Frog', a3: 'Snake', a4: 'Cat', c: 'Cat', i:'../images/cat.webp'},
        'question-6': {q: 'What is Harry\'s signiture spell?', 
            a1: 'Expelliarmus', a2: 'Avada Kedavra', a3: 'Hocus Pocus', a4: 'Accio', c: 'Expelliarmus', i:'../images/clap.webp'},
        'question-7': {q: 'What does Dumbledore love about Muggle magazines?', 
            a1: 'Gardening supplements', a2: 'Comic strips', a3: 'Crossword puzzles', a4: 'Knitting patterns', c: 'Knitting patterns', i:'../images/vold.webp'},
        'question-8': {q: 'What did Dobby the House Elf call Ron?', 
            a1: 'Won-Won', a2: 'Weasel', a3: 'Wheezy', a4: 'Woozy', c: 'Wheezy', i:'../images/fire.webp'},

    }
    
    //set time per question and time counter
    let time = 30;
    let countDown;
    let correct = 0;
    let incorrect = 0;
    let timeOut = 0;
    let answer;
    let i = 0;

    //set functions
    function timeWaster () {
        time--

        $('#time-clock').text(time)
        
        if (time > 0) {
            countDown = setTimeout(timeWaster,1000)

        } else {
            timeOut++
            checkCorrectness();
            //also need to move to next screens

        }

    }
    
    function questionTimer() {
        
        $('#time-clock').text(time)

        timeWaster();

        $('.question-box').on('click', function(i) {
            answer = $(this).text();
            clearTimeout(countDown);
            checkCorrectness();
            //also need to move to next screen
        })

    };


    function displayQuestion () { //setup for loop
        i++
        $('#question').text(quiz[`question-${i}`].q)
        $('#answer-1').text(quiz[`question-${i}`].a1)
        $('#answer-2').text(quiz[`question-${i}`].a2)
        $('#answer-3').text(quiz[`question-${i}`].a3)
        $('#answer-4').text(quiz[`question-${i}`].a4)
        
    }

    function checkCorrectness () { //finish - find if right or wrong, change text for intermediary screen
        
        if(toString(answer) === quiz[`question-${i}`].c) {
            console.log('correct')
        } else {
            console.log(quiz[`question-${i}`].c)
            console.log(answer)
        }
    }
    
    function start() {
        displayQuestion();
        questionTimer();
        $('#start').css('display', 'none');
        $('.question-box').css('display', 'block');
        $('#question').css('display', 'block');
        $('.time').css('display', 'block');

    }

    function restart () {
        $('#start').css('display', 'block');
        $('.question-box').css('display', 'none');
        $('#question').css('display', 'none');
        $('.time').css('display', 'none');
        correct = 0;
        incorrect = 0;
        timeOut = 0;
        i = 0;

    }

    //start game - call functions
    $('#start').on('click', function () {
        start(i);
    })

    $('#restart').on('click'), function () {
        restart();
    }
});