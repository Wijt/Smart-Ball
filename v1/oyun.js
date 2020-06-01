dikeyCarpan=0;
yatayCarpan=0;

maxYem=10;

let yemListesi=[];
let topListesi=[];
let zehirListesi=[];

function setup() {
  puanTabela = select('#puanTabela');
  let canvas = createCanvas(800, 600);
  new Top(250,250,15,5);
  new Yem({x:random(0,width),y:random(0,height)},10);
}

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
        puanTabela.html(topListesi[0].skor);
        yemListesi.splice(yemListesi[j],1);
        if (random(0,100)<=40) {
          new Zehir({x:random(0,width),y:random(0,height)},random(10,35));
        }
        if (yemListesi.length<=maxYem) {
          if (random(0,1)) {
            new Yem({x:random(0,width),y:random(0,height)},10);
          }
          new Yem({x:random(0,width),y:random(0,height)},10);
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
  update();
  for (var i = 0; i < topListesi.length; i++) {
    topListesi[i].show();
  }
  for (var i = 0; i < yemListesi.length; i++) {
    yemListesi[i].show();
  }
  for (var i = 0; i < zehirListesi.length; i++) {
    zehirListesi[i].show();
  }
}
