// Given an array, shift all values one position to the left.  Change the final position to 0. Return the changed array
// Predicted Output: shiftLeft([1,2,3,4,5]) should return [2,3,4,5,0];

function shiftLeft(arr) {
    var temp = 0;

    for (i = 0; i < arr.length; i++) {
        temp = arr[i + 1];
        arr[i] = temp

    }
    
    arr.pop()
    arr.push(0)
    return arr
}
var resultArr = shiftLeft([1, 2, 3, 4, 5]);
console.log(resultArr);