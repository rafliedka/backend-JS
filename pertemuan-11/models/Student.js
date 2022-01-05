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

    static find(id) {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM students WHERE id = ?`;
            db.query(query, id, (err, result) => {
                //destructing array
                const [student] = result;
                resolve(student);
            });
        });
    }

    static async update(id, data) {
        await new Promise((resolve, reject) => {
            const query = `UPDATE students SET ? WHERE id = ?`;
            db.query(query, [data, id], (err, result) => {
                resolve(result);
            });
        });

        //mencari data yang telah diupdate
        const student = await this.find(id);
        return student;
    }

    static async delete(id) {
        return new Promise((resolve, reject) => {
            const query = `DELETE FROM students WHERE id =?`;
            db.query(query, id, (err, result) => {
                resolve(result);
            });
        });
    }
}

//eksport class student
module.exports = Student;