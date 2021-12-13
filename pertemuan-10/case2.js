//membuat detik waktu
const sec = (value) => value * 1000;

//membuat const prom
const promise = (waktu, desc) => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(desc)
        }, sec(waktu));
    });
}

//promise producting
function persiapan(params) {
    const prom = promise(1, `persiapan ...`);
    return prom;
}

function rebus(params) {
    const prom = promise(7, `rebus air ...`);
    return prom;
}

function masak(params) {
    const prom = promise(5, `masak mie`);
    return prom;
}

//promise consuming
async function main(params) {
    console.log(await persiapan());
    console.log(await rebus());
    console.log(await masak());
}

main();