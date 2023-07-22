const div = document.querySelector('div')

addEventListener('scroll',()=>{
    
    
    
    
    
 const {scrollTop,clientHeight ,scrollHeight} =document.documentElement; 
 const scrolled = (scrollTop / (scrollHeight-clientHeight)*100);
 div.style.width= `${scrolled}%`
})