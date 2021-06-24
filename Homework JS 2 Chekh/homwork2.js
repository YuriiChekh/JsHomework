// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// const arr = [2, 4, 5, 6, 7]
// const arr1 = ['owu', 'hello', 'octe', 'ua', 'com']
// const arr2 = [5, false, true, 4, 'owu']
// console.log(arr)
// console.log('--------')
// console.log(arr1)
// console.log('--------')
// console.log(arr2)

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// const arr =[]

// arr[0]='hello'
// arr[1]= 2
// arr[2]=true
// arr[3]=false
// arr[4]='Yurii'

// console.log(arr)

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// const names = ['Ellen', 'Rostik', 'Lenovo', 'Marta', 'Maks', 'DIMAS'];

// for (let i =0; i < names.length; i++){
//     document.write(`<div style="background-color: green"> ${names[i]}  </div>`)
//     console.log(names[i])
// }

// const names = ['Ellen', 'Rostik', 'Lenovo', 'Marta', 'Maks', 'DIMAS'];

// for (let i =0; i < names.length; i++){
//     document.write(`<div style="background-color: green"> ${i} ${names[i]}  </div>`)
//     console.log(names[i])
// }

// const names = ['Ellen', 'Rostik', 'Lenovo', 'Marta', 'Maks', 'DIMAS', 'Ellen', 
// 'Rostik', 'Lenovo', 'Marta', 'Maks', 'DIMAS','Ellen', 'Rostik', 'Lenovo', 'Marta', 'Maks', 'DIMAS', 'Max','Vlad'];
// console.log(names.length)

// let i = 0
// while (i<names.length){

//     document.write(`<h2 style="background-color: green"> ${names[i]}  </h2>`)

//     i++
// }
// let i = 0
// while (i<names.length){

//     document.write(`<h2 style="background-color: green"> ${i} ${names[i]}  </h2>`)

//     i++
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// const numbers = [22,33,44,55,66,77,88,99,100,212]
// for (const number of numbers){
//     console.log(number)
// }

// const words = ['Ellen', 'Rostik', 'Lenovo', 'Marta', 'Maks', 'DIMAS','Owu','Com','ua','Hello']
// for (const word of words){
//         console.log(word)
// }
 
// const mix =[2 ,3,4,5,6,true,false,false,'vlad','max']
// for (const max of mix){
//         console.log(max)
// }

// const items =[1,true,'hi',4,false,23,'igor','nulp',5,6]
// // for ( let item of items ){
//     if(typeof item === 'boolean'){
//         console.log(item)
//     }
// }
// for ( let item of items ){
//     if(typeof item === 'number'){
//         console.log(item)
//     }
// }
// for ( let item of items ){
//     if(typeof item === 'string'){
//         console.log(item)
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

// let arrs=[]

// arrs[0]=12
// arrs[1]=true
// arrs[2]='hello'
// arrs[3]='go'
// arrs[4]=false
// arrs[5]=33
// arrs[6]=546
// arrs[7]='football'
// arrs[8]='hi'
// arrs[9]=234

// for( let arr of arrs){
//     console.log(arr)
// }

// for (let i =0; i<10; i++){
//     console.log('Step:',i)
//     document.write('Step' , i)
// }

// for (let i =0; i<100; i++){
//     console.log('Step:',i)
//     document.write('Step' , i)
// }

// for (let i =0; i<100; i+=2){
//     console.log('Step:',i)
//     document.write('Step' , i)
// }

// for (let u=0;u<100;u++){
//     if(u % 2 === 0){
//         console.log(u)
//         document.write(u)
//     }
// }
// for (let u=0;u<100;u++){
//     if(u % 2 === 1){
//         console.log(u)
//         document.write(u)
//     }
// }


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];

// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
//     // TO BE CONTINUED .....
// ]


// let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
    
//     let citiesWithId = [
//         {user_id: 3, country: 'USA', city: 'Portland'},
//         {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//         {user_id: 2, country: 'Poland', city: 'Krakow'},
//         {user_id: 4, country: 'USA', city: 'Miami'}
//     ];

//     let newArr =[]
//     for(let i =0;i<usersWithId.length;i++){
//         for(let u=0;u<citiesWithId.length;u++){
//             if(usersWithId[i].id === citiesWithId[u].user_id){
//                 usersWithId[i].address = citiesWithId[u]
//             }
//         }
//     }
//     newArr.push(usersWithId)
//     console.log(usersWithId)



