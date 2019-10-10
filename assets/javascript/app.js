// To Do:


$(document).ready(function() {

    //set global variables
    let quiz = { 
        'question-1': {q: 'What do the Dursley\'s get Harry for Christmas in his first year?', 
            a1: 'Old Socks', a2: 'Tissue', a3: '50 pence piece', a4: 'Toothpick', c: '50 pence piece', img:'../images/steam.webp'},
        'question-2': {q: 'Which store is NOT in Diagon Alley?', 
            a1: 'Eeylops Owl Emporium', a2: 'Dervish & Bangs', a3: 'Magical Menagerie', a4: 'Twilfitt & Tatting\'s', c: 'Dervish & Bangs', img:'../images/liar.webp'},
        'question-3': {q: 'What spell made Herminone\'s teeth to rapidly enlarge?', 
            a1: 'Densaugeo', a2: 'Tarantellegra', a3: 'Episkey', a4: 'Fornunculus', c: 'Densaugeo', img:'../images/worth-it.webp'},
        'question-4': {q: 'What was the first potion Snape makes first year\'s learn?', 
            a1: 'Polyjuice Potion', a2: 'A potion to cure boils', a3: 'Polyjuice Potion', a4: 'An antidote to common poisons', c: 'A potion to cure boils', img:'../images/slap.webp'},
        'question-5': {q: 'What was Harry\'s first pet?', 
            a1: 'Snow Owl', a2: 'Frog', a3: 'Snake', a4: 'Cat', c: 'Cat', img:'../images/cat.webp'},
        'question-6': {q: 'What is Harry\'s signiture spell?', 
            a1: 'Expelliarmus', a2: 'Avada Kedavra', a3: 'Hocus Pocus', a4: 'Accio', c: 'Expelliarmus', img:'../images/clap.webp'},
        'question-7': {q: 'What does Dumbledore love about Muggle magazines?', 
            a1: 'Gardening supplements', a2: 'Comic strips', a3: 'Crossword puzzles', a4: 'Knitting patterns', c: 'Knitting patterns', img:'../images/vold.webp'},
        'question-8': {q: 'What did Dobby the House Elf call Ron?', 
            a1: 'Won-Won', a2: 'Weasel', a3: 'Wheezy', a4: 'Woozy', c: 'Wheezy', img:'../images/fire.webp'},

    }
    
    //set time per question and time counter
    let time = 30;
    let countDown;
    let correct = 0;
    let incorrect = 0;
    let timeOut = 0;
    let answer;
    let correctAnswer;
    let i = 0;

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
            $('#correct-answer').text(`The Correct Answer is:  ${correctAnswer}`);
            //$('#gif-display').html(`<img src='${quiz[question-i].img}' />`); //fix
            console.log('working')
            setTimeout(checkEnd, 5000);

        } else if (x === 2) {
            //what happens if they got the answer wrong
            incorrect++
            $('.question-box').css('display', 'none');
            $('#question').css('display', 'none');
            $('.time').css('display', 'none');

            //put score stuff on screen
            $('#score-page').css('display', 'block')
            
            $('#question-resolution').text('You are Incorrect!');
            $('#correct-answer').text(`The Correct Answer is: ${correctAnswer}`);
            //$('#gif-display').html(`<img src='${quiz}[question-${i}].img' />`); //check
            
            setTimeout (checkEnd, 5000);

        } else if (x === 0) {
            //what happens if they ran out of time
            timeOut++
            $('.question-box').css('display', 'none');
            $('#question').css('display', 'none');
            $('.time').css('display', 'none');

            //put score stuff on screen
            $('#score-page').css('display', 'block')
            
            $('#question-resolution').text('You ran out of Time!');
            $('#correct-answer').text(`The Correct Answer is:  ${correctAnswer}`);
            //$('#gif-display').html(`<img src='${quiz}[question-${i}].img' />`); //fix
            
            setTimeout (checkEnd, 5000);

        }
    }

    function checkEnd () {
        if (i < 8) {
            displayQuestion();
        } else {
            //Display final page!--------------------
            //clear page of score stuff -------------------------------------
        
            $('#correct-display').text(`Correct: ${correct}`)
            $('#incorrect-display').text(`Incorrect: ${incorrect} `)
            $('#time-out-display').text(`Ran Out of Time: ${timeOut}`)
            $('#restart').css('display', 'inline-block')


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

        $('.question-box').on('click', function(i) {
            answer = $.trim($(this).text());
            clearTimeout(countDown);
            checkCorrectness();

        })

    };


    function displayQuestion () {
        i++
        //render correct answer at this point incase of time out
        correctAnswer = quiz[`question-${i}`].c
        
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
        displayQuestion();
        questionTimer();
        $('#start').css('display', 'none');
        $('.question-box').css('display', 'block');
        $('#question').css('display', 'block');
        $('.time').css('display', 'block');

    }

    function restart () {
        $('#final-page').css('display', 'none');
        $('#start').css('display', 'block');
        
        // $('.question-box').css('display', 'none'); //need???
        // $('#question').css('display', 'none');
        // $('.time').css('display', 'none');

        correct = 0;
        incorrect = 0;
        timeOut = 0;
        i = 0;

    }

    //start game - call functions
    $('#start').on('click', function () {
        start();
    })

    $('#restart').on('click'), function () {
        console.log('working')
        restart();
        
    }

});