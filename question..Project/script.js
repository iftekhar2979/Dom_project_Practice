const plus = document.querySelectorAll(".plus-icon");
const minus = document.querySelectorAll(".minus-icon");
const text = document.querySelectorAll('.text')

// plus.forEach(e => {
//     e.addEventListener("click",(e)=>{
//         // console.log(e.currentTarget.parentElement.parentElement)
//         const tog=e.currentTarget.parentElement.parentElement
//         tog.classList.toggle("show-text")

//     })
// });

const questions = document.querySelectorAll('.question');
questions.forEach((question) => {
    const btn = question.querySelector('.question-btn');
    btn.addEventListener("click", () => {
        
        question.classList.toggle('show-text');
        question.forEach((item) => {
            if (item !== question) {
                item.classList.remove("show-text")
            }
        })
        
    })
})