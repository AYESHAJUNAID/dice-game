var button = document.getElementById("btn");
var img = document.getElementById("show");
button.addEventListener("click", function () {
  var number = Math.ceil(Math.random() * 6);
  console.log(number);
  img.src = `src/img/${number}.png`;
});
