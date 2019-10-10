// To Do:
//
// bug - fix final page after reset.
// fix - capitals accross answers and questions
// fix - margins, so box is same height throughout quiz one different screen sizes
// write Read me


$(document).ready(function() {

    //set global variables
    let quiz = { 
        'question-1': {q: 'What do the Dursley\'s get Harry for Christmas in his first year?', 
            a1: 'Old Socks', a2: 'Tissue', a3: '50 pence piece', a4: 'Toothpick', c: '50 pence piece', img:'assets/images/steam.webp'},
        'question-2': {q: 'Which store is NOT in Diagon Alley?', 
            a1: 'Eeylops Owl Emporium', a2: 'Dervish & Bangs', a3: 'Magical Menagerie', a4: 'Twilfitt & Tatting\'s', c: 'Dervish & Bangs', img:'assets/images/liar.webp'},
        'question-3': {q: 'What spell made Herminone\'s teeth to rapidly enlarge?', 
            a1: 'Densaugeo', a2: 'Tarantellegra', a3: 'Episkey', a4: 'Fornunculus', c: 'Densaugeo', img:'assets/images/worth-it.webp'},
        'question-4': {q: 'What was the first potion Snape makes first year\'s learn?', 
            a1: 'Confusing Concoction', a2: 'A potion to cure boils', a3: 'Polyjuice Potion', a4: 'An antidote to common poisons', c: 'A potion to cure boils', img:'assets/images/slap.webp'},
        'question-5': {q: 'What was Harry\'s first pet?', 
            a1: 'Snow Owl', a2: 'Frog', a3: 'Snake', a4: 'Cat', c: 'Cat', img:'assets/images/cat.webp'},
        'question-6': {q: 'What is Harry\'s signiture spell?', 
            a1: 'Expelliarmus', a2: 'Avada Kedavra', a3: 'Hocus Pocus', a4: 'Accio', c: 'Expelliarmus', img:'assets/images/clap.webp'},
        'question-7': {q: 'What does Dumbledore love about Muggle magazines?', 
            a1: 'Gardening supplements', a2: 'Comic strips', a3: 'Crossword puzzles', a4: 'Knitting patterns', c: 'Knitting patterns', img:'assets/images/vold.webp'},
        'question-8': {q: 'What did Dobby the House Elf call Ron?', 
            a1: 'Won-Won', a2: 'Weasel', a3: 'Wheezy', a4: 'Woozy', c: 'Wheezy', img:'assets/images/fire.webp'},

    }
    
    //set time per question and time counter
    let time = 20;
    let countDown;
    let correct = 0;
    let incorrect = 0;
    let timeOut = 0;
    let answer;
    let correctAnswer;
    let i = 0;
    let questionUnclicked = true;

    //set functions
    function scoreScreen (x) {
        
        if (x === 1) {
            //what happens if they got the answer right
            correct++
        
            //wipe screen
            $('.question-box').css('display', 'none');
            $('#question').css('display', 'none');
            $('.time').css('display', 'none');
            
            //put score stuff on screen
            $('#score-page').css('display', 'block')
            
            $('#question-resolution').text('You are Correct!');
            let image = quiz[`question-${i}`].img
            $('#correct-answer').text(`The Correct Answer is:  ${correctAnswer}`);
            $('#gif-display').html(`<img src='${image}' />`);
            
            setTimeout(checkEnd, 4000);

            // <img src='assets/images/clap.webp' />

        } else if (x === 2) {
            //what happens if they got the answer wrong
            incorrect++
            $('.question-box').css('display', 'none');
            $('#question').css('display', 'none');
            $('.time').css('display', 'none');

            //put score stuff on screen
            $('#score-page').css('display', 'block')
            
            $('#question-resolution').text('You are Incorrect!');
            let image = quiz[`question-${i}`].img
            $('#correct-answer').text(`The Correct Answer is:  ${correctAnswer}`);
            $('#gif-display').html(`<img src='${image}' />`);
            
            setTimeout (checkEnd, 4000);

        } else if (x === 0) {
            //what happens if they ran out of time
            timeOut++
            $('.question-box').css('display', 'none');
            $('#question').css('display', 'none');
            $('.time').css('display', 'none');

            //put score stuff on screen
            $('#score-page').css('display', 'block')
            
            $('#question-resolution').text('You ran out of Time!');
            let image = quiz[`question-${i}`].img
            $('#correct-answer').text(`The Correct Answer is:  ${correctAnswer}`);
            $('#gif-display').html(`<img src='${image}' />`);
            
            setTimeout (checkEnd, 4000);

        }
    }

    function checkEnd () {
        
        if (i < 8) {
            start();
            
        } else {
            //Display final page!--------------------
            $('#score-page').css('display', 'none');

            $('#correct-display').css('display', 'block');
            $('#incorrect-display').css('display', 'block');
            $('#time-out-display').css('display', 'block');
            $('#restart').css('display', 'inline-block');

            $('#correct-display').text(`Correct: ${correct}`);
            $('#incorrect-display').text(`Incorrect: ${incorrect} `);
            $('#time-out-display').text(`Ran Out of Time: ${timeOut}`);
            $('#restart').css('display', 'inline-block');
            
        }
    }

    function timeWaster () {
        time--
        
        $('#time-clock').text(time)
        
        if (time > 0) {
            countDown = setTimeout(timeWaster,1000)
            
        } else {
            scoreScreen(0);

        }

    }
    
    function questionTimer() {
        
        $('#time-clock').text(time)

        timeWaster();
        
        $('.question-box').on('click', function() {
            if (questionUnclicked){
                answer = $.trim($(this).text());
                questionUnclicked = false
                clearTimeout(countDown);
                checkCorrectness();//this is happening muiltiple times
                
            }

        })

    };


    function displayQuestion () {
        i++
        
        //render correct answer at this point incase of time out
        correctAnswer = quiz[`question-${i}`].c
        $('#score-page').css('display', 'none')

        $('#question').text(quiz[`question-${i}`].q)
        $('#answer-1').text(quiz[`question-${i}`].a1)
        $('#answer-2').text(quiz[`question-${i}`].a2)
        $('#answer-3').text(quiz[`question-${i}`].a3)
        $('#answer-4').text(quiz[`question-${i}`].a4)
        
    }

    function checkCorrectness () { //finish - find if right or wrong, change text for intermediary screen
        
        if(answer === correctAnswer) {
            //if they got the answer right
            scoreScreen(1);
            
        } else {
            //if they got the answer wrong
            scoreScreen(2);

        }
    }
    
    function start() {
        time = 20;
        questionUnclicked = true;
        displayQuestion();
        questionTimer();
        $('#start').css('display', 'none');
        $('.question-box').css('display', 'block');
        $('#question').css('display', 'block');
        $('.time').css('display', 'block');

    }

    function restart () {
        $('#correct-display').css('display', 'none');
        $('#incorrect-display').css('display', 'none');
        $('#time-out-display').css('display', 'none');
        $('#restart').css('display', 'none');

        $('#start').css('display', 'inline-block');

        correct = 0;
        incorrect = 0;
        timeOut = 0;
        i = 0;

    }

    //start game - call functions
    $('#start').on('click', function () {
        start();
    })

    $('#restart').on('click', function () {
        restart();
        
    })

});