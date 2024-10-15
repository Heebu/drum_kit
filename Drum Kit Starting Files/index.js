var initNumber = document.querySelectorAll('.drum').length;

var soundList = [
    'sounds/crash.mp3', 
    'sounds/kick-bass.mp3', 
    'sounds/snare.mp3', 
    'sounds/tom-1.mp3',
'sounds/tom-2.mp3',
'sounds/tom-3.mp3',
'sounds/tom-4.mp3',];
var buttonList = document.querySelectorAll('.drum');


for (var i = 0; i < initNumber; i++){
    document.querySelectorAll('.drum')[i].
    addEventListener("click", function (){
        var buttonHtml = this.innerHTML;
        playClickedBeat(buttonHtml);
    }        
       );
}




addEventListener('keypress', function(events){
    var keyPressed = events.key;
    switch (keyPressed) {
        case 'w':
            playSounds(0);
            break;
       
            case 'a':
            playSounds(1);
            break;

            case 's':
            playSounds(2);
            break;

            case 'd':
            playSounds(3);
            break;

            case 'j':
            playSounds(4);
            break;

            case 'k':
            playSounds(5);
            break;

            case 'l':
            playSounds(6);
            break;
        default:
            playSounds(0);
            break;
    }
});


function playSounds(i){
    var playDrum = new Audio(soundList[i]);
    playDrum.play();
}

function playClickedBeat(keySound){
    switch (keySound) {
        case 'w':
            playSounds(0);
            break;
       
            case 'a':
            playSounds(1);
            break;

            case 's':
            playSounds(2);
            break;

            case 'd':
            playSounds(3);
            break;

            case 'j':
            playSounds(4);
            break;

            case 'k':
            playSounds(5);
            break;

            case 'l':
            playSounds(6);
            break;
        default:
            playSounds(0);
            break;
       }
}