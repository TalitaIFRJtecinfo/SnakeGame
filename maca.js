class Maca extends  ObjetoJogo{
    constructor(args){
        super(args);
this.imagem = new Image();
this.imagem.src = "maca.png";

}
    desenhar(){
        cCtx.drawImage(this.imagem,this.x,this.y,this.tamanho,this.tamanho);
}
}