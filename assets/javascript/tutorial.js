$(document).ready(function() {

    $('.tutorial').click(function() {
        var value = $(this).text()
        if(value.length <= 2){
        	value = parseInt(value)
        	newProblemRestricted(value)
        }else{
        	newProblem()
        }

    })


    function newProblem() {
    	// var arrayToMultiply = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        first_number = Math.ceil((Math.random() * 10));
        second_number = Math.ceil((Math.random() * 10));
        result = first_number * second_number

        responsiveVoice.speak(first_number + "times" + second_number + '=' + result);
        document.getElementById('tutorialMain').innerHTML = first_number + "X" + second_number + '=' + result;
        // callTimer()
    }

    function newProblemRestricted(number) {
    	// var counter = 0
    	var arrayToMultiply = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        // clearInterval(counter)
        first_number = number
        second_number = Math.ceil((Math.random() * 10))
        result = first_number * second_number

        responsiveVoice.speak(first_number + "times" + second_number + '=' + result);
        document.getElementById('tutorialMain').innerHTML = first_number + "X" + second_number + '=' + result;
        // counter++
        // callTimer()
    }


})