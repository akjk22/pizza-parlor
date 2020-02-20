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
  if (this.toppings.includes('Mushrooms')) {
  return this.cost = 15;
  }
}




//user interface logic

$(document).ready(function() {
  $("form#price-show").submit(function(event) {
    var mushrooms = $("#mushrooms[type='checkbox']").val();
    var peppers = $("#peppers[type='checkbox']").val();
    var extraCheese = $("#extraCheese[type='checkbox']").val();
    var medium = $("#medium[type='checkbox']").val();
    var large = $("#large[type='checkbox']").val();
    var zaza = $("#zaza[type='checkbox']").val();
    
    // console.log(mushrooms);

    var price = new Pizza (mushrooms, peppers, extraCheese, medium, large, zaza);
    price.addToppings();
    price.addSize();
    price.showPrice();
    // price.showPrice();


    $("#price-results").text("The cost of pizza is " + price.showPrice());
    console.log(price.showPrice);



  })
});