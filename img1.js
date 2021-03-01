var image = null;

function upload() {
  var fileinput = document.getElementById("igorpic");
  image = new SimpleImage(fileinput);
  var canvas = document.getElementById("can"),
  ctx = canvas.getContext("2d");
  image.drawTo(canvas);
}

function makeGray() {
  for (var pixel of image.values()) {
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  var canvas = document.getElementById('can');
  image.drawTo(canvas);
}