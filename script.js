var song = document.getElementById("song");
// var icon = document.getElementById("icone");

// icon.onclick = function(){
//     if(song.paused){
//         song.onplay();
//         icon.src ="icon.png"
//     }
// }
function playAudio(){
    song.play();
}
function pauseAudio(){
    song.pause();
}