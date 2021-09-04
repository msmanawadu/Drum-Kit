//listening and responding to button clicks
for(var i = 0; i < document.querySelectorAll("button.drum").length; i++) {

    document.querySelectorAll("button.drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        playDrumSound(buttonInnerHTML); 
        buttonAnimation(buttonInnerHTML);           
    }); }

//listening and responding to keydown events
document.addEventListener("keydown", function(event) {
    var buttonValue = event.key;
    playDrumSound(buttonValue);
    buttonAnimation(buttonValue);
})

function playDrumSound(value) {

    switch (value) {
        case "w": var tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play();    break;

        case "a": var tom2 = new Audio("./sounds/tom-2.mp3");
                tom2.play();    break;

        case "s": var tom3 = new Audio("./sounds/tom-3.mp3");
                tom3.play();    break;

        case "d": var tom4 = new Audio("./sounds/tom-4.mp3");
                tom4.play();    break;

        case "j": var snare = new Audio("./sounds/snare.mp3");
                snare.play();    break;
                    
        case "k": var crash = new Audio("./sounds/crash.mp3");
                crash.play();    break;
                    
        case "l": var kickBass = new Audio("./sounds/kick-bass.mp3");
                kickBass.play();    break;
        
        default: console.log(value);
            break;
    }            
}

function buttonAnimation(currentKey) {
        var activeButton = document.querySelector("." + currentKey);
        activeButton.classList.add("pressed");

        //for the animation to take effect
        setTimeout(function() {
                activeButton.classList.remove("pressed");        
        }, 100)
}










