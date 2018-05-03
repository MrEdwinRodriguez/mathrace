var count = 0
var correctScore = 0
var wrongScore= 0
var first_number 
var second_number 
var counter
var timer
var selectedOption
var wins = 0
var losses = 0
var level = 1


$(document).ready(function(){
// to use enter to submit
$.fn.enterKey = function (fnc) {
    return this.each(function () {
        $(this).keypress(function (ev) {
            var keycode = (ev.keyCode ? ev.keyCode : ev.which);
            if (keycode == '13') {
                fnc.call(this, ev);
            }
        })
    })
}

function starter(){
    var selectedOption = $('#selectMultipier option:selected').text();
    console.log(selectedOption.length)
    console.log(selectedOption)    
    if(selectedOption.length > 3){     
        newProblem()
        }
    else{
        selectedOption = parseInt(selectedOption)
        newProblemRestricted(selectedOption)
    }

}



$("#start").click(function(){
    starter()
    document.getElementById('start').innerHTML = 're-start'
});


function callTimer(){
    timer = new Timer();
    levelCountDownChecker()

    $('.values').html(timer.getTimeValues().toString());
    timer.addEventListener('secondsUpdated', function (e) {
        $('.values').html(timer.getTimeValues().toString());
    });
    timer.addEventListener('targetAchieved', function (e) {
        $('#playTwo').animate({marginLeft: '+=100.5px'});

        wrongScore++ 
        $('.values').html('TIMESUP!!');
    });
}




// picks random numbers and displays in DOM
function newProblem(){
    if(timer){
        timer.reset()
    }

    if(level > 1){
        callTimer()
    }

    first_number = Math.floor((Math.random() * 10));
    second_number = Math.floor((Math.random() * 10));
    document.getElementById('equationToSolve').innerHTML = first_number + "X"  + second_number + '='; 
}

function newProblemRestricted(number){
    if(timer){
        timer.reset()
    }
    // clearInterval(counter)
    first_number = number
    second_number = Math.floor((Math.random() * 10))

    document.getElementById('equationToSolve').innerHTML = first_number + "X"  + second_number + '='; 
}




// takes input and checks if answer is correct
  $( "#submit" ).click(function() {
    runnerLogic()
    });
  
    $("#input").enterKey(function () {
    runnerLogic()

    })


function runnerLogic(){
    var input = $("input").val();
    answer = parseInt(input)
    console.log(answer)
    console.log(first_number)
    console.log(second_number)
    document.getElementById('input').value = ''

    if(parseInt(first_number) * parseInt(second_number) == answer){
      $('#playOne').animate({marginLeft: '+=100.5px'});
      correctScore++ 
      console.log('correct: ' + correctScore)  
      checkScore() 
    }else{
      $('#playTwo').animate({marginLeft: '+=100.5px'});
      wrongScore++ 
      console.log('wrong: ' + wrongScore) 
      checkScore() 
    }

}

function checkScore(){
    if(correctScore == 5){
        alert('you win this round')
        correctScore = 0
        wrongScore = 0
        wins ++
        level++
        $('#level').empty();
        $('#level').append(level);
        if(timer){
            timer.stop()
            timer.reset()
        }

        $('#winScore').empty();
        $('#winScore').append(wins);
        $('#playOne').animate({marginLeft: '0px'});
        $('#playTwo').animate({marginLeft: '0px'}); 
    }else if ( wrongScore == 15){
        alert ('you lost this round')
        correctScore = 0
        wrongScore = 0
        losses++
        if(timer){
            timer.stop()
            timer.reset()
        }
        $('#loseScore').empty();
        $('#loseScore').append(losses);
        $('#playOne').animate({marginLeft: '0px'});
        $('#playTwo').animate({marginLeft: '0px'}); 
    }else{

        starter()
        console.log('keep playing')
    }
}


function levelCountDownChecker(){
    if(level == 2){
        return timer.start({countdown: true, startValues: {seconds: 10}});
    }else if(level == 3){
        return timer.start({countdown: true, startValues: {seconds: 8}});
    } else if(level == 4 || level == 5){
        return timer.start({countdown: true, startValues: {seconds: 5}});
    } else if(level > 5){
        return timer.start({countdown: true, startValues: {seconds: 3}});;
    } 
}



// $('#playTwo').animate({marginLeft: '+=100.5px'});
// $("#selectMultipier").change(function(){
//     console.log('helloc')
//     var selectedOption = $('#selectMultipier option:selected').text();


//     console.log(selectedOption)
// });








// $("#basicUsage").change(function(){
    // console.log('gereare')
    // var time = $("#basicUsage").val()
    // console.log(time)
// });


    // $('.buttons').on('click', function(){
    //   var letter = $(this).text();
      
    //   $(this).toggle();
    //   console.log(letter);
      
    // check(letter);
      
 //function check   
    // function check(x){
    // var wrong = 0;
    //   for(i=0; i<phrase.length ; i++){
    //     if(phrase[i] == x){
    //     hits++;
    //     $('#playOne').animate({marginLeft: '+=100px'});
    //     // document.getElementsByClassName('index'+i).innerHTML = x;
    //      $('.index'+i).empty();
    //      $('.index'+i).append(x);
    //     // document.getElementsById("phraseHere").innerHTML = x;

        
    // console.log("hits:" +  hits);

    // //calls function to verify if game is over or not
    // winCheck(hits);

    //   }else
    //     {
        
    //     wrong++;
    //     diff = wrong - spaces;
    //     if(diff == counter)
    //     {
    //     lives--;
    //     $('#playTwo').animate({marginLeft: '+=100.5px'});
    //     console.log("lives" + lives);
    //     lossCheck(lives);
    //     }
        
    // }
    
    

    // }
    // } 

    // });// end of on click 


//check if you won
// function winCheck(correct){

//     if(correct == counter){
//     console.log('you win');
//     $("#phraseHere").empty()
//     $(".letters").empty()
//     alert('you win')
//     console.log(counter);
//     wins++;

//     createLetters();
//     $('#winScore').empty();
//     $('#winScore').append(wins);
//     }else{
//     console.log('keep playing');
//     }
// }

//check if loss
// function lossCheck(remain){
//     if(remain == 0){
//     console.log('you lose');
//     losses++;
//     $('#loseScore').empty();
//     $('#loseScore').append(losses);    
//     }else{
//     console.log('keep playing wrongs');
//     }
// }











});//end document ready jquery