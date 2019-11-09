// Back-end Logic
function Selections (crust, size, toppings) {
  this.crust = crust,
  this.size = size,
  this.toppings = toppings,
  this.price = 15
}

Selections.prototype.crustCheck = function() {
  if (this.crust === "Stuffed" || this.crust === "Pan") {
    return this.price += 3
  } else {
    return this.price
  }
}

Selections.prototype.sizeCheck = function() {
  if (this.size === "Large") {
    return this.price += 3
  } if (this.size === "Medium") {
    return this.price += 1
  } else {
    return this.price
  }
}

Selections.prototype.toppingsCheck = function() {
  if (this.toppings === "Pepperoni" || this.toppings === "Bacon" || this.toppings === "Ham" || this.toppings === "Chicken" || this.toppings === "Mozzerella-Cheese" || this.toppings === "Red-Onions" || this.toppings === "Pinapple" || this.topping === "Black-Olives") {
    return this.price += 4
  }
}
function showaddress(){
  $(".onDelivery").show();
  $(".carryout").hide();
  $(".delivery").show();
  }

function hideaddress(){
$(".onDelivery").hide();
$(".carryout").show();
$(".delivery").hide();
}
// User-interface
$(document).ready(function () {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var phoneNumber = $("input#phone").val();
    var orderType = $("input:radio[name=orderType]:checked").val();
    var street = $("input#street").val();
    var city = $("input#city").val();
    var state = $("input#state").val();
    var zipCode = $("input#zipCode").val();
    var userName = $("input#name").val();
    var userCrust = ($("input:radio[name=crust]:checked").val());
    var userSize = ($("input:radio[name=size]:checked").val());
    var userToppings = ($("input:checkbox[name=topping]:checked").val());
    var userChoices = new Selections (userCrust, userSize, userToppings);
    userChoices.crustCheck();
    userChoices.sizeCheck();
    userChoices.toppingsCheck();
    $(".hidden-info").show();
    $(".hiddenName").text(userName);
    $(".hiddenCrust").text(userChoices.crust);
    $(".hiddenSize").text(userChoices.size);
    $(".hiddenPrice").text(userChoices.price);
    $(".hiddenAddress").text(street);
    $(".hiddenCity").text(city);
    $(".hiddenState").text(state);
    $(".hiddenZip").text(zipCode);
    // if (orderType==="delivery"){
    // .onDelivery.show();
  })
})
