// TODO: Create a variable called "fortune" and assign a number between 0 - 10.
// YOUR CODE GOES HERE
var fortune = 6;

// TODO: Create a fortune teller game using conditional statements and comparison operators.
// Conditions
// 1. If fortune is greater than or equal to 0 and less than or equal to 3, then you have a low fortune.
// 2. If fortune is greater than 3 and less than or equal to 7, then you have an average fortune.
// 3. If fortune is greater than 7 and less than or equal to 10, then you have a good fortune.
// 4. If the fortune is out of range, then the fortune can't be read correctly.
function testFortune(fortune){
    if(fortune >= 0 && fortune <= 3){
        return "Bad";
    }else if(fortune > 3 && fortune <= 7){
        return "Average";
    }else if(fortune > 7 && fortune <= 10){
        return "Great!";
    }else{
        return "cannot read"
    }
}
// YOUR CODE GOES HERE
console.log(testFortune(fortune));