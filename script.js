let totalPrice = 0;
let discount = 0;
let finalPrice = 0;

document.getElementById("coupon").disabled = true;
document.getElementById("purchase").disabled = true;
document.getElementById("totalPrice").innerHTML = "0.00";
document.getElementById("discount").innerHTML = "0.00";
document.getElementById("finalPrice").innerHTML = "0.00";
document.getElementById("cart-list").innerHTML = "";

function addProduct(name, price) {
  const productName = name;
  const productPrice = price;

  if (discount > 0) {
    totalPrice = totalPrice + productPrice;
    discount = (totalPrice * 20) / 100;
    finalPrice = totalPrice - discount;
  } else {
    totalPrice = totalPrice + productPrice;
    finalPrice = totalPrice - discount;
  }

  if (totalPrice > 0) {
    document.getElementById("purchase").disabled = false;
  }

  if (totalPrice > 200) {
    document.getElementById("coupon").disabled = false;
  }

  const node = document.createElement("li");
  const textnode = document.createTextNode(productName);
  node.appendChild(textnode);
  document.getElementById("cart-list").appendChild(node);

  document.getElementById("totalPrice").innerHTML = totalPrice.toFixed(2);
  document.getElementById("discount").innerHTML = discount.toFixed(2);
  document.getElementById("finalPrice").innerHTML = finalPrice.toFixed(2);
}

function couponDiscount() {
  const coupon = document.getElementById("coupon-value").value;
  if (coupon == "SELL200") {
    discount = (totalPrice * 20) / 100;
    finalPrice = totalPrice - discount;
    document.getElementById("totalPrice").innerHTML = totalPrice.toFixed(2);
    document.getElementById("discount").innerHTML = discount.toFixed(2);
    document.getElementById("finalPrice").innerHTML = finalPrice.toFixed(2);
  }
}

function purchase() {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal").classList.add("show");
}

function reset() {
  document.getElementById("coupon").disabled = true;
  document.getElementById("purchase").disabled = true;
  document.getElementById("totalPrice").innerHTML = "0.00";
  document.getElementById("discount").innerHTML = "0.00";
  document.getElementById("finalPrice").innerHTML = "0.00";
  document.getElementById("cart-list").innerHTML = "";

  totalPrice = 0;
  discount = 0;
  finalPrice = 0;
  document.getElementById("coupon-value").value = "";

  document.getElementById("modal").style.display = "none";
  document.getElementById("modal").classList.remove("show");
}
