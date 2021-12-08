// function formatName(nama) {
//     const result = nama.toUpperCase();
//     return result;
// }

// function getName(nama, callFormatName) {
//     const result = callFormatName(nama);
//     console.log(result);
// }

//callback dengan arrow function
const formatName = (nama) => nama.toUpperCase();

const getName = (nama, callFormatName) => console.log(callFormatName(nama));

getName(`etka`, formatName);