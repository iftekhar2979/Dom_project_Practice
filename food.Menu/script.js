const menu = [{
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "https://images.pexels.com/photos/2693447/pexels-photo-2693447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    
    category: "lunch",
    price: 13.99,
    img: "https://images.pexels.com/photos/5623997/pexels-photo-5623997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "https://images.pexels.com/photos/2113556/pexels-photo-2113556.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "https://images.pexels.com/photos/5840097/pexels-photo-5840097.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "https://images.pexels.com/photos/4046471/pexels-photo-4046471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "https://images.pexels.com/photos/3692871/pexels-photo-3692871.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "https://images.pexels.com/photos/3702403/pexels-photo-3702403.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "https://images.pexels.com/photos/821403/pexels-photo-821403.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "https://images.pexels.com/photos/4046471/pexels-photo-4046471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "https://images.pexels.com/photos/5623997/pexels-photo-5623997.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  }, {
    id: 11,
    title: "Tison steak",
    category: "dinner",
    price: 22.99,
    img: "https://images.pexels.com/photos/5623997/pexels-photo-5623997.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 12,
    title: "kick me buuddy",
    category: "shakes",
    price: 16.99,
    img: "https://images.pexels.com/photos/4046471/pexels-photo-4046471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  
  {
    id: 13,
    title: "sollk",
    category: "sokaler nastha",
    price: 16.99,
    img: "https://images.pexels.com/photos/4046471/pexels-photo-4046471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];


const sectionCenter = document.querySelector(".section-center");
const newBtn = document.querySelector(".btn-container")

window.addEventListener("DOMContentLoaded", () => {
  displayMenuItem(menu)
  const catagories = menu.reduce((values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category)
    }
    return values
  }, ["all"])
  const catagoriesBtn = catagories.map((catagory) => {
    return `   <button type="button" class="filter-btn" data-id=${catagory}>${catagory}</button>`
  }).join("")

  
  // console.log(catagoriesBtn)
  newBtn.innerHTML = catagoriesBtn;
  const button = document.querySelectorAll(".filter-btn");
  button.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      const menuCatagory = menu.filter(function (menuitem) {
        if (menuitem.category === category) {
          return menuitem
        }
      })
      if (category === "all") {
        displayMenuItem(menu)
      } else {
        displayMenuItem(menuCatagory)
      }

    })

  })

})

// menu item gula display korano dynamicaly

function displayMenuItem(menuItems) {
  let displayMenu = menuItems.map((item) => {
    // console.log(item)
    return `  <article class="menu-item">
    <img src=${item.img} alt="${item.title}" class="photo" />
    <div class="item-info">
      <header>
        <h4>${item.category}</h4>
        <h4 class="price">${item.price}</h4>
      </header>
      <p class="item-text">
     ${item.desc}
      </p>
    </div>
    </article>`
  })
  displayMenu = displayMenu.join("")
  sectionCenter.innerHTML = displayMenu
  console.log(sectionCenter)
}