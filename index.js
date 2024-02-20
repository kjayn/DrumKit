// document.querySelector("button").addEventListener("click", HandleClick);
// function HandleClick(){
//     var audio = new Audio('sounds/crash.mp3');
//     audio.play();    
// }
var numOfBtn = document.querySelectorAll(".drum").length

for (var i = 0; i<numOfBtn; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){   
        var key = this.innerHTML

        switch (key) {
            case "w":
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play(); 
                break;
                
            case "a":
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play(); 
                break;

            case "s":
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play(); 
                break;

            case "d":
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play(); 
                break;

            case "j":
                var audio = new Audio('sounds/snare.mp3');
                audio.play(); 
                break;
            case "k":
                var audio = new Audio('sounds/crash.mp3');
                audio.play(); 
                break;

            case "l":
                var audio = new Audio('sounds/kick-bass.mp3');
                audio.play(); 
                break;

            default:
                console.log(key);
                break;
            }
    })

   
}

document.addEventListener("keydown", function(event){   
    var key = event.key;

    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play(); 
            ButtonAnimation(key)
            break;

        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play(); 
            ButtonAnimation(key)
            break;

        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play(); 
            ButtonAnimation(key)
            break;

        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play(); 
            ButtonAnimation(key)
            break;

        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play(); 
            ButtonAnimation(key)
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play(); 
            ButtonAnimation(key)
            break;

        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play(); 
            ButtonAnimation(key)
            break;

        default:
            console.log(key);
            break;
            
    }
})

function ButtonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);

}




