// branching bertumpuk sederhana 1 (if-else)
const datas = 6;

if (datas == 5) {
    console.log("ini adalah angka 5");
} else {
    if (datas > 5) {
        console.log("ini adalah bukan angka 5. tapi lebhi besar dari 5");
    } else {
        console.log("ini adalah bukan angka 5. tapi lebih kecil dari 5");
    }
}

if (datas != 5) {
    if (datas > 5) {
        console.log("ini adalah bukan angka 5. tapi lebhi besar dari 5");
    } else {
        console.log("ini adalah bukan angka 5. tapi lebih kecil dari 5");
    }
} else {
    console.log("ini adalah angka 5");
}

console.log("\n");

// brancing bertumpuk sederhana 2 (if-else)

const dataku = 5;

if (dataku == 5) {
    console.log("ini adalah angka 5");
} else if (dataku > 5) {
    console.log(`ini adalah bukan angka 5, tapi lebih besar dari 5`);
} else {
    console.log(`ini adalah bukan angka 5, tapi lebih kecil dari 5`);
}

