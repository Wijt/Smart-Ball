class Buton {
  constructor(x,y,resim,hoverResim,fonkIsim,gorunurluk,parent) {
    this.x=x;
    this.y=y;
    this.resim = loadImage(resim);
    if (hoverResim!="") {
      this.hoverResim=loadImage(hoverResim);
    }else{
      this.hoverResim="";
    }
    this.vX = this.x - (this.resim.width/2);
    this.vY = this.y - (this.resim.height/2);
    this.fonkIsim = fonkIsim;
    this.gorunurluk = gorunurluk;
    this.maxBuyume=3;
    this.suankiBuyume=1;
    this.cizilecekResim = this.resim;
    this.child=[];
    if (parent != null) {
      parent.child.push(this);
    }
    butonList.push(this);
  }

  draw(){
    if (ustundeMi(mouseX, mouseY, this) && this.hoverResim!="") {
      this.cizilecekResim = this.hoverResim;
    }else{
      this.cizilecekResim = this.resim;
    }
    this.vX = this.x - (this.cizilecekResim.width / 2);
    this.vY = this.y - (this.cizilecekResim.height / 2);
    if (this.gorunurluk==true) {
      image(
        this.cizilecekResim,
        this.x-(this.cizilecekResim.width/2),
        this.y-(this.cizilecekResim.height/2),
        this.cizilecekResim.width,
        this.cizilecekResim.height
      );
      for (var i = 0; i < this.child.length; i++) {
        this.child[i].gorunurluk=true;
      }
    }else{
      for (var i = 0; i < this.child.length; i++) {
        this.child[i].gorunurluk=false;
      }
    }
  }

  calistir(){
    if (this.gorunurluk==true) {
      eval(this.fonkIsim);
    }
  }

}
