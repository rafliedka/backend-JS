//productioning promise
function persiapan(params) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(`persiapan ...`)
        }, 3000);
    });
}

function rebusAir(params) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("merebus air ...");
        }, 7000);
    });
}

function masak(params) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(`masak mie ... `)
        }, 5000);
    });
}

// //promise consumetor
// function main(params) {
//     persiapan()
//     .then(function (result) {
//         console.log(result);
//         return rebusAir();
//     })
//     .then(function (result) {
//         console.log(result);
//         return masak();
//     })
//     .then(function(result) {
//         console.log(result);
//     })
//     .catch(function (err) {
//         console.log(err);
//     });
// }


//consuming promise dengan async await
async function main(params) {
    console.log(await persiapan());
    console.log(await rebusAir());
    console.log(await masak());
}
main();