// let productInp = document.querySelector("#product");
// let categoryInp = document.querySelector("#category");
// let priceInp = document.querySelector("#price");
// let deliveryInp = document.querySelector("#delivery");
let container = document.querySelector(".container");

let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");

let btn4 = document.querySelector(".btn4");
let btn5 = document.querySelector(".btn5");

let addCont = document.querySelector(".add-contact");
let search = document.querySelector(".search");
let contList = document.querySelector(".contact-list");

btn1.addEventListener("click", () => {
  // cont.style.display = "block";
  search.style.display = "none";
  addCont.style.display = "none";
  contList.style.display = "block";
  // h2 = document.createElement('h2')
  // h2.innerText = 'Contact List'
  // conta.append(h2)
});
btn2.addEventListener("click", () => {
  addCont.style.display = "none";
  search.style.display = "block";
  contList.style.display = "none";
});
btn3.addEventListener("click", () => {
  search.style.display = "none";
  addCont.style.display = "block";
  contList.style.display = "none";
});

let name = document.querySelector(".inp1");
let number = document.querySelector(".inp2");
let mail = document.querySelector(".inp3");
let image = document.querySelector(".inp4");

btn5.addEventListener("click", () => {
  let obj = {
    names: name.value,
    number: number.value,
    mail: mail.value,
    image: image.value,
  };
  
  (name.value = ""), (number.value = ""), (mail.value = ""), (image.value = "");
  setContactToStorage(obj)
  createElement();
});

function setContactToStorage(contact) {
  let data = JSON.parse(localStorage.getItem("contact-data")) || [];
  data.push(contact);
  localStorage.setItem("contact-data", JSON.stringify(data));
  
}

function createElement() {
  if (!localStorage.getItem("contact-data")) {
    localStorage.setItem("contact-data", []);
  }
  contList.innerHTML = "";
  let newData = JSON.parse(localStorage.getItem("contact-data"));

  newData.forEach((item,) => {
    let divConact = document.createElement("div");
    divConact.classList.add('title')
    let li = document.createElement("li");
    li.innerText = item.names;
    li.classList.add('lishka')
    divConact.append(li);
    let li2 = document.createElement("li");
    li2.innerText = item.number;
    li2.classList.add('lishka')
    divConact.append(li2);
    let li3 = document.createElement("li");
    li3.innerText = item.mail;
    li3.classList.add('lishka')
    divConact.append(li3);
    let li4 = document.createElement("li");
    li4.innerText = item.image;
    li3.classList.add('lishka')
    divConact.append(li4);
    contList.append(divConact)
  });
  
}

  
