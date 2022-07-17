// Mobile Menu Toggle Js
const menuToggle = () => {
    $("#mobileMenu").toggleClass("opened");
}


// const playBtn = () => {
//     let playBtn = document.getElementById("playButton");
//     playBtn.play();
//     alert('sfsfsfsf')
// }

const playBtn = () => {
    let videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.play();
    $(".playButton").fadeOut(500);
}

// var player = document.getElementById("videoPlayer");
// player.addEventListener('click', function(){
//     videoPlayer.pause();
//     $(".playButton").fadeIn(500);
// })