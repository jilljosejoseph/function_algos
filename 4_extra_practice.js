// So far we've run each of our functions for a single set of inputs and it works! 
// However, the power of functions comes from being able to run our code for a hug variety of inputs
// It's a good idea to run our code with a variety of test cases to ensure it continues working as expected

// NOTE: If your original code doesn't work for some of these cases, that's okay!
// just see what you need to do to you logic to get the listed output


// sigma Test Cases:
// sigma(10)                                //Expected output: 55
// sigma(1)                                 //Expected output: 1
// sigma(0)                                 //Expected output: 0
// sigma(-10)                               //Expected output: 0

function sigma(num) {
    // YOUR CODE HERE
    console.log("adding up");
    var sum = 0;

    for (var i = 1; i <= num; i++) {
        sum = i + sum;
    }
    return sum;
}

var sum = sigma(-10);
console.log(sum);

// greaterThanY Test Cases:
// greaterThanY([5,6,7,8,9,10], 4)          //Expected output: 6
// greaterThanY([5,6,7,8,9,10], 12)         //Expected output: 0
// greaterThanY([1,6,8,3,5,2], -5)          //Expected output: 0
// greaterThanY([-2,-6,-8,-3,-5,-2], -4)    //Expected output: 3
// greaterThanY([], 5)                      //Expected output: 0

function greaterThanY(arr, y) {
    // YOUR CODE HERE
    var count = 0;

    for (i = 0; i < arr.length; i++) {
        if (y < arr[i]) {
            count = count + 1;
        }
    }
    return count;
}
var result = greaterThanY([-2, -6, -8, -3, -5, -2], -4);
console.log(result);


// shiftLeft Test Cases:
// shiftLeft([1,-7,2,-5,8,7,-11,10])        //Expected output: [-7,2,-5,8,7,-11,10,0]
// shiftLeft(["hello","hi","yo","wazzup"])  //Expected output: [hi","yo","wazzup",0]
// shiftLeft([1,2])                         //Expected output: [2,0]
// shiftLeft([1])                           //Expected output: [0]
// shiftLeft([])                            //Expected output: []

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
var resultArr = shiftLeft(["hello","hi","yo","wazzup"]);
console.log(resultArr);



