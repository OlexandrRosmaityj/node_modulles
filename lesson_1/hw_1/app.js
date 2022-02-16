// // ДЗ://
// //     Всі дії виконувати з допомогою модулів (вручну нічого не створюємо)
// // Створити основну папку (main), в яку покласти дві інші папки: перша - online, друга - inPerson
// // Потім створити в вашому головному файлі (для прикладу app.js) два масиви з обєктами user ({. name: "Andrii", age: 22, city: "Lviv" }),
// // відповідно перший - onlineUsers, другий - inPersonUsers;
// // і створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів, але щоб ваш файл виглядав як
// // NAME: ім'я з обєкту і т.д і всі пункти з нового рядка.
// //
// // Коли ви це виконаєте напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу. (ті, що були в папці inPerson будуть в папці online)
//
const path = require("path");
const fs = require("fs");

// fs.mkdir(path.join(__dirname, 'main', 'online'), {recursive: true}, (err) => {
//     if (err) {
//         console.log(err)
//         throw err;
//     }
// })
//
// fs.mkdir(path.join(__dirname, 'main', 'inPerson'), {recursive: true}, (err) => {
//     if (err) {
//         console.log(err)
//         throw err;
//     }
// })
//
// const onlineUsers = [{
//     name: "Vasja",
//     age: 32,
//     city: 'Lwiw'
// }];

// onlineUsers.forEach(user =>{
// for (const value in user) {
//
//     fs.appendFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), `\n${value}:${user[value]}`,
//         (err) => {
//             if (err) {
//                 console.log(err)
//                 throw err;
//             }
//         })
//      }
// });
//
//
// const inPersonUsers = [{
//     name: "Ivan",
//     age: 21,
//     city: 'Lwiw'
// }];
//
// inPersonUsers.forEach(user => {
// for (const value in user) {
//
//     fs.appendFile(path.join(__dirname, 'main', 'online', 'online.txt'), `\n${value}:${user[value]}`,
//         (err) => {
//             if (err) {
//                 console.log(err)
//                 throw err;
//             }
//         })
//     }
// });


const change = () => {

    fs.readFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), ((err, data) => {
        if (err) {
            console.log(err);
            throw err
        }

        fs.readFile(path.join(__dirname, 'main', 'online', 'online.txt'), (err1, data1) => {
            if (err1) {
                console.log(err1)
                throw err
            }

            fs.appendFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), data1, {flag: 'w'}, err2 => {
                if (err2) {
                    console.log(err2)
                    throw err2
                }

                fs.appendFile(path.join(__dirname, 'main', 'online', 'online.txt'), data, {flag: 'w'}, err2 => {
                    if (err2) {
                        console.log(err2)
                        throw err2
                    }
                });

            });

        });
    }));

}

change();