const options=document.querySelectorAll('li');
const search=document.querySelector('input');
search.addEventListener('input',(e)=>{
   options.forEach(li=>{
      if(li.textContent.startsWith(search.value)){
         li.style.display='block';
      }else{
         li.style.display='none';
      }
   })
})
