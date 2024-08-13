
var drums=document.querySelectorAll(".drum").length;
for(var i=0;i<drums;i++){
document.querySelectorAll("button")[i].addEventListener("click",handleClick);
}
document.addEventListener("keydown",function(event){
    makesound(event.key);
    animation(event.key);
});
function handleClick(){
   makesound(this.innerHTML);
   animation(this.innerHTML);
}

function makesound(key){
   switch(key) {
    case "w":
        var tom1=new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;
    case "a":
        var tom2=new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;
    case "s":
        var tom3=new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
    case "d":
        var tom4=new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;
    case "j":
        var snare=new Audio('sounds/snare.mp3');
        snare.play();
        break;
    case "k":
        var flash=new Audio('sounds/crash.mp3');
        flash.play();
        break;
    case "l":
        var kick=new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;
   }

}
function animation(key){
    var activebtn=document.querySelector("."+key);
    activebtn.classList.add("pressed");
    setTimeout(function(){
        activebtn.classList.remove("pressed");

    },100);
}

//var audio = new Audio('sounds/tom-1.mp3');
    //audio.play();