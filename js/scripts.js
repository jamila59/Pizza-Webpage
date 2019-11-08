function Selections (crust, size, toppings) {
  this.crust = crust,
  this.size = size,
  this.toppings = toppings,
  this.price = 15
}

Selections.prototype.crustCheck = function() {
  if (this.crust === "stuffed" || this.crust === "pan") {
    return this.price += 3
} else {
    return this.price
 }
}

var customer = new Selections ("stuffed", "sm", "1");
console.log(customer);
customer.crustCheck();
