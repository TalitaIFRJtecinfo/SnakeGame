function jogar(){
    tela.desenhar();
    placar.desenhar();
    cobra.desenhar();
    cobra.mover();
    maca.desenhar();
    if (maca.teveColisao(cobra)){
        placar.pontuacao+=1;
        maca = new Maca([30]);
    }
    if(cobra.vida>=1){
        requestAnimationFrame(jogar);
    }
    else
    {
        placar.nomeJogo = "Fim do jogo"
        placar.desenhar();
    }
}

let maca = new Maca([30]);
jogar();
document.addEventListener("keydown",(evento)=>{
if (evento.key== "8") cobra.direcao="up";
if (evento.key== "6") cobra.direcao="right";
if (evento.key== "2") cobra.direcao="down";
if (evento.key== "4") cobra.direcao="left";
})

