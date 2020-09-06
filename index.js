
alert("Thank you for cheking my Website. Have Fun!!!")

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", ClickMe);

  function ClickMe() {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  }
}

document.addEventListener("keydown", function(event) {

  makeSound(event.key);
  buttonAnimation(event.key);

});






function makeSound(key) {

  switch (key) {
    case "w":
      var bass = new Audio("sounds/kick-bass.mp3");
      bass.play();
      break;

    case "a":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "i":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "f":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(paraKey){

var keyvalue=document.querySelector("."+paraKey);
keyvalue.classList.add("pressed");

// setTimeout(function(){keyvalue.classList.remove("pressed");}, 100);

setTimeout(Nikesh, 100);

function Nikesh(){
  keyvalue.classList.remove("pressed");
}

}
