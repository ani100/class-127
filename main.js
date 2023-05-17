song_perfect = "";
song_night_c = "";
 
function preload() {

    song_perfect = loadSound("Ed_Sheeran_-_Perfect.mp3");
    song_night_c = loadSound("Night-Changes(PagalWorld).mp3");

}

function setup() {

canvas = createCanvas(550,450);
canvas.position(480,270);
video = createCapture(VIDEO);
video.hide();

}

function draw() {

    background("black");
    image(video,10,10,530,430);
}

