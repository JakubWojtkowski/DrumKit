//   part for buttons

const numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonKey = this.innerHTML;

        makeSound(buttonKey);

        makeButtonAnimation(buttonKey);

    });
}

//   part for keyboard

document.addEventListener("keydown", function (e) {

    makeSound(e.key);

    makeButtonAnimation(e.key);
});


// makeSound() function for playing sounds

function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kickBass = new Audio("./sounds/kick-bass.mp3");
            kickBass.play();
            break;

        default:
            console.log(key);
    }
}

//  animation after button click

function makeButtonAnimation(key) {

    const pressedBtn = document.querySelector(`.${key}`);
    pressedBtn.classList.add("pressed");

    setTimeout(function () {
        pressedBtn.classList.remove("pressed");
    }, 100);

}