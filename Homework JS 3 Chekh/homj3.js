// 1) створити функцію яка приймає масив та виводить його
// 
// 
// let arrs = [5,4,3,2];
// function inArr (arrs){
//     console.log(arr);
//     for (const items of arr) {
//         console.log(items);
//     }
// };
// inArr(arrs);
// // 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

// function random (value,num){
//     let arrs=[]
//     for(let i = 0; i < value; i++){
//         arrs.push(Math.floor(Math.random()*num))
//     }
//     return arrs
// }
// let xxx = random(4,9);
// console.log(xxx);


// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function number(num1 , num2 , num3){
//     if(num1<num2 && num1<num3){
//         console.log(num1)
//     } else if(num2<num1 && num2<num3){
//         console.log(num2)
//     } else{
//         console.log(num3);
//     }
//     }
//     number(20,5,9)

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function number(num1 , num2 , num3){
//         if(num1>num2 && num1>num3){
//             console.log(num1)
//         } else if(num2>num1 && num2>num3){
//             console.log(num2)
//         } else{
//             console.log(num3);
//         }
// }
// number(20,500,9)

// 5) створити функцію яка повертає найбільше число з масиву
// let arrs =[23,45,35,77,88,25]
// function maxNumber(mas){
//     let max =mas[0];
//     for(let element of mas){
//         if(element>max){
//             max = element
//         }
     

//     }
//     return max
// }
// let qqq = maxNumber(arrs);
// console.log(qqq);

// 6) створити функцію яка повертає найменьше число з масиву

// let arrs =[29,45,35,77,88,25]
// function maxNumber(mas){
//     let min =mas[0];
//     for(let element of mas){
//         if(element<min){
//             min = element
//         }
     

//     }
//     return min
// }
// let qqq = maxNumber(arrs);
// console.log(qqq);

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// function sum (arr){
//     let i = 0
//     for(const items of arr){
//         i += items;
//     }
//     return i
// }
// let xxx = sum([5,4,6,8])
// console.log(xxx);

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function averageValue (arr){
//         let i = 0
//         for(const items of arr){
//             i += items;
//         }
//         return i / arr.length
//     }
//     let xxx = averageValue([5,4,6,8])
//     console.log(xxx);

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// function objectKey(arr){
//     let key =[]
//     for (let i =0; i<arr.length;i++){
//         for(let keys in arr[i] ){
//             key.push(keys)
//         }
//     }   
//          return key
     
    
// }
// let xxx = objectKey([{name: 'Dima', age: 13}, {model: 'Camry'}])
// console.log(xxx);



// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// function objectValue(arr){
//         let value =[]
//         for (let i =0; i<=arr.length;i++){
//             for(let values in arr[i] ){
//             value.push(arr[i][values])
//             }
//         }   
//              return value
         
        
//     }
//     let xxx = objectValue([{name: 'Dima', age: 13}, {model: 'Camry'}])
//     console.log(xxx);

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

// function addArray(arr1,arr2){
//     let newArray=[]
//     for(i = 0;i < arr1.length;i++){
//         newArray.push(arr1[i] + arr2[i])
//     }
//     return newArray
// }

// let xxx = addArray([3,5,3,4] , [4,3,4,5])
// console.log(xxx);

