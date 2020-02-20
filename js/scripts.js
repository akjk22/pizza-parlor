//back end logic
function Pizza(toppings, size, cost) {
  this.toppings = toppings;
  this.size = size;
  this.cost = cost;
}

Pizza.prototype.addToppings = function() {
  return this.toppings;
}
Pizza.prototype.addSize = function() {
  return this.size;
}
Pizza.prototype.showPrice = function() {
  return this.size + this.toppings;
}




//user interface logic

$(document).ready(function() {
  $("form#price-show").submit(function(event) {
    var mushrooms = $("#mushrooms[type='checkbox']").val();
    var peppers = $("#peppers[type='checkbox']").val();
    var extraCheese = $("#extraCheese[type='checkbox']").val();
    // console.log(mushrooms);

    var price = new Pizza (mushrooms, peppers, extraCheese);
    price.addToppings();
    price.addSize();
    // price.showPrice();


    $("#price-results").text("The cost of pizza is " + price.showPrice());



  })
});