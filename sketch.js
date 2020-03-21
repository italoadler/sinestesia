
function preload(){
  sound = loadSound('assets/beat.mp3');
}

function setup() {
  let cnv = createCanvas(displayWidth, displayHeight);
  cnv.mouseClicked(toggleSound);
  amplitude = new p5.Amplitude();
}

function draw() {
  background(0);
  textAlign(CENTER);
  text('Clique para tocar', width/2, 20);

  let level = amplitude.getLevel();
  let size = map(level, 0, 1, 0, 200);
  noFill();
  strokeWeight(0.5);
  stroke(255);
  for(let i = 0; i < width; i += 100 ) {
    for(let j = 0; j < height; j += 50){
      ellipse(i, j, size, size);
    }
  }
}

function toggleSound(){
  if (sound.isPlaying()) {
    sound.stop();
  } else {
    sound.play();
  }
}


