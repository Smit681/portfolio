const slides = [{
    image: "./assets/foodhub.jpg",
    name: "FoodHub",
    desc: "Created using Expressin the backend, CSS/Bootstrap/Handlebars/jQuery in the frontend and MongoDB for the database, following MVC software design. User can create a cart of dishes and place an order. Administrators can add/update/remove data from the database. SendGrid is used for sending email upon signup and order. User passwords are encrypted using bcryptjs. Hosted on Heroku.",
    link: "https://foodhub68.herokuapp.com/",
    quote: "An online restaurant where user creates carts, order food and admins manipulates menu using CRUD operations",
    stats: [{ value: "Express WebApp" },
      { value: "CSS/Bootstrap Handlebars/jQuery" },
      { value: "MVC software design" }
    ]
  },
  {
    image: "./assets/tax.jpg",
    name: "Tax calculator",
    desc: "GUI Application to calculate federal and provincial tax deduction on income based on 2022 and 2021 Canada rates. Created using Java and JavaFX.",
    link: "https://github.com/Smit681/Tax-Calculator",
    quote: "Java Application to calculate fedral and provincial tax for 2020 and 2021. Returns Gross income",
    stats: [{ value: "Java/JavaFX/Scenebuilder" },
      { value: "Data Structure/Algorithm" },
      { value: "GUI application" }
    ]
  },
  {
    image: "./assets/inventory.jpg",
    name: "Inventory Management",
    desc: "C++ project created using Object-Oriented programming that processes customer orders at any number of stations and keep inventory track by generating daily report. Implements classes, templets, inheritance, polymorphism, threads, algorithm and creates time-efficient program.",
    link: "https://github.com/Smit681/Customer-Order-and-Inventory-management",
    quote: "C++ algorithm created using OOP concepts. Manages customer orders and inventory of multy location store ",
    stats: [{ value: "Object-Oriented Programming" },
      { value: "Robust algorithm" },
      { value: "Threads/time-efficient" }
    ]
  }
];

let prjdec = document.getElementsByClassName('prjdec')[0];
prjdec.innerHTML = slides[0].desc;

let prjlink = document.getElementsByClassName('getlink')[0];
prjlink.setAttribute("href",slides[0].link)

let slideName = document.getElementsByClassName('slide-name')[0];
slideName.innerHTML = slides[0].name;

let slideImg = document.getElementsByClassName('slide-image')[0];
slideImg.setAttribute("src", slides[0].image);

let quote = document.getElementsByClassName('quote')[0];
quote.innerHTML = slides[0].quote;

let tag1 = document.getElementsByClassName('tag1')[0];
tag1.innerHTML = slides[0].stats[0].value;

let tag2 = document.getElementsByClassName('tag2')[0];
tag2.innerHTML = slides[0].stats[1].value;

let tag3 = document.getElementsByClassName('tag3')[0];
tag3.innerHTML = slides[0].stats[2].value;


function changeName(){
    slideName.innerHTML = slides[counter].name;
    console.log("Hey are you going there?");
}


const nameExit = [
    { transform: 'none' },
    { transform: 'translateX(-100%)', opacity: "0" }
];

const descExit = [
    { transform: 'none' },
    { transform: 'scale(1.4)', opacity: "0" }
];

  const imgExit =[
    { transform: 'none' },
    { transform: 'scale(0.7)', opacity: "0" }
];

const quoteExit=[
    { transform: 'none' },
    { transform: 'scale(0.7)', opacity: "0" }
];

const tag1Exit =[
    { "transform-origin": "5vw 12vw"},
    { transform: 'none' },
    { transform: 'rotate(-90deg)', opacity: "0" }
];

const tag2Exit =[
    { "transform-origin": "20vw -5vw"},
    { transform: 'none' },
    { transform: 'rotate(90deg)', opacity: "0" }
];

const tag3Exit =[
    { "transform-origin": "-5vw -12vw"},
    { transform: 'none' },
    { transform: 'rotate(90deg)', opacity: "0" }
];

function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }

var counter = 0;

function nextProject(){
    
    
    let slideName = document.getElementsByClassName('slide-name')[0];
    
    slideName.classList.remove("name-enter");
    slideName.classList.add("name-exit");
    slideName.animate(nameExit);
    
    slideName.addEventListener("animationend", () => {
        var newone = slideName.cloneNode(true);
        slideName.parentNode.replaceChild(newone, slideName);
        newone.classList.remove("name-exit");
        newone.classList.add("name-enter");
        newone.innerHTML = slides[counter].name;
        let prjlink = document.getElementsByClassName('getlink')[0];
    prjlink.setAttribute("href",slides[counter].link)
    })


    let prjdec = document.getElementsByClassName('prjdec')[0];
    
    prjdec.classList.remove("prjdec-enter");
    prjdec.classList.add("prjdec-exit");
    prjdec.animate(descExit);
    
    prjdec.addEventListener("animationend", () => {
        var newone4 = prjdec.cloneNode(true);
        prjdec.parentNode.replaceChild(newone4, prjdec);
        newone4.classList.remove("prjdec-exit");
        newone4.classList.add("prjdec-enter");
        newone4.innerHTML = slides[counter].desc;
    })

    let image = document.getElementsByClassName('slide-image')[0];
    
    image.classList.remove("image-enter");
    image.classList.add("image-exit");
    image.animate(imgExit);
    
    image.addEventListener("animationend", () => {
        var newone3 = image.cloneNode(true);
        image.parentNode.replaceChild(newone3, image);
        newone3.classList.remove("image-exit");
        newone3.classList.add("image-enter");
        newone3.setAttribute("src", slides[counter].image);
    })
       
    let quote = document.getElementsByClassName('quote')[0];
    
    quote.classList.remove("quote-enter");
    quote.classList.add("quote-exit");
    quote.animate(quoteExit);
    
    quote.addEventListener("animationend", () => {
        var newone2 = quote.cloneNode(true);
        quote.parentNode.replaceChild(newone2, quote);
        newone2.classList.remove("quote-exit");
        newone2.classList.add("quote-enter");
        newone2.innerHTML = slides[counter].quote;
    })

    let tag1 = document.getElementsByClassName('tag1')[0];
    
    tag1.classList.remove("tag1-enter");
    tag1.classList.add("tag1-exit");
    tag1.animate(tag1Exit);
    
    tag1.addEventListener("animationend", () => {
        var newone3 = tag1.cloneNode(true);
        tag1.parentNode.replaceChild(newone3, tag1);
        newone3.classList.remove("tag1-exit");
        newone3.classList.add("tag1-enter");
        newone3.innerHTML = slides[counter].stats[0].value;
    })

    let tag2 = document.getElementsByClassName('tag2')[0];
    
    tag2.classList.remove("tag2-enter");
    tag2.classList.add("tag2-exit");
    tag2.animate(tag2Exit);
    
    tag2.addEventListener("animationend", () => {
        var newone3 = tag2.cloneNode(true);
        tag2.parentNode.replaceChild(newone3, tag2);
        newone3.classList.remove("tag2-exit");
        newone3.classList.add("tag2-enter");
        newone3.innerHTML = slides[counter].stats[1].value;
    })

    let tag3 = document.getElementsByClassName('tag3')[0];
    
    tag3.classList.remove("tag3-enter");
    tag3.classList.add("tag3-exit");
    tag3.animate(tag3Exit);
    
    tag3.addEventListener("animationend", () => {
        var newone3 = tag3.cloneNode(true);
        tag3.parentNode.replaceChild(newone3, tag3);
        newone3.classList.remove("tag3-exit");
        newone3.classList.add("tag3-enter");
        newone3.innerHTML = slides[counter].stats[2].value;
    })
    
    counter++;
    if(counter == 3)
        counter = 0;
}


mySvg = document.getElementsByClassName('dashes')[0];
let crl = document.getElementsByClassName('myCircle')[0];
if (getWidth() > 760) {
    mySvg.setAttribute("viewBox", "-55 -20 80 80");
} else {
    mySvg.setAttribute("viewBox", "-40 -50 80 80");
    crl.setAttribute("r", "30");
}