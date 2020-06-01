dikeyCarpan=0;
yatayCarpan=0;

maxYem=10;
let puanFont;
let yemListesi = [];
let topListesi = [];
let zehirListesi = [];
let canvas;

let butonList = [];
let oyunBitti=false;

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  new Yem({x:random(0,width),y:random(0,height)},20);
  new Top(width/2,height/2,15,6);
  new Buton(25, 25, "img/pause_button.png", "img/pause_button-hover.png", "dur();", true, null);
  new Buton(width/2,height/2-150,"img/game_over.png", "", "", false, null);
  new Buton(width/2,height/2+200, "img/restart-buton.png", "img/restart-buton-hover.png", "restart();", false, butonList[1]);
  new Buton(width-150,height-150,"img/puan.png", "", "", false, butonList[1]);
  noStroke();
  textFont("blueberry_regular");
  textAlign(CENTER,CENTER);
  rectMode(CENTER);
}

function draw() {
  background(0);
  for (var i = 0; i < topListesi.length; i++) {
    topListesi[i].show();
  }
  for (var i = 0; i < yemListesi.length; i++) {
    yemListesi[i].show();
  }
  for (var i = 0; i < zehirListesi.length; i++) {
    zehirListesi[i].show();
  }
  if (oyunBitti) {
    background(92,4,4,200);
    fill(204, 153, 0);
    textSize(45);
    textFont("flagellum_Dei");
    text(topListesi[0].skor, width-200, height-200);
  }else{
    fill(204,147,230);
    textSize(60);
    text(topListesi[0].skor, width/2, 50);
    textSize(40);
    text('puan', width/2, 110);
  }
  for (var i = 0; i < butonList.length; i++) {
    butonList[i].draw();
  }
  update();
}

window.onresize = function() {
  canvas.size(windowWidth, windowHeight);
};

function update(){
  if (oyunBitti==false) {
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
        if (topListesi[i].yemUstundeMi(zehirListesi[j])==true) {
          gameOver();
        }
      }
    }
  }
}

function gameOver(){
  butonList[1].gorunurluk = true;
  butonList[0].gorunurluk = false;
  oyunBitti=true;
}

function restart(){
  window.location.reload();
}

function icindeMi(pos1, kare){
  return pos1.x>=kare.x1 && pos1.y>=kare.y1
          pos1.x<=kare.x2 && pos1.y<=kare.y2;
}
function ustundeMi(x,y,buton){
  if (buton.vX <= x &&
  buton.vY <= y &&
  buton.vY + buton.cizilecekResim.height >= y &&
  buton.vX + buton.cizilecekResim.width >= x) {
    return true;
  }else{
    return false;
  }
}

function mouseReleased(){
  for (var i = 0; i < butonList.length; i++) {
    if (ustundeMi(mouseX,mouseY,butonList[i])==true) {
      butonList[i].calistir();
    }
  }
}

function dur(){
  alert("Durduuuu! Başlamak için tamama basın...");
  //butonList[1].gorunurluk = true;
  //noLoop();
}
