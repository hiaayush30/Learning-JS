//Document Object Model- the whole html page as an object to be manipulated by JS
// handle selection,change and events


const btn=document.querySelector('button');

//handling events
btn.addEventListener('mouseover',(eventInfo)=>{
    //dblclick,mouseover,mouseleave...   
    console.log(eventInfo);
    //btn.textContent +=', Hello There!';
    btn.innerHTML ='<b>Hello</b>';
    btn.style.backgroundColor='red';
})
btn.addEventListener('mouseleave',(eventInfo)=>{
    btn.innerHTML ='<b>come back!</b>';
    btn.style.backgroundColor='red';
})

const div=document.querySelector('div');
//selects the first div
div.classList.add('yo');
// div.classList.remove('yo');

const divs=document.querySelectorAll('div');
//all divs selected


//creating and appending element
const heading=document.createElement('h1');
heading.innerText='hello there!';
heading.id='myHeading';
heading.classList.add('yo');
document.querySelector('body').appendChild(heading);


//removing element
setTimeout(()=>{
    // heading.remove();
    //or
    document.querySelector('body').removeChild(heading);
},3000);

//Event Object
document.querySelector('body').addEventListener('mousemove',(event)=>{
    console.log(event);
})

