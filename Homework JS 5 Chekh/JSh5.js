//  Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//     a) отримує текст з параграфа з id "content"
//     b) отримує текст з блоку з id "rules"
//     c) замініть текст параграфа з id 'content' на будь-який інший
//     d) замініть текст параграфа з id 'rules' на будь-який інший
//     e) змініть кожному елементу колір фону на червоний
//     f) змініть кожному елементу колір тексту на синій
//     g) отримати весь список класів елемента з id=rules і вивести їх в console.log
//     h) отримати всі елементи з класом fc_rules
//     i) поміняти колір тексту у всіх елементів fc_rules на червоний

// a) отримує текст з параграфа з id "content"
// let content = document.getElementById('content');
// console.log(content);

// b) отримує текст з блоку з id "rules"
// let rules = document.getElementById('rules');
// console.log(rules);

// c) замініть текст параграфа з id 'content' на будь-який інший
// content.innerText='dkjvekfv fjekrv jdlfjlve kdjflved welkjfldskc kdsjlc'
// console.log(content);

// d) замініть текст параграфа з id 'rules' на будь-який інший
// rules.innerText = 'Ліна Костенко – незаперечний моральний авторитет для українців, і за свій вік вона жодного разу не заплямувала себе компромісами з нечесною владою. Сила волі та незламність письменниці вражають. Та зараз, коли наш простір переповнений інформаційним шумом, Ліна Костенко воліє мовчати. І це горде мовчання теж є позицією.'

// e) змініть кожному елементу колір фону на червоний
// console.log(document.body.children)
// let bodyChildren = document.body.children
// for (let children of bodyChildren){
//     children.style.background = 'red'
// }

// f) змініть кожному елементу колір тексту на синій
// console.log(document.body.children)
// let bodyChildren = document.body.children
// for (children of bodyChildren){
//     children.style.color = 'blue'
// }

// g) отримати весь список класів елемента з id=rules і вивести їх в console.log

///?????????Не розумію завдання??????????? 

// h) отримати всі елементи з класом fc_rules
// let elementsByClassName = document.getElementsByClassName('fc_rules');
// // console.log(elementsByClassName);

// // i) поміняти колір тексту у всіх елементів fc_rules на червоний
// for (let  element of elementsByClassName){
//     element.style.color='red'
// }