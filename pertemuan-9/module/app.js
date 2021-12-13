/**
 * import semua method di fruit controller
 * @hint gunakan Destructing object
 */

const {index, store, update, destroy} = require("./FruitController");

const main = () => {
    console.log("menampilkan data buah");
    index();
    console.log(`menambahkan data buah "jambu"`);
    store(`jambu`);
    console.log(`update data index 0 menjadi "anggur"`);
    update(0, `anggur`);
    console.log("menghapus data index 0");
    destroy(0);
};

main();