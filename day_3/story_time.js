// TODO: Create 4-String variables to introduce develop your story.
// YOUR CODE GOES HERE
let name = "Joe Bob";
let churchName = "the Sistine Chapel";
let friendName = "Sam";
let country = "Italy";
// TODO: Create 3-String variables to set the time period of your story or discuss other number elements.
// YOUR CODE GOES
let timePeriod = "the 1600s ";
let time = "10:00";
let date = "a fine Sunday morning"

// TODO: Create 1-Array variable to show a collection of items your character might have.
// YOUR CODE GOES HERE
let items = ["knapsack", "cudgel", "hit list", "banana", "piece of cheese", "shilling"];
let activities = ["went to get coffee.", "became a criminal.", "went home and fell into a coma."];
// TODO: Create 1-Boolean variable to demonstrate a true or false scenario.
// YOUR CODE GOES HERE
let isHappy = true;

// TODO: Print your story to the console.
// YOUR CODE GOES HERE
if(isHappy = true){
    console.log(name + " was feeling happy.");
}else{
    console.log(name + " was feeling sad.");
}
console.log("On", date+", "+"in "+country+" in " + timePeriod +"at " +time+", "+ name+" went to church at "+churchName+"." +" He had these things in his pockets:");
for(let i = 0; i < items.length; i++){
    console.log("A "+items[i]+",");
}
let rand = Math.floor(Math.random()*3-0)+0;
console.log("And a hat on his head.")
console.log("After church, he " + activities[rand])