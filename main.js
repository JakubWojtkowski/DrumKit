const numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", () => {
       
        var audio = new Audio("./sounds/crash.mp3");
        audio.play();
    });

}