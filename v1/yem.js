class Yem {
  constructor(pos,boyut) {
    this.pos={x:pos.x, y:pos.y}
    this.boyut=boyut;
    yemListesi.push(this);
  }
  show(){
    fill(color(204, 153, 0));
    stroke(255);
    ellipse(this.pos.x, this.pos.y, this.boyut * 2, this.boyut * 2);
  }
}
