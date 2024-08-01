function maxSumSubarray (arr,k){
    if(k>arr.length){
        return `size exceed`
    }
    let currSum =0
    let maxSum =0
    // sum of first 3
    for (let i=0;i<k;i++){
        currSum+=arr[i]

    }
    maxSum=currSum
    for (i=k;i<arr.length;i++){
        currSum-=arr[i-k]
        currSum+=arr[i]
        maxSum = Math.max(maxSum,currSum)
    }
    return maxSum
}


const arr = [4, 1, 5, 1, 3, 2];
const k = 3;
const result = maxSumSubarray(arr, 3);
console.log(result)