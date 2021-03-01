function addGrain() {
    var canvas=document.getElementById("can");
    var igor= document.getElementById("igorpic");
    var ctx=canvas.getContext("2d");
    var c=document.createElement('can');
    var cctx=c[0].getContext('2d');
    var cw,ch;
    var igor=new Image();
    igor.onload=start;
    var texture1=new Image();
    texture1.onload=start;
    texture1.src='grain.png';
    var imgCount=2;
    if(--imgCount>0){return;}
    cw=canvas.width=c.width=igor.width;
    ch=canvas.height=c.height=igor.height;
    ctx.drawImage(igor,0,0);
    texturize(igor, texture1, 0.50, Math.PI/4, 0.30);
    ctx.drawImage(c,0,0);
}

function texturize(carpartImage,texture,scale,rotation,opacity){
    cctx.clearRect(0,0,cw,ch);
    cctx.drawImage(carpartImage,0,0);
    cctx.save();
    cctx.translate(cw/2,ch/2);
    cctx.rotate(rotation);
    cctx.globalAlpha=opacity;
    cctx.globalCompositeOperation='source-atop';
    cctx.drawImage(texture,-texture.width/2,-texture.height/2)
    cctx.restore();
  }