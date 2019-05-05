
window.addEventListener("click", function(e){

  //if the click is not on the animals exits the fucntion
  if (e.target.classList[0] != "animal") return;

  //gets the parentNode of what you clicked on so that it can make the picture and the writing bigger at the same time
  var elem = e.target.parentNode;
  elem.classList.add("bigger");

  //changes the color of the border
  var bor = elem.getElementsByTagName("H3")[0];
  bor.classList.add("lightBorder");
});


window.addEventListener('transitionend', function (e) {
 var elem = e.target.parentNode;
 elem.classList.remove("bigger");

 var bor = elem.getElementsByTagName("H3")[0];
 bor.classList.remove("lightBorder");
}, false);


function play(){
  const audio = document.getElementById("farm_song");
  audio.play();

  window.addEventListener("click", function(e){
    if (e.target.classList[0] != "animal") return;
    const animal_audio = e.target.parentNode.children[2];
    animal_audio.play();

  });
};
