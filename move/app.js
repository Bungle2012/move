var main = function() {
  var cities = [
    'madrid', 
    'barcelona', 
    'basel', 
    'birmingham'];
    
  $('#search').autocomplete({source: cities});
};

 
$(document).ready(main);