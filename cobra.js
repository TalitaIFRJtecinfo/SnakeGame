const cobra = {
    vida: 3,
    tamanho:10,
    x:400,
    y:260,
    cor:'brown',
    direcao:'right',
    desenhar(){
        cCtx.fillStyle = this.cor;
        cCtx.fillRect(this.x,this.y,this.tamanho,this.tamanho);
    },
    mover(){
      if (this.direcao == "right")this.x++;

      if (this.direcao == "left")this.x--;

      if (this.direcao == "down")this.y++;
      
      if (this.direcao == "up")this.y--;
      
      if((this.x >= tela.largura - this.tamanho) || (this.x <= 0)) 
      this.morrer();

      if((this.y >= tela.altura + placar.altura - this.tamanho) || (this.y <= placar.altura)) 
      this.morrer();

      
    },
morrer(){
  this.vida--;
  this.x=400;
  this.y=260;
}
}
