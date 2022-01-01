// //functions declarations--hoisting works here

// function tweet(){
//     console.log("Hello world, this is my first tweet");
// }

// //functions expression- at the end of code block ';' present
// //hoisting does not work with functions expression
// const watch = function(){
//     console.log("today is a movie day..!");
// };

// //invoking the function
// tweet();
// watch();

// //  parameters and arguments 

// const work = function (energy, time){
//     console.log(`He has spent ${energy} Kg of energy to complete the work in ${time} days.`);
// };

// work('7','6');

//returning the values

    // const sum = function (num1, num2){
    //     return num1 + num2;
    // };

    // const value = sum(2, 3);
    // console.log(value);

    // const estate = function (value, num3){
    //     return value*num3;
    // };
    // const estateValue= estate(value, 5);
    // console.log(estateValue);

    // const estimation = function (estateValue, num4){
    //     return Math.sqrt(estateValue)*num4;
    // };

    // const lastLap = estimation(estateValue, 8);
    // console.log(lastLap)

//Arrow function
// let map1 = [1, 2, 3, 4, 5];
// let map2 = [6, 7, 8, 9, 10];

// let mul = [];

// function multifly(map1, map2){
    
//     for (let i = 0; i < map1.length ; i++ ){
//         mul[i] = map1[i]*map2[i];
    
// }
// return mul;
// }

// console.log(multifly([1, 2, 3, 4, 5],[6, 7, 8, 9, 10]));

// mul.push(4);
// console.log(mul)

// const abc = [2, 3, 4];
// const cbd =[];
// function addition(pet){
//     for (let i = 0; i < abc.length; i++){
//         cbd[i] = abc[i] + pet[i];
//     }
//     return cbd;
// }

// const data = addition([2, 3, 4]);
// console.log(data)
// let multiflication = [];
// for (let i = 0; i < data.length; i++){
//     multiflication[i] = data[i]*mul[i];
// }

// console.log(multiflication)

//Call back functions and Methods

// const aspirants_name = ['Vedha','Shruti', 'Spoorti','Sandhya','Rashmi','Triveni'];


// const toppers_name = (name, index, arr) => {
//     console.log(` ${index} and ${arr} and ${arr}`);
// };


// aspirants_name.forEach(toppers_name);

// // aspirants_name.forEach(function(name, index){
// //     console.log(`${index} is named as ${name}`);
// // });

const ul = document.querySelector('.people');
const para = document.querySelector('.tin');

const pGraph = "Hey gang, and welcome to your  first step on the path to becoming a JavaScript ninja! <br> In this course I'll be teaching you my absolute favourite language (JavaScript!) from the very beginning, right through to creating fully-fledged, dynamic & interactive web experiences.";

para.innerHTML = `<p style = 'color: blue; font-family: cursive'> ${pGraph}</p>`;

const aspirants_name = ['Vedha','Shruti', 'Spoorti','Sandhya','Rashmi','Triveni'];
let html = ``;
aspirants_name.forEach (person => {
    html +=`<li style = 'color: brown; font-family: cursive'>${person}</li>`;});
 
 console.log(html);

ul.innerHTML=html;




