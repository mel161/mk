import RangeSlider from './modules/range'

jQuery(document).ready(function () {
  var newRangeSlider = new RangeSlider(".range--price");

  newRangeSlider.onChange = function(min, max) {
    console.log(min, max, this);
    document.getElementById("result").innerHTML = "Min: " + min + " Max: " + max;
  };

  newRangeSlider.didChanged = function(min, max) {
    console.log(min, max, this);
    document.getElementById("result").innerHTML = "Min: " + min + " Max: " + max;
  };
})
