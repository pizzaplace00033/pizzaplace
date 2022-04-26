const order = localStorage.getItem('order');
const orderview = document.getElementById("order");

// Get pizza type
const params = new URLSearchParams(window.location.search)
for (const param of params) {
  pizza = (param[1])
  console.log(pizza);
}

var savedpizza = localStorage.getItem('orderitems');


function orderView() {
  if (orderview.style.bottom == "-100px") {
    orderview.style.bottom = "0px";
  } else {
    orderview.style.bottom = "-100px";
  }
}

document.getElementById("pizza_title").textContent = pizza;

function addPizza() {
  localStorage.setItem("order", "pizza");
  orderview.style.display = "block";
  var outp = document.getElementById("orderoutp");
  outp.innerHTML = outp.innerHTML + "<span class='ordline'>" + pizza + "</span>";
  localStorage.setItem('orderitems', outp.innerHTML);
}

if (order) {
  orderview.style.display = "block";
  var outp = document.getElementById("orderoutp");
  outp.innerHTML = outp.innerHTML + "<span class='ordline'>" + savedpizza + "</span>";
} else {
  orderview.style.display = "none";
}
