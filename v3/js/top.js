class Top {
  constructor(x,y,boyut=15,hiz=5) {
    this.pos={x:x, y:y}
    this.boyut=boyut;
    this.hiz=hiz;
    this.skor=0;
    topListesi.push(this);
  }

  update(){
    this.hareketKontrol();
    //this.mouseGit();
    if (frameCount%50==0) {
      this.boyut-=1+((this.boyut/100)*8);
    }
    if (this.boyut<=0) {
      gameOver();
    }
  }
yemUstundeMi(yem){
  if (dist(yem.pos.x,yem.pos.y,this.pos.x,this.pos.y)-this.boyut<=yem.boyut) {
    return true;
  }else{
    return false;
  }
}
mouseGit(){
this.pos.x=mouseX;
this.pos.y=mouseY-100;
}
hareketKontrol(){
    if (keyIsDown(LEFT_ARROW)&&this.pos.x>=0) {
      yatayCarpan=-1;
    }
    if (keyIsDown(UP_ARROW)&&this.pos.y>=0) {
      dikeyCarpan=1;
    }
    if (keyIsDown(RIGHT_ARROW)&&this.pos.x<=width) {
      yatayCarpan=1;
    }
    if (keyIsDown(DOWN_ARROW)&&this.pos.y<=height) {
      dikeyCarpan=-1;
    }
    this.pos.x += this.hiz * yatayCarpan;
    this.pos.y += this.hiz * -dikeyCarpan;
    yatayCarpan=0;
    dikeyCarpan=0;
  }

show() {
    fill(255, 100);
    stroke(255);
    ellipse(this.pos.x, this.pos.y, this.boyut * 2, this.boyut * 2);
  }
}
