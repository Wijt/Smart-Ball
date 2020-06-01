dikeyCarpan=0;
yatayCarpan=0;

maxYem=10;
let puanFont;
let yemListesi=[];
let topListesi=[];
let zehirListesi=[];
let canvas;
function preload(){
  puanFont = loadFont('fonts/coet_bold.ttf');
}
function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  new Top(250,250,15,6);
  new Yem({x:random(0,width),y:random(0,height)},20);
  noStroke();
  textFont(puanFont);
  textAlign(CENTER,CENTER);
}
window.onresize = function() {
  canvas.size(windowWidth, windowHeight);
};
function update(){
  for (var i = 0; i < topListesi.length; i++) {
    topListesi[i].update();
  }
  for (var i = 0; i < zehirListesi.length; i++) {
    zehirListesi[i].update();
  }
  for (var i = 0; i < topListesi.length; i++) {
    for (var j = 0; j < yemListesi.length; j++) {
      if (topListesi[i].yemUstundeMi(yemListesi[j])) {
        topListesi[i].boyut+=(yemListesi[j].boyut/100)*10;
        topListesi[i].skor+=1;
        yemListesi.splice(j,1);
        for (var z = 0; z < 3; z++) {
          if (random(0,100)<=70) {
            new Zehir({x:random(0,width),y:random(0,height)},random(10,60));
          }
        }
        if (yemListesi.length<=maxYem) {
          if (random(0,1)) {
            new Yem({x:random(0,width),y:random(0,height)},20);
          }
          new Yem({x:random(0,width),y:random(0,height)},20);
        }
      }
    }
    for (var j = 0; j < zehirListesi.length; j++) {
      if (topListesi[i].yemUstundeMi(zehirListesi[j])) {
        topListesi.splice(topListesi[i],1);
        gameOver();
      }
    }
  }
}
function gameOver(){
  alert("Oyun bitti!")
  window.location.reload();
}
function icindeMi(pos1, kare){
  return pos1.x>=kare.x1 && pos1.y>=kare.y1
          pos1.x<=kare.x2 && pos1.y<=kare.y2;
}
function draw() {
  background(0);
  textSize(60);
  for (var i = 0; i < topListesi.length; i++) {
    topListesi[i].show();
  }
  for (var i = 0; i < yemListesi.length; i++) {
    yemListesi[i].show();
  }
  for (var i = 0; i < zehirListesi.length; i++) {
    zehirListesi[i].show();
  }
  update();
  fill(204,147,230);
  text(topListesi[0].skor, width/2, 50);
  text('skor', width/2, 110);
}
