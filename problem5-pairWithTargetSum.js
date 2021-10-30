// Pair With Target Sum

function pairSum(arr, target) {
    let map = [];
    let results = [];
    
    for ( let i = 0; i < arr.length; i++ ) {
        if (map[arr[i]] != null) {
           let index = map[arr[i]];
            results[0] = index;
            results[1] = i;
            break;
        } else {
            map[target-arr[i]] = i;
        }
        
    }
    return results;
}
console.log(pairSum([1, 2, 3, 4, 6], 6)) // [1, 3]
console.log(pairSum([2, 5, 9, 11], 11))  // [0, 2]
console.log(pairSum([1, 3, 5, 7], 12))   // [2, 3]
console.log(pairSum([1, 4, 6, 8], 10))   // [1, 2]
console.log(pairSum([1, 5, 6, 7], 6))    // [0, 1]