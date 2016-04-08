var Orange = function() {
  var minOrangeDiameter = 2.5;
  var maxOrangeDiameter = 3.2;

  var orangeDiameter = function() {
    return (Math.random() * (maxOrangeDiameter - minOrangeDiameter)) + minOrangeDiameter;
  }

  this.diameter = orangeDiameter();
}
