const form = document.querySelector(".calc__form");
const products = document.querySelector("#products");
const orders = document.querySelector("#orders");

const package = document.querySelector("#package");
const dropdown_ul = document.querySelector(".select__dropdown");
const dropdown_li = document.querySelectorAll(".select__dropdown li");

const basic = dropdown_li[0]
const pro = dropdown_li[1]
const premium = dropdown_li[2]

const accounting = document.querySelector("#accounting");
const terminal = document.querySelector("#terminal");

const sumproducts = document.querySelector("[data-id=products]");
const sumorders = document.querySelector("[data-id=orders]");
const sumpackage = document.querySelector("[data-id=package]");
const sumaccounting = document.querySelector("[data-id=accounting]");
const sumterminal = document.querySelector("[data-id=terminal]");
const sumtotal = document.querySelector("#total-price");

const prices = {
  products: 0.5,
  orders: 0.25,
  basic: 0,
  professional: 25,
  premium: 60,
  accounting: 35,
  terminal: 5
};
const calc = {
  prod: 0,
  ord: 0,
  plan: 0,
  acc: 0,
  term: 0
}
function sumValues() {
  let sum = Object.values(calc).reduce((a, b) => a + b);
  sumtotal.children[1].textContent = "$" + sum
  if (sum > 0) {
    sumtotal.style.display = "flex"
  } else {
    sumtotal.style.display = "none"
  }
}

const inputs = (what, sumwhat, prices) => {
  if(what.value > 0 && +what.value === parseInt(+what.value)){
    what.style.color = "black"
    sumwhat.style.display = "flex"
    sum = what.value * prices
    sumwhat.children[2].textContent = "$" + sum
    sumwhat.children[1].textContent = what.value + " * " + prices
    what.style.border = "1px solid #08a6e4"
  } else {
    sumwhat.style.display = "none"
    what.style.border = "1px solid red"
    sum = 0
  }
}

products.addEventListener("input", e => {
  inputs(products, sumproducts, prices.products)
  calc.prod = sum
  sumValues()
})

orders.addEventListener("input", e => {
  inputs(orders, sumorders, prices.orders)
  calc.ord = sum
  sumValues()
})

const checkboxes = (what, sumwhat, prices) => {
  if(what.checked){
    what.style.color = "black"
    sumwhat.style.display = "flex"
    sumwhat.children[1].textContent = "$" + prices
    sum = prices
  } else {
    sumwhat.style.display = "none"
    sum = 0
  }
}

accounting.addEventListener("change", e => {
  checkboxes(accounting, sumaccounting, prices.accounting)
  calc.acc = sum
  sumValues()
})

terminal.addEventListener("change", e => {
  checkboxes(terminal, sumterminal, prices.terminal)
  calc.term = sum
  sumValues()
})

package.addEventListener("click", e => {
  if(dropdown_ul.style.display === "none") {
    dropdown_ul.style.display = "block"
    package.classList.add("open")
  } else {
    dropdown_ul.style.display = "none"
    package.classList.remove("open")
  }
})

document.addEventListener('click', function(e){
  if(e.target.className === "select__input"){
  }
  else {
    dropdown_ul.style.display = "none"
  }
})

const plan = (type, price) => {
  package.children[0].textContent = type
  package.children[0].style.color = "black"
  sumpackage.style.display = "flex"
  sumpackage.children[1].textContent = type
  sumpackage.children[2].textContent = "$ " + price
  calc.plan = price
  sumValues()
}
basic.addEventListener("click", e => {
  plan("Basic", prices.basic)
})
pro.addEventListener("click", e => {
  plan("Professional", prices.professional)
})
premium.addEventListener("click", e => {
  plan("Premium", prices.premium)
})





