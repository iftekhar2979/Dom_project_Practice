const toggleBtn=document.querySelector(".nav-toggle");
const link=document.querySelector(".links");

toggleBtn.addEventListener('click',()=>{
// if(link.classList.contains("show-links")){
// link.classList.remove("show-links" )
// }else{
//     link.classList.add('show-links')
// }

link.classList.toggle("show-links")
})