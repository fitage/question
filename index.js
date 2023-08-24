// const plusBtn = document.querySelector(".plus")
// const minusBtn = document.querySelector(".minus")
// const ansText = document.querySelector(".ans")
// const icon = document.querySelector(".icon")



// // transversing the DOM
//  const icons = document.querySelectorAll(".icon")

//  icons.forEach(function(btn){
//     btn.addEventListener("click", function(e){
//         const viewAns = e.currentTarget.parentElement.parentElement
//         viewAns.classList.toggle("show-ans")
//     }) 

//  })





// using the element selectors
const question = document.querySelectorAll(".qtn-ans")

question.forEach(function(que){
     const icon = que.querySelector(".icon")
     icon.addEventListener("click", function(){

      question.forEach(function(itemNo){
         if(itemNo !== que){
            itemNo.classList.remove("show-ans")
         }
      })
        que.classList.toggle("show-ans")
     })
})



