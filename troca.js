document.getElementById("1")
addEventListener ('Click', randomImage)

function randomImage(){
  let randomNumber = Math.floor(Math.random()* 20)+ 1;
  let image = document.getElementById('1');

  image.setAttribute("src", "img/" + randomNumber + ".jpg");
}