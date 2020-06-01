class Zehir {
  constructor(pos,boyut) {
    this.pos={x:pos.x, y:pos.y}
    this.boyut=boyut;
    this.yasamSuresi=5;
    this.kalanSure=this.yasamSuresi*100;
    this.ustundeDegilseEkle();
  }
  ustundeDegilseEkle(){
    let izin=true;
    for (var i = 0; i < topListesi.length; i++) {
      if(topListesi[i].yemUstundeMi(this))
      {
        izin=false;
        break;
      }
    }
    if (izin) {
      zehirListesi.push(this);
    }
  }
  show(){
    fill(color(168, 11, 49));
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.boyut * 2, this.boyut * 2);
  }

  update(){
    this.kalanSure--;
    if (this.kalanSure<=0) {
      zehirListesi.splice(this,1);
    }
  }
}
