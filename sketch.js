//set up variable
let mic;
let fft;
let amp;

//basic set up
function setup() {
  createCanvas(windowWidth, windowHeight);

  //mic in 
  mic = new p5.AudioIn();
  mic.start();

  //fast fourier transformation
  fft = new p5.FFT();
  fft.setInput(mic);
  
  //amplitutude unused for now
  amp = new p5.Amplitude();
  noStroke();
}

//plotting the graph
function draw() {
  background(0, 15);

  //wave transformation
  let waveform = fft.waveform();

  //wave color
  fill(153,204,255);
  
  //coordinates 
  for (let i = 0; i < waveform.length; i++) {
    let x = map(i, 0, waveform.length, 0, width);
    let y = map(waveform[i], -1, 1, 0, height);

    //plotting 
    ellipse(x, y, 5, 5);
    

  }
  
}


                