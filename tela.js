const tela = {
    largura:800,
    altura:400,
    cor:"green",
    desenhar(){
        cCtx.fillStyle= this.cor;
        cCtx.fillRect(0,60,this.largura,this.altura);
    }
}
