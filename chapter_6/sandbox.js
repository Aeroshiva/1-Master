// const Dom = document.querySelector('.dom');

// const people =['manu', 'tanu','anu','benu'];

// people.forEach(person =>{
//     Dom.innerHTML += `<p style ="color: red; margin: 10px;">${person}</p>`;
// });

//get and Set Attributes

    // const link = document.querySelector('a');
    // const head = document.querySelector('h1');
    // console.log(link.getAttribute('href'));
    // link.setAttribute('href','https://www.insightsonindia.com');
    // link.innerText='Welcome InsightsIAS website';
    // //head.setAttribute('style','color:blue;')

//changing CSS styles:
    // console.log(head.style.color);
    // head.style.fontSize = '20px';
    // head.style.color='';

//Adding and changing page content

    // const content = document.querySelector('p');

    // console.log(content.classList);
    // content.classList.add('succes');
    // content.classList.remove('succes');

const paras = document.querySelectorAll('p');

paras.forEach( para => {
    if(para.textContent.includes('error')){
    para.classList.add('error');
    } else if(para.textContent.includes('success')){
        para.classList.add('success');
    } else{
        para.style.color ='blue';
    }  
    }); 