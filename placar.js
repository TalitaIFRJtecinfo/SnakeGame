const placar = {
    largura: 800,
    altura: 60,
    corFundo:"grey",
    corTexto:"black",
    pontuacao:0,
    nomeJogo: "IFRJ Snake",

    desenhar(){
        cCtx.fillStyle = this.corFundo;
        cCtx.fillRect(0,0,this.largura,this.altura);
        cCtx.fillStyle = this.corTexto;
        cCtx.font = "20px Fantasy";
        cCtx.textAlign = 'center';
        cCtx.textBaseline = 'middle';
        cCtx.fillText(this.nomeJogo,400,30);
        cCtx.textAlign = 'left';
        cCtx.textBaseline = 'bottom';
        cCtx.fillText(this.pontuacao + " pts",10,50);
        cCtx.textAlign = 'right';
        cCtx.textBaseline = 'bottom';
        cCtx.fillText(cobra.vida + " vida",790,50);

    }
}
