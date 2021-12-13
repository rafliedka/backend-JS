//setting satuan waktu
const sec = (value) => value * 1000;

//informasi download selesai
const showDownload = (result) => {
    console.log(`Download Selesai`);
    console.log(`Hasil Download: ${result}`);
}

//downloading time
const download = (callBack) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(callBack(`Windows-10.exe`))
        }, sec(3));
    })
}

async function main(params) {
    await download(showDownload);
}

main();