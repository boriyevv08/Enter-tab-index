let inp = document.querySelector(".inp");
let btn = document.querySelector(".btn");
let ft1 = document.querySelector(".ft-1");
let ft2 = document.querySelector(".ft-2");
let ft3 = document.querySelector(".ft-3");
let text = document.querySelector(".text");
let darkMode = document.querySelector(".dark-mode")
let body =document.querySelector(".bg-info")


btn.addEventListener( 'click', function(){

if(inp.value==1){

   ft1.setAttribute('class','color')
   text.textContent = "Positive index"

}  

else{
   ft1.setAttribute('class','color1')
}


})

btn.addEventListener( 'click', function(){

   if(inp.value==2){
      ft2.setAttribute('class','color')
    
   
      text.textContent = "Negative index"
   
   } 
   
   else{
      ft2.setAttribute('class','color1')
   }
   
   })

   btn.addEventListener( 'click', function(){

      if(inp.value==3){
      
         
         ft3.setAttribute('class','color')
         text.textContent = "Neutral index"
      
      }  

      else{
         ft3.setAttribute('class','color1')
      }
      
      })

      btn.addEventListener( 'click', function(){

         if(inp.value>3 || inp.value<1){
            // ft3.classList('form-text')
            ft3.setAttribute('class','form-text')
            alert('This page says this is invalid')
      
            ft1.setAttribute('class','color1')
            ft2.setAttribute('class','color1')
            ft3.setAttribute('class','color1')

            text.textcontent = "This is invalid"
            
         
         }  
         
         })

   darkMode.addEventListener('click', function(){

      body.classList.toggle('bg-info')

   })