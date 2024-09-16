function mergeSort(arr) {
    // Base case: if the array has fewer than 2 elements, it's already sorted
    if (arr.length < 2) {
        return arr;
    }

    // Divide the array into two halves
    let mid = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid);

    // Recursively sort the left and right halves
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
    let sortedArr = [];
    let i = 0, j = 0;

    // Merge the two sorted arrays into one sorted array
    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] < rightArr[j]) {
            sortedArr.push(leftArr[i]);
            i++;
        } else {
            sortedArr.push(rightArr[j]);
            j++;
        }
    }

    // If there are remaining elements in leftArr, add them to sortedArr
    while (i < leftArr.length) {
        sortedArr.push(leftArr[i]);
        i++;
    }

    // If there are remaining elements in rightArr, add them to sortedArr
    while (j < rightArr.length) {
        sortedArr.push(rightArr[j]);
        j++;
    }

    return sortedArr;
}

const arr = [6, 1, 3, 2, 9, 4, 0,2];
const result = mergeSort(arr);
console.log(result); // Output: [0, 1, 2, 3, 4, 6, 9]
