//***1***
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати “Іван”).

// let name = "Ivan";
// let city = name;
// console.log(name)

//***2***
//Який буде результат виконання скрипта?
// let name = "Olga";
// console.log(`привіт ${1}`); // Привіт 1
// console.log(`привіт ${"name"}`); // Привіт name
// console.log(`привіт ${name}`); // ? Привіт Olga

//***3***
//Видобути число зі змінних
// let a = "5";
// let b = "13cvb";
// let c = "12.9sxdcfgv";
// вивести в консоль тип

// a = Number(a);
// console.log(a);
// console.log(typeof a);
// b = parseInt(b);
// console.log(b);
// console.log(typeof b);
// c = parseFloat(c);
// console.log(c);
// console.log(typeof c);

//***4***
//Зробіть, щоб 0.1 + 0.2 = 0.3

// let a = 0.1;
// let b = 0.2;
// let sum = a + b;
// console.log(sum.toFixed(1));

// //***5**
// //Поверніть найбільше число с набору 20, 10, 50, 40

// console.log(Math.max(40, 50, 10, 20));

//***6**
//Поверніть випадкове число в діапазоні від 2 до 4
// let a = Math.random() * (24 - 2) + 2;
// console.log (a.toFixed(0))

//***7**
// //дізнатись довжину message
// const message = "Welcome to Bahamas!";
// console.log(message.length);

// //***8**
// //вивести в консоль message  великими літерами
// console.log(message.toUpperCase);

// //***9**
// // створити пустий об*єкт
// // додати туди ім*я, вік і місто
// // вивести результат в консоль
// // видалити місто
// // додати буль з ключем: like flowers
// // вивести результат в консоль

// let obj = {};
// obj.name = "Ivan";
// obj.age = 12;
// obj.city = "Jajkiv";
// console.log(obj);
// delete obj.city;
// obj["like flowers"] = true;
// console.log(obj);

// //***10**
// // За допомогою циклу  “for…in” вивести в консоль ключі і значення об*єкта

// for (const key in obj) {
//   console.log(key);
//   console.log(obj[key]);
// }
