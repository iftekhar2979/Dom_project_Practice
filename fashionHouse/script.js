const stock = [{
        id: 1,
        title: "Black Shirt",
        img: "https://images.pexels.com/photos/10397680/pexels-photo-10397680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        prices: "15",
        catagory: "shirt",
        des: "printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,"

    },
    {
        id: 2,
        title: "White Shirt",
        img: "https://images.pexels.com/photos/10261189/pexels-photo-10261189.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        prices: "13",
        catagory: "shirt",
        des: "printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,"

    },
    {
        id: 3,
        title: "red Shirt",
        img: "https://images.pexels.com/photos/10153595/pexels-photo-10153595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        prices: "17",
        catagory: "shirt",
        des: "printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",

    },
    {
        id: 4,
        title: "blue Shirt",
        img: "https://images.pexels.com/photos/4584099/pexels-photo-4584099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        prices: "19",
        catagory: "shirt",
        des: "printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",

    },
    {
        id: 4,
        title: " white T-Shirt",
        img: "https://images.pexels.com/photos/5325881/pexels-photo-5325881.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        prices: "8",
        catagory: "T-shirt",
        des: "printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",

    },
    {
        id: 5,
        title: " Black T-Shirt",
        img: "https://images.pexels.com/photos/6311599/pexels-photo-6311599.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        prices: "18",
        catagory: "T-shirt",
        des: "printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",

    },   {
        id: 6,
        title: "coat",
        img: "https://images.pexels.com/photos/6311599/pexels-photo-6311599.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        prices: "18",
        catagory: "coat",
        des: "printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",

    },
    {
        id: 7,
        title: "pant",
        img: "https://images.pexels.com/photos/6311599/pexels-photo-6311599.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        prices: "18",
        catagory: "pant",
        des: "printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",

    },
    {
        id: 9,
        title: "pant",
        img: "https://images.pexels.com/photos/6311599/pexels-photo-6311599.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        prices: "18",
        catagory: "panty",
        des: "printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",

    },
]

const selectCard = document.querySelector(".section")
const newBtnParent=document.querySelector(".btns")

window.addEventListener("DOMContentLoaded", function () {
    displayClothesItem(stock)

    const catagorieNew=stock.reduce((values,item)=>{
        if(!values.includes(item.catagory)){
            values.push(item.catagory)
        }
        return values
    },["All"])
    const catagorieNewInput=catagorieNew.map((newCatagorie)=>{
        // console.log(newCatagorie)
        return ` <button class="btn btn-outline-primary" data-id="${newCatagorie}">${newCatagorie}</button>`

    }).join("")

    newBtnParent.innerHTML=catagorieNewInput
    // console.log(catagorieNewInput)
    const filterBtn = document.querySelectorAll(".btn")
filterBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const catagorieBtn = e.currentTarget.dataset.id
        // console.log(catagorieBtn)
        const catagoriesFilter = stock.filter((clothes) => {
            if (clothes.catagory === catagorieBtn) {
                return clothes
            }
            
        })
        if(catagorieBtn==="All"){
            displayClothesItem(stock)
        }else{
            displayClothesItem(catagoriesFilter)
        }
        // console.log(catagoriesFilter)
    })
})

})



function displayClothesItem(clothesItem) {
    let displayClothes = clothesItem.map((item) => {

        return `        <div class="row">
        <div class="col-md-6 d-flex">
            <img src=${item.img}
                alt="" class="cat-img" srcset="">
            <div>
                <h4>${item.catagory}</h4>
                <h5>${item.title}</h5>
                <h5>$ ${item.prices}</h5>
                <p>${item.des}</p>
            </div>
        </div>
        <div class="col-md-6 d-flex">
            <img src=${item.img}
                alt="" class="cat-img" srcset="">
            <div>
                <h4>${item.catagory}</h4>
                <h5>${item.title}</h5>
                <h5>$${item.prices}</h5>
                <p>${item.des}</p>
            </div>
        </div>
    </div>`
    })
    displayClothes = displayClothes.join('')
    selectCard.innerHTML = displayClothes
}