// 1 створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами User

// function User(id,name,surname,email,phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
    
// }

// let users = [
//     new User(1,'Andriy','Vovkun',"lamah980500198@gmail.com",'+380676645434'),
//     new User(2,'Artem','Chekh',"lamah980500198@gmail.com",'+380676645434'),
//     new User(3,'Artur','Shuta',"lamah980500198@gmail.com",'+380676645434'),
//     new User(4,'Yura','Hridoviy',"lamah980500198@gmail.com",'+380676645434'),
//     new User(5,'Vlad','Mahno',"lamah980500198@gmail.com",'+380676645434'),
//     new User(6,'Max','Vovk',"lamah980500198@gmail.com",'+380676645434'),
//     new User(7,'Anton','DIOMA',"lamah980500198@gmail.com",'+380676645434'),
//     new User(8,'Mark','fediv',"lamah980500198@gmail.com",'+380676645434'),
//     new User(9,'Andriy','Tkach',"lamah980500198@gmail.com",'+380676645434'),
//     new User(10,'Marko','Vovkun',"lamah980500198@gmail.com",'+380676645434')

// ]
// console.log(users);

// 2 створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// class Client {
//     constructor(id,name,surname,email,phone,order=['product1','product2']){
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order
//     }
// }

// let Clients=[
//     new Client(1,'Andriy','Vovkun',"lamah980500198@gmail.com",+380676645434,['product1', 'product2 ']),
//     new Client(2,'Artem','Chekh',"lamah980500198@gmail.com",+380676645434,['product3','product4']),
//     new Client(3,'Artur','Shuta',"lamah980500198@gmail.com",+380676645434,['product5','product6']),
//     new Client(4,'Yura','Hridoviy',"lamah980500198@gmail.com",+380676645434,['product6','product8']),
//     new Client(5,'Vlad','Mahno',"lamah980500198@gmail.com",+380676645434,['product4','product2']),
//     new Client(6,'Max','Vovk',"lamah980500198@gmail.com",+380676645434,['product3','product1']),
//     new Client(7,'Anton','DIOMA',"lamah980500198@gmail.com",+380676645434,['product9','product5']),
//     new Client(8,'Mark','fediv',"lamah980500198@gmail.com",+380676645434,['product2','product8']),
//     new Client(9,'Andriy','Tkach',"lamah980500198@gmail.com",+380676645434,['product6','product7']),
//     new Client(10,'Marko','Vovkun',"lamah980500198@gmail.com",+380676645434,['product10','product9'])

   
// ]
// console.log(Clients);

// 3 Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// function Car(model,mark,year,maxSpeed,engineCapacity,driver){
//     this.model =model
//     this.mark =mark
//     this.year =year
//     this.maxSpeed =maxSpeed
//     this.engineCapacity =engineCapacity
//     this.driver = driver
    
    

//             this.drive = function(maxSpeed){
//                 console.log(`Їдемо зі швидкістю ${maxSpeed} на годину`);
//             }
//             this.info =function(){
//                     console.log(`Mark - ${this.mark}. Model - ${this.model}. Year- ${this.year}. Max speed -${this.maxSpeed}. Engine capacity - ${this.engineCapacity}`);
//                 }
//             this.increaseMaxSpeed =function(newSpeed){
//                 this.maxSpeed += newSpeed
//             }
//             this.changeYear = function(newValue){
//                 this.year = newValue
//             }
//             this.addDriver = function(driver){
//                 this.driver = driver
//             }
// }
// let auto = new Car('Camry','Toyota',2017,170,3.5,{name:'Yurii Chekh',age:18})
// // console.log(auto);
// auto.drive(auto.maxSpeed)
// auto.info()
// auto.increaseMaxSpeed(100)
// auto.changeYear(2020)
// auto.addDriver(auto.driver)
// console.log(auto);

// 4 Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// class Car {
//     constructor(model,mark,year,maxSpeed,engineCapacity,driver){
//         this.model =model
//         this.mark =mark
//         this.year =year
//         this.maxSpeed =maxSpeed
//         this.engineCapacity =engineCapacity
//         this.driver = driver 
//     }
//     drive (maxSpeed){
//   console.log(`Їдемо зі швидкістю ${maxSpeed} на годину`);
// };

// info () {
//     console.log(`Mark - ${this.mark}. Model - ${this.model}. Year- ${this.year}. Max speed -${this.maxSpeed}. Engine capacity - ${this.engineCapacity}`);
//     };
// increaseMaxSpeed (newSpeed){
//     this.maxSpeed += newSpeed
//         };
// changeYear (newValue){
//     this.year = newValue
//      };
// addDriver (driver){
//     this.driver = driver
//     };
// }

//     let auto = new Car('Camry','Toyota',2017,170,3.5,{name:'Yurii Chekh',age:18})
// // console.log(auto);
// auto.drive(auto.maxSpeed)
// auto.info()
// auto.increaseMaxSpeed(100)
// auto.changeYear(2020)
// auto.addDriver(auto.driver)
// console.log(auto);

// 5 Взяти масив з завдання 1.
// function User(id,name,surname,email,phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
    
// }

// let users = [
//         new User(1,'Andriy','Vovkun',"lamah980500198@gmail.com",'+380676645434'),
//         new User(2,'Artem','Chekh',"lamah980500198@gmail.com",'+380676645434'),
//         new User(3,'Artur','Shuta',"lamah980500198@gmail.com",'+380676645434'),
//         new User(4,'Yura','Hridoviy',"lamah980500198@gmail.com",'+380676645434'),
//         new User(5,'Vlad','Mahno',"lamah980500198@gmail.com",'+380676645434'),
//         new User(6,'Max','Vovk',"lamah980500198@gmail.com",'+380676645434'),
//         new User(7,'Anton','DIOMA',"lamah980500198@gmail.com",'+380676645434'),
//         new User(8,'Mark','fediv',"lamah980500198@gmail.com",'+380676645434'),
//         new User(9,'Andriy','Tkach',"lamah980500198@gmail.com",'+380676645434'),
//         new User(10,'Marko','Vovkun',"lamah980500198@gmail.com",'+380676645434')
    
//     ]
// - Відфільтрувати , залишивши тільки об'єкти з парними id
// let filter =users.filter(function(user){
//     return user.id%2===0
// })
// console.log(filter);

// - Відсортувати його по id. по зростанню
// let sort = users.sort(function (user1, user2) {
//     	return user1.id - user2.id;
//     });
    // console.log(sort);

// Відсортувати його по id. по спаданню
// let sort = users.sort(function (user1, user2) {
//     return user2.id - user1.id;
// });
// console.log(sort);

// 6. Взяти масив з завдання 2.
//     Відсортувати його по кількості товарів в полі order. по спаданню
class Client {
        constructor(id,name,surname,email,phone,order=['product1','product2']){
            this.id = id;
            this.name = name;
            this.surname = surname;
            this.email = email;
            this.phone = phone;
            this.order = order
        }
    }
    
    let clients=[
        new Client(1,'Andriy','Vovkun',"lamah980500198@gmail.com",+380676645434,['product1', 'product2 ','product4']),
        new Client(2,'Artem','Chekh',"lamah980500198@gmail.com",+380676645434,['product3']),
        new Client(3,'Artur','Shuta',"lamah980500198@gmail.com",+380676645434,['product5','product6','product5','product2']),
        new Client(4,'Yura','Hridoviy',"lamah980500198@gmail.com",+380676645434,['product6','product8','product8','product9','product10']),
        new Client(5,'Vlad','Mahno',"lamah980500198@gmail.com",+380676645434,['product4','product2','profuct4']),
        new Client(6,'Max','Vovk',"lamah980500198@gmail.com",+380676645434,['product3']),
        new Client(7,'Anton','DIOMA',"lamah980500198@gmail.com",+380676645434,['product9','product5']),
        new Client(8,'Mark','fediv',"lamah980500198@gmail.com",+380676645434,['product2','product8']),
        new Client(9,'Andriy','Tkach',"lamah980500198@gmail.com",+380676645434,['product6','product7','product3','product1','product4','product8']),
        new Client(10,'Marko','Vovkun',"lamah980500198@gmail.com",+380676645434,['product10','product9','product3'])
    
       
    ]

    let sort = clients.sort(function (user1, user2) {
            return user2.order.length - user1.order.length;
        });
        console.log(sort);