function munculSekali(angka) {

    let array_baru = [];

    for(let i = 0; i < angka.length; i++) {
        counter = 0;
        for (let j = 0; j < angka.length; j++) {
            if(angka[i] == angka[j]) counter++;
        }
        if(counter == 1) array_baru += angka[i];
    }
    return array_baru;
}

console.log(munculSekali("1234123"))    // [4]
console.log(munculSekali("76523752"))   // [6, 3]
console.log(munculSekali("12345"))      // [1 2 3 4 5]
console.log(munculSekali("1122334455")) // []
console.log(munculSekali("0872504"))    // [8 7 2 5 4]