//promise production
function download(params) {
    return new Promise(function (resovle, reject) {
        const status = true;

        setTimeout(() => {
            if (status) {
                resovle(`download selesai`);
            } else {
                reject(`download gagal`);
            }
        }, 5000);
    });
};

//promise consumtor
download()
    .then(function (result) {
        console.log(result);
    })
    .catch(function (result) {
        console.log(result);
    });