// using selector for find the html element
let value = document.querySelector('.value');
const positive=document.querySelector('.pos');
const negative=document.querySelector('.neg');
const btn = document.querySelectorAll('.btn');
let count=0;

// looping and adding event listener

btn.forEach((item)=> {
    item.addEventListener('click',(e)=>{
const style=e.currentTarget.classList;
if(style.contains('fa-plus-square')){
count++;    
}
else if(style.contains('fa-minus-square')){
    count--
}else{
    count=0;
}
if(count>0){
    value.style.color="green";
    positive.style.display='block'
    negative.style.display='none'
}else if(count==0){
    value.style.color="blue";
    negative.style.display='none'
    positive.style.display='none'

}else{
    value.style.color="red";
    negative.style.display='block'
    positive.style.display='none'
}
value.innerText=count;
  })
})

    
