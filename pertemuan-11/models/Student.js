//import database
const db = require("../config/database");

//membuat class model student
class Student{
    //method static all
    static all() {
        return new Promise((resolve, reject) => {
            const query = "SELECT * from students";
            /**
             * melakukan query menggunakan method querry
             * menerima 2 parameter :query dan callback
             */
            db.query(query, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    console.log(result);
                    resolve(result);
                }
            });
        });
    }

    static create(name, nim, email, jurusan, created_at, updated_at) {
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO students (id, name, nim, email, jurusan, created_at, updated_at) VALUES (NULL, '${name}', '${nim}', '${email}', '${jurusan}', '${created_at}', '${updated_at}')`;

            db.query(query, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    console.log(result);
                    resolve(result);
                }
            });
        }); 
    }
}

//eksport class student
module.exports = Student;