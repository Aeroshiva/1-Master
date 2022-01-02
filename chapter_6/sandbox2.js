//Event Basics

// const button = document.querySelector('button');

// button.addEventListener('click', ()=>{
//     console.log('you clicked me')
// });


// const ul = document.querySelector('ul');

// const button = document.querySelector('button');

// button.addEventListener('click',() => {
//    //ul.innerHTML += '<li> Add something new to do </li>';
//    const li = document.createElement('li');
//    li.textContent = 'Something new To-Do';
//     ul.prepend(li);
//   // ul.append(li);
// });

// const items = document.querySelectorAll('li');

// items.forEach(item=> {
// item.addEventListener('click',e => {
//     //console.log('item clicked');
//     //console.log(e);
//     //console.log(e.target);
//     //e.target.style.textDecoration = 'line-through';
//     e.stopPropagation();
//     e.target.remove();
    
// });
// });

//Event delegation and Event bubbling

// ul.addEventListener('click', e=>{
//    // console.log('event in UL');
//   // console.log(e);
//    if(e.target.tagName === 'LI'){
//        e.target.remove();
//    }
// });

//more DOM
//Copy event
const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', ()=>{
    console.log('OI! my content is copy right')
});
//mouse event
const box =document.querySelector('.box');
box.addEventListener('mousemove', e =>{
   // console.log(e.offsetX, e.offsetY);
   box.textContent = `X pos - ${e.offsetX} Y pos - ${e.offsetY}`
});
//wheel event
document.addEventListener('wheel', e =>{
console.log(e.pageX, e.pageY);
});