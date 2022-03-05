const technologies = [{
        id: 1,
        name: 'Black core i3 3.05 ghz',
        img: "./Dekstop/D1.jpeg",
        price: '299',
        catagory: 'dekstop',
    },
    {
        id: 2,
        name: 'Grey core i3 4.05 ghz',
        img: "./Dekstop/D2.jpeg",
        price: '499',
        catagory: 'dekstop',
    },
    {
        id:25,
        name:'Iphone 11Pro Max',
        img:"./SmartPhone/M1.jpeg",
        price:'350',
        catagory:'Mobile',
    },
    
    {
        id:13,
        name:'Sumsung s7 Pro Max',
        img:"./SmartPhone/M2.jpeg",
        price:'180',
        catagory:'Mobile',
    },
    
    {
        id:14,
        name:'HUWayei p90 Max',
        img:"./SmartPhone/M3.jpeg",
        price:'450',
        catagory:'Mobile',
    },
    
    {
        id:15,
        name:'Mi Note 11Pro Max',
        img:"./SmartPhone/M4.jpeg",
        price:'280',
        catagory:'Mobile',
    },
    {
        id: 3,
        name: 'red core i3 3.05 ghz',
        img: "./Dekstop/D3.jpeg",
        price: '249',
        catagory: 'dekstop',
    },
    {
        id: 4,
        name: 'white core i3 3.05 ghz',
        img: "./Dekstop/D4.jpeg",
        price: '759',
        catagory: 'dekstop',
    },
    {
        id: 5,
        name: 'Green core i3 3.05 ghz',
        img: "./Dekstop/D5.jpeg",
        price: '499',
        catagory: 'dekstop',
    },
    {
        id: 6,
        name: 'Green son core i3 3.05 ghz',
        img: "./Dekstop/D6.jpeg",
        price: '299',
        catagory: 'dekstop',
    },
    {
        id: 7,
        name: 'Laptop Hp elitibook 1',
        img: "./Laptop/L1.jpg",
        price: '299',
        catagory: 'laptop',
    },
    {
        id: 7,
        name: 'Laptop Hp lite Book',
        img: "./Laptop/L2.jpeg",
        price: '799',
        catagory: 'laptop',
    },
    {
        id: 8,
        name: 'Dell lite Book',
        img: "./Laptop/L3.jpeg",
        price: '799',
        catagory: 'laptop',
    },
    {
        id:16,
        name:'Real Me 15',
        img:"./SmartPhone/M4.jpeg",
        price:'300',
        catagory:'Mobile',
    },
    {
        id:17,
        name:'Nargon 90 ',
        img:"./SmartPhone/M5.jpeg",
        price:'350',
        catagory:'Mobile',
    },
    {
        id: 8,
        name: 'Dell probook lite Book',
        img: "./Laptop/L4.jpg",
        price: '759',
        catagory: 'laptop',
    },
    {
        id: 10,
        name: 'Tosiba note Book',
        img: "./Laptop/L5.jpeg",
        price: '999',
        catagory: 'laptop',
    },
    {
        id: 11,
        name: 'winbook lite Book',
        img: "./Laptop/L6.jpeg",
        price: '659',
        catagory: 'laptop',
    },
    {
        id: 27,
        name: 'hello',
        img: "./Headphone/H1.jpeg",
        price: '659',
        catagory: 'BigHeadPhone',
    }
]
const sectionRow = document.querySelector('.row')
const newButton = document.querySelector('.btns')
window.addEventListener("DOMContentLoaded", () => {
    displayObjectLoad(technologies)

    const catagoryOption=technologies.reduce((values,items)=>{
        // console.log(values)
        console.log(items.catagory)
        if(!values.includes(items.catagory)){
            values.push(items.catagory)
        }
        return values

    },['All'])
    const catagoryButton=catagoryOption.map((cat)=>{
        return `<button class="btn btn-outline-primary" data-id=${cat}>${cat}</button>`
    }).join("")
    
    newButton.innerHTML=catagoryButton
    const buttons = document.querySelectorAll('.btn-outline-primary')
buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let cat = e.currentTarget.dataset.id; //for finding the dataset of the buttons
        let catagoriesButton = technologies.filter((btnValue) => {
            // console.log(btnValue.catagory)
            // console.log(cat)
            if (btnValue.catagory === cat) {
                // console.log(btnValue)
                return btnValue
            }
        })
        if(cat ==="All"){
            displayObjectLoad(technologies)

        }else{
            displayObjectLoad(catagoriesButton)
        }
    })
})


  
})

function displayObjectLoad(objItems) {
    let displayObj = objItems.map((items) => {
        return `
        <div class="col-md-4 px-4">
        <h2>${items.name}</h2>
        <img src=${items.img} alt="Dekstop one" class="img-fluid" srcset="">
        <h4>Price : $ ${items.price}</h4>
        <p class="h6 text-primary">${items.catagory}</p>
        <button class="btn btn-success">Add to Cart</button>
    </div>
    `
    })
    // console.log(displayObj)
    displayObj = displayObj.join("")
    sectionRow.innerHTML = displayObj
}