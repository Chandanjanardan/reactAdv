// function recr(anything){
//     // base conditon
//     if(anything===0){
//         return `reached`
//     }
//     console.log(anything)
//     return recr(anything-1)
// }


// console.log("outcome ",recr(5))
// let arr= [1,2,3,4,5]
// console.log(arr.slice(1))


// multiplication by recurrsion 
function multiplyElements(arr) {
    // Base case: if the array is empty, return 1 (identity for multiplication)
    if (arr.length === 0) {
        return 1;
    }
    
    // Recursive case: multiply the first element with the result of the rest of the array
    return arr[0] * multiplyElements(arr.slice(1));
}

const arr = [1, 2, 3, 4, 5];
const result = multiplyElements(arr);
console.log(result); // Output: 120
