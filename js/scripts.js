//Back end logic
//Pizza constructor object
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

//Pizza prototype method that calculates price based on size and toppings chosen
Pizza.prototype.calculatePrice = function () {
 
    if ($("#zaza").is(':checked')) {
      this.totalPrice = 15;
    } else if ($("#large").is(':checked')) {
      this.totalPrice = 11;
    } else if ($("#medium").is(':checked')) {
      this.totalPrice = 8;
    }

    if ($("#mushrooms").is(':checked') && $("#peppers").is(':checked') && $("#extracheese").is(':checked')) {
      this.totalPrice += 1.50;
    } else if ($("#mushrooms").is(':checked') && $("#peppers").is(':checked')) {
      this.totalPrice += 0.75;
    } else if ($("#mushrooms").is(':checked') && $("#extracheese").is(':checked')) {
      this.totalPrice += 1.00;
    } else if ($("#peppers").is(':checked') && $("#extracheese").is(':checked')) {
      this.totalPrice += 1.25; 
    } else if ($("#mushrooms").is(':checked')) {
      this.totalPrice += 0.25;
    } else if ($("#peppers").is(':checked')) {
      this.totalPrice += 0.50;
    } else if ($("#extracheese").is(':checked')) {
      this.totalPrice += 0.75;
    }
      return this.totalPrice;
  }

  // Pizza prototype method that returns your size, which can be used to display.

  Pizza.prototype.pizzaSize = function() {
    if ($("#zaza").is(':checked')) {
      this.size = 'zaza';
    } else if ($("#large").is(':checked')) {
      this.size = 'large';
    } else if ($("#medium").is(':checked')) {
      this.size = 'medium';
    }
    return this.size;
  }


//User Interface Logic

$(document).ready(function() { 
  $("form#price-show").submit(function(event) {
    event.preventDefault();
    var medium = $("input:checkbox[value=medium]:checked").val(); 
    var large = $("input:checkbox[value=large]:checked").val();
    var zaza = $("input:checkbox[value=zaza]:checked").val();
    var mushrooms = $("input:checkbox[value=mushrooms]:checked").val();
    var peppers = $("input:checkbox[value=peppers]:checked").val();
    var extraCheese = $("input:checkbox[value=extracheese]:checked").val();

    var price = new Pizza (mushrooms, peppers, extraCheese, medium, large, zaza);

    $("#price-results").text("You ordered a  " + " " + price.pizzaSize() + " " + "sized pizza and the cost of your pizza is $" +  price.calculatePrice());
    $('#test').html('<img src="img/zaza.jpg" height="300px" width="300px">');
  });
});