let numbers = [1, 69, , 556, 667, 777, 2341, 1232,12,546,67,86,17,46];
let sorted = numbers.sort();
console.table(sorted);

function sorting(array){
    let sorted = array.sort(
        function(a, b){
            return a-b;
        }
    );
    console.log(sorted);
}
function addNumber(array, callBack){
    array.push(333);
    console.log(array);
    callBack(array);

}
addNumber(numbers, sorting);