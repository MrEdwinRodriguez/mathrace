$(document).ready(function(){

  // var alphabets = ['A','B','C','D', 'E', 'F','G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O','P','Q','R','S', 'T', 'U', 'V', 'W', 'X' , 'Y','Z']

  // console.log(alphabets);

// var counter = 0;
// var spaces = 0;
// var lives = 9;




newProblem()

var count = 0
var wrong_score= 0
var first_number 
var second_number 

// picks random numbers and displays in DOM
function newProblem(){

  function random(){   
    return  Math.floor((Math.random() * 10));
    }

    first_number = random()
    second_number = random()

    console.log(first_number)
    console.log(second_number)
    document.getElementById('equationToSolve').innerHTML = first_number + "X"  + second_number + '=';

    var count=0;

    var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

    function timer(){
      count++;
      if (count == 6)
      {
            wrong_score++
            $('#loseScore').empty();
            $('#loseScore').append(wrong_score);
         clearInterval(counter);
         return;
      }

      document.getElementById("timer").innerHTML=count + " secs";
    }
  
}



// $('#answerForm').submit(function() {
  $( "#submit" ).click(function() {
    // get all the inputs into an array.
    // var $inputs = $('#myForm :input');
    var input = $("input").val();
    answer = parseInt(input)
    console.log(answer)
    console.log(first_number)
    console.log(second_number)

    if(parseInt(first_number) * parseInt(second_number) == answer){
      console.log('correct')
    }else{
      console.log('wrong')
    }

});


// console.log(counter)    
  
// var hits = 0;

//create buttons with letter







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