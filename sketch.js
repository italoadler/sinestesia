function preload(){
  sound = loadSound('assets/beat.mp3');
}

function setup() {
  let cnv = createCanvas(displayWidth, displayHeight);
  cnv.mouseClicked(toggleSound);
  amplitude = new p5.Amplitude();
}

function draw() {
  background(220, 150);
  textAlign(CENTER);
  text('Clique para tocar', width/2, 20);

  let level = amplitude.getLevel();
  let size = map(level, 0, 1, 0, 200);
  ellipse(width/2, height/2, size, size);
}

function toggleSound(){
  if (sound.isPlaying()) {
    sound.stop();
  } else {
    sound.play();
  }
}}