/**
 * Description: This program is locked into an infinite loop. Your task is to run and debug the program. 
 * 
 * TODO: The program should exit the loop after counting down from 5 to 1. You should check to make sure the boolean statement
 * is being updated.
 */

function checkPoint1() {
    alert1();
    
    let array = [];
    let x = 1;

    // TODO: Remove the bugs from the code below.
    function getMultiples() {
        console.log("hola");
        while (x <= 50){
            x = x*2
            array.push(x);
            console.log(x);
        }
        return array;
    }
    getMultiples();
    console.log(getMultiples()); 

    // DO NOT CHANGE THE CODE BELOW
    alert2();
}


/************************************************ DONT CHANGE THE CODE BELOW ******************************************************/
function alert1() {
    alert("Oh no! It looks like you are trapped in an infinite loop. Go to the example1.js file and work on checkpoint 1.");
}

function alert2(){
    alert("Congratulations! You have passed checkpoint 1!");
}