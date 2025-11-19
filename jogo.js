function jogar(){
    tela.desenhar();
    placar.desenhar();
    cobra.desenhar();
    cobra.mover();
    requestAnimationFrame(jogar);
}
jogar();
document.addEventListener("keydown",(evento)=>{
if (evento.key== "8") cobra.direcao="up";
if (evento.key== "6") cobra.direcao="right";
if (evento.key== "2") cobra.direcao="down";
if (evento.key== "4") cobra.direcao="left";
})

