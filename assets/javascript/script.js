var count = 0
var correctScore = 0
var wrongScore = 0
var first_number
var second_number
var counter
var timer
var selectedOption
var wins = 0
var losses = 0
var level = 1


// var iFrequency = 5000; // expressed in miliseconds
var myInterval = 0

function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

function on2() {
    document.getElementById("overlayLogin").style.display = "block";
}

function off2() {
    document.getElementById("overlayLogin").style.display = "none";
}

function callMyFuntion() {
    $(document).ready(function() {
        $('#playTwo').animate({ marginLeft: '+=100.5px' });
        wrongScore++
         $("#dummyBtn").click()
    })
}


$(document).ready(function() {



    function startLoop(iFrequency) {
        if (myInterval > 0) clearInterval(myInterval); // stop
        myInterval = setInterval("callMyFuntion()", iFrequency); // run
        // wrongScore++
        // checkScore()
        // $("#dummyBtn").click()
    }
        // to use enter to submit
    $.fn.enterKey = function(fnc) {
        return this.each(function() {
            $(this).keypress(function(ev) {
                var keycode = (ev.keyCode ? ev.keyCode : ev.which);
                if (keycode == '13') {
                    fnc.call(this, ev);
                }
            })
        })
    }


// checkScore()

    $("#dummyBtn").click(function(){
        checkScore()
    });


    function starter() {
        var selectedOption = $('#selectMultipier option:selected').text();
        console.log(selectedOption.length)
        console.log(selectedOption)
        if (selectedOption.length > 3) {
            newProblem()
            var timeToCount = levelCountDownChecker()
            console.log(timeToCount)
            startLoop(8000)
        } else {
            selectedOption = parseInt(selectedOption)
            newProblemRestricted(selectedOption)
            startLoop(8000)
        }

    }



    $("#start").click(function() {
        starter()
        document.getElementById('start').innerHTML = 're-start'
    });


  // timer = new Timer();
  var innerTimer = 0
    function callTimer() {

        innerTimer++
        if(!timer){
            timer = new Timer();
        }
       console.log('coun' + innerTimer)

        // console.log('call time being called')
        levelCountDownChecker()
        // console.log(timer)
        // timer.start({ countdown: true, startValues: { seconds: 10 } });
        $('.values').html(timer.getTimeValues().toString());
        timer.addEventListener('secondsUpdated', function(e) {
            $('.values').html(timer.getTimeValues().toString());
        });
        timer.addEventListener('targetAchieved', function(e) {
            $('#playTwo').animate({ marginLeft: '+=100.5px' });

            wrongScore++
            $('.values').html('TIMESUP!!');
            // callTimer()
        });
    }




    // picks random numbers and displays in DOM
    function newProblem() {
        if (timer) {
            timer.reset()
        }

        // if (level > 1) {
        //     callTimer()
        // }

        first_number = Math.ceil((Math.random() * 10));
        second_number = Math.ceil((Math.random() * 10));
        createBlocks(first_number)
        document.getElementById('equationToSolve').innerHTML = first_number + "X" + second_number + '=';
        // callTimer()
    }

    function newProblemRestricted(number) {
        if (timer) {
            timer.reset()
        }
        // clearInterval(counter)
        first_number = number
        second_number = Math.ceil((Math.random() * 10))
        createBlocks(first_number)

        document.getElementById('equationToSolve').innerHTML = first_number + "X" + second_number + '=';
        // callTimer()
    }



    function createBlocks(number) {
        console.log(number)
        $('.numbers').empty();
        var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        var equals = []
        for (x = 0; x < numbers.length; x++) {
            product = number * numbers[x]
            equals.push(product)
        }
        console.log(equals)

        for (i = 0; i < equals.length; i++) {
            var answerBtn = $('<button>');
            answerBtn.addClass('btn btn-success buttons')
            answerBtn.attr('data-let', equals[i]);
            answerBtn.text(equals[i]);
            $('.numbers').append(answerBtn);

        }
    }


    // takes input and checks if answer is correct
    $("#submit").click(function() {
        var input = $("input").val();
        runnerLogic(input)
    });

    $("#input").enterKey(function() {
        var input = $("input").val();
        runnerLogic(input)

    })


    $(document).on("click", ".buttons", function() {
        console.log('hello there')
        var letter = $(this).text()
        input = parseInt(letter)
        runnerLogic(input)

    })



    function runnerLogic(x) {
        // var input = $("input").val();
        answer = parseInt(x)
        console.log(answer)
        console.log(first_number)
        console.log(second_number)
        document.getElementById('input').value = ''

        if (parseInt(first_number) * parseInt(second_number) == answer) {
            document.getElementById('answerSymbol').innerHTML = "<i class='fas fa-check-circle fa-3x' id='correctCheck'></i>";
            setTimeout(function() {
                $('#answerSymbol').empty();
            }, 500)
            $('#playOne').animate({ marginLeft: '+=125.5px' });
            correctScore++
            console.log('correct: ' + correctScore)
            checkScore()
        } else {
            document.getElementById('answerSymbol').innerHTML = "<i class='fas fa-check-circle fa-3x' id='wrongCheck'></i>";
            setTimeout(function() {
                $('#answerSymbol').empty();
            }, 500)
            $('#playTwo').animate({ marginLeft: '+=125.5px' });
            wrongScore++
            console.log('wrong: ' + wrongScore)
            checkScore()
        }

    }

    function checkScore() {
        if (correctScore == 5) {
            correctScore = 0
            wrongScore = 0
            wins++
            level++
            $('#level').empty();
            $('#level').append(level);
            // if (timer) {
            //     timer.stop()
            //     timer.reset()
            // }

            $('#winScore').empty();
            $('#winScore').append(wins);
            $('#playOne').animate({ marginLeft: '0px' });
            $('#playTwo').animate({ marginLeft: '0px' });
            starter() 
        } else if (wrongScore == 12) {
            correctScore = 0
            wrongScore = 0
            losses++
            // if (timer) {
            //     timer.stop()
            //     timer.reset()
            // }
            $('#loseScore').empty();
            $('#loseScore').append(losses);
            $('#playOne').animate({ marginLeft: '0px' });
            $('#playTwo').animate({ marginLeft: '0px' });
            starter() 
        } else {
            console.log('ws' + wrongScore)
            starter()
            console.log('keep playing')
        }
    }

    var firstTime = true;
    function levelCountDownChecker() {
        if(level == 1 || level == 2){
            return 8000
        }
        if (level == 3) {
            $(".numbers").hide();
            $("#answer").show();
            checkHowOften()
            return 8000
    
        } else if (level == 4) {
            return 6000
        } else if (level == 5 || level == 6) {
            return 5000
        } else if (level == 7) {
            return 5000
        } else if (level > 8) {
            return 3000
        }
    }


    function checkHowOften(){
        if(firstTime){
        document.getElementById('dynamicMessage').innerHTML = "Looking Good!, Now it will get a little more challenging.  You will now have to input the answers yourself.";
          $("#miscButton").click();  
          firstTime = false
        }
 
    }



}); //end document ready jquery