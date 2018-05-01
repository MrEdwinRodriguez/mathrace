$(document).ready(function(){

$("#start").click(function(){
    newProblem()
    document.getElementById('start').innerHTML = 're-start'
});





var count = 0
var wrong_score= 0
var first_number 
var second_number 

// picks random numbers and displays in DOM
function newProblem(){
  clearInterval(counter)
  function random(){   
    return  Math.floor((Math.random() * 10));
    }

    first_number = random()
    second_number = random()

    document.getElementById('equationToSolve').innerHTML = first_number + "X"  + second_number + '=';

    var count=0;

    var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

    function timer(){
      count++;
      if (count == 6)
      {
            $('#playTwo').animate({marginLeft: '+=100.5px'});
            // $('#loseScore').empty();
            // $('#loseScore').append(wrong_score);
         clearInterval(counter);
         return;
      }

      document.getElementById("timer").innerHTML=count + " secs";
    }
  
}



// takes input and checks if answer is correct
  $( "#submit" ).click(function() {

    var input = $("input").val();
    answer = parseInt(input)
    console.log(answer)
    console.log(first_number)
    console.log(second_number)

    if(parseInt(first_number) * parseInt(second_number) == answer){
      $('#playOne').animate({marginLeft: '+=100.5px'});
      
      newProblem()

      console.log('correct')
    }else{
      $('#playTwo').animate({marginLeft: '+=100.5px'});
      console.log('wrong')
    }

});

  
  








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