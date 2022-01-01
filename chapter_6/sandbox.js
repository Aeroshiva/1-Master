const Dom = document.querySelector('.dom');

const people =['manu', 'tanu','anu','benu'];

people.forEach(person =>{
    Dom.innerHTML += `<p style ="color: red; margin: 10px;">${person}</p>`;
});