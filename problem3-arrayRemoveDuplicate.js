// JoinArrayRemoveDuplicate

function JoinArrayRemoveDuplicate(arrayA, arrayB) {
    let arr = arrayA.concat(arrayB);
    let uniqueArr = [];

    for ( let i of arr ) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    return uniqueArr
}

console.log(JoinArrayRemoveDuplicate(["apel", "anggur"], ["lemon", "leci", "nanas"]))
// ["apel", "anggur", "lemon", "leci", "nanas"]
 
console.log(JoinArrayRemoveDuplicate(["samsung", "apple"], ["apple", "sony", "xiaomi"]))
// ["samsung", "apple", "sony", "xiaomi"]
 
console.log(JoinArrayRemoveDuplicate(["football", "basketball"], ["basketball", "football"]))
// [football basketball]