//back end logic
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.addToppings = function() {
  return this.toppings;
}
Pizza.prototype.addSize = function() {
  return this.size;
}
Pizza.prototype.showPrice = function() {
  if ($('#check_id').is(":checked")) {
  return this.cost = 15;
  }
}

Pizza.prototype.calculatePrice = function () {
  var totalPrice = 0;
  var mushrooms = 0.25;
  var peppers = 0.50;
  var extracheese = 0.75;
    if ($("#zaza").is(':checked')) {
      this.totalPrice = 15;
    } else if ($("#large").is(':checked')) {
      this.totalPrice = 11;
    } else if ($("#medium").is(':checked')) {
      this.totalPrice = 8;
    }

    if ($("#mushrooms").is(':checked')) {
      this.totalPrice += 0.25;
    } else if ($("#peppers").is(':checked')) {
      this.totalPrice += 0.50;
    } else if ($("#extracheese").is(':checked')) {
      this.totalPrice += 0.75;
    } else if ($("#mushrooms").is(':checked') && $("#peppers").is(':checked') && $("#extracheese").is(':checked')) {
      this.totalPrice += 1.00;
    }
      return this.totalPrice;
  }




//user interface logic

$(document).ready(function() {
  // $("form#price-show").submit(function(event) 
  $("button").click(function() {
    var toppings = $('#check_id').val();
    console.log(toppings);
    var peppers = $("#peppers[type='checkbox']").val();
    var extraCheese = $("#extraCheese[type='checkbox']").val();
    var medium = $("#medium[type='checkbox']").val();
    var large = $("#large[type='checkbox']").val();
    var zaza = $("#zaza[type='checkbox']").val();
    
    // console.log(mushrooms);

    var price = new Pizza (toppings, peppers, extraCheese, medium, large, zaza);
    price.addToppings();
    price.addSize();
    price.showPrice();
    // price.showPrice();


    // $("#price-results").text("The cost of pizza is " + price.showPrice());
    $("#price-results").text("The cost of your pizza is " +  price.calculatePrice());
    console.log(price.showPrice);



  })
});