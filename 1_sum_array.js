// Given var arr = [6,3,5,1,2,4], print each value and the sum so far
// Predicted output: Num 6, Sum 6, Num 3, Sum 9, Num 5, Sum 14, Num 1, Sum 15, Num 2, Sum 17, Num 4, Sum 21
// When you have solved this, create new values for your array and ensure it still works as expected.
var sum = 0
var arr = [6,3,5,1,2,4]
for (b = 0; b < arr.length; b++) {
    console.log("Num: " + arr[b])
    sum += arr[b];
    console.log("Sum: " + sum)
}