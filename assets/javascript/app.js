// To Do:
// ending screen "title / ending statment / correct, incorrect, unasnwered / start over button"
// find a way to suffle the answers (make the answers into an array?  how to find correct if = to correct (copy of right answer!!!))
// add video clips to the objects!  // also make the c === answer text

$(document).ready(function() {

    //set global variables
    let quiz = { //what is the best way to show which is correct?
        'question-1': {q: 'What do the Dursley\'s get Harry for Christmas in his first year?', 
            a1: 'Old Socks', a2: 'Tissue', a3: '50 pence piece', a4: 'Toothpick', c: '50 pence piece', i:''},
        'question-2': {q: 'Which store is NOT in Diagon Alley?', 
            a1: 'Eeylops Owl Emporium', a2: 'Dervish & Bangs', a3: 'Magical Menagerie', a4: 'Twilfitt & Tatting\'s', c: 'Dervish & Bangs', i:''},
        'question-3': {q: 'What spell made Herminone\'s teeth to rapidly enlarge?', 
            a1: 'Densaugeo', a2: 'Tarantellegra', a3: 'Episkey', a4: 'Fornunculus', c: 'Densaugeo', i:''},
        'question-4': {q: 'What was the first potion Snape makes first year\'s learn?', 
            a1: 'Polyjuice Potion', a2: 'A potion to cure boils', a3: 'Polyjuice Potion', a4: 'An antidote to common poisons', c: 'A potion to cure boils', i:''},
        'question-5': {q: 'What was Harry\'s first pet?', 
            a1: 'Snow Owl', a2: 'Frog', a3: 'Snake', a4: 'Cat', c: 'Cat', i:''},
        'question-6': {q: 'What is Harry\'s signiture spell?', 
            a1: 'Expelliarmus', a2: 'Avada Kedavra', a3: 'Hocus Pocus', a4: 'Accio', c: 'Expelliarmus', i:''},
        'question-7': {q: 'What does Dumbledore love about Muggle magazines?', 
            a1: 'Gardening supplements', a2: 'Comic strips', a3: 'Crossword puzzles', a4: 'Knitting patterns', c: 'Knitting patterns', i:''},
        'question-8': {q: 'What did Dobby the House Elf call Ron?', 
            a1: 'Won-Won', a2: 'Weasel', a3: 'Wheezy', a4: 'Woozy', c: 'Wheezy', i:''},

    }
    
    

    let i = 30;
    let countDown;

    //set functions
    function timeWaster () {
        i--
        $('#time-clock').text(i)
        if (i > 0) {
            countDown = setTimeout(timeWaster,1000)
        }
    }
    
    function questionTimer() {
        
        $('#time-clock').text(i)

        timeWaster();

        $('.question-box').on('click', function() {
            console.log('working');
            clearTimeout(countDown); //need?
        })
    };


    function displayQuestion () { //setup for loop
        //display time-clock
        $('#question').text(quiz['question-2'].q)
        $('#answer-1').text(quiz['question-2'].a1)
        $('#answer-2').text(quiz['question-2'].a2)
        $('#answer-3').text(quiz['question-2'].a3)
        $('#answer-4').text(quiz['question-2'].a4)

    }

    


    //start game - call functions

    displayQuestion();
    questionTimer();


});