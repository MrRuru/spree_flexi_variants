function savePrice(){
  price = parseFloat($('#cart-form .prices .price.selling').html().substr(1));
  $('#cart-form').attr('base-price',price);
}

function getBasePrice(){
  return parseFloat($('#cart-form').attr('base-price'));
}

function setPrice(val){
  $('#cart-form .prices .price.selling').html('$'+val.toFixed(2));
}

function computePrice(){
  var newPrice = getBasePrice();
  
  // Get the checked checkboxes and buttons
  $('.ad-hoc-option-select:checked').each(function(){
    if ($(this).attr('price_mod') != undefined){
      newPrice+= parseFloat($(this).attr('price_mod'));
    }
  });
  
  // // Get the option selects
  // $('.ad-hoc-option-select[type!="checkbox"] option:selected').each(function(){
  //   if ($(this).attr('price_mod') != undefined){
  //     newPrice+= parseFloat($(this).attr('price_mod'));
  //   }
  // });
    
  setPrice(newPrice);
}


$(document).ready(function(){

  savePrice();

  computePrice();

  $('.ad-hoc-option-select').change(function(){
    computePrice();
  });

});