const reviews=[
{
    id:1,
    name:'Ronald Chord',
    job:"Junior Web developer",
    img:'https://media.istockphoto.com/photos/portrait-young-confident-smart-asian-businessman-look-at-camera-and-picture-id1288538088?s=612x612',
    text:'I am a baby web developer.i have designed and  developed my portfolio.i was worked in many projects.I have around 3 month Experiense in web developing sector'
},
{
    id:2,
    name:'Tamanna bhatia',
    job:"Grapics designer",
    img:'https://media.istockphoto.com/photos/physically-and-mentally-indestructible-picture-id1303384297?s=612x612',
    text:'I am a grapich designer.i have designed and  developed grapical animation.i was worked in many projects.I have around 3 month Experiense in Grapics Design sector'

},{
    id:3,
    name:'le min Ho ',
    job:"Fashion designer",
    img:"https://media.istockphoto.com/photos/portrait-of-a-mature-man-with-a-little-smile-at-the-camera-right-side-picture-id1277873802?s=612x612",
    text:'I am a Fashion Designer.i have designed and  developed fashion .i was worked in many projects.I have around 3 month Experiense in fashion Design sector'

},{
    id:4,
    name:'JOng youY ',
    job:"Buisness interperner",
    img:"https://media.istockphoto.com/photos/portrait-of-a-handsome-black-man-picture-id1289461328?s=612x612",
    text:'I am a Buisnnes Interperner.i have maked many buisness.i was worked in many projects.I have around 3 month Experiense in buisness projects'

}
]
// select the dom selector
const img=document.getElementById('person');
const author=document.getElementById('author');
const job=document.getElementById("job");
const info=document.getElementById('info');

//  selecting button next previous and random
const previous=document.querySelector('.prev-btn');
const next=document.querySelector('.next-btn');

// starting from
let currentItem=0;



// load window intial item from object
window.addEventListener("DOMContentLoaded",()=>{
showPerson(currentItem);
})

function showPerson(person){
    const item=reviews[person];
    img.src=item.img;
    author.innerText=item.name;
    job.innerText=item.job;
    info.innerText=item.text;
}

// adding event listener
next.addEventListener("click",()=>{
    currentItem++;
    if(currentItem>reviews.length-1){
        currentItem=0;
    }
    showPerson(currentItem);
   
})
previous.addEventListener("click",()=>{
    currentItem--;
    if(currentItem<0){
        currentItem=reviews.length-1;
    }
    showPerson(currentItem);
})