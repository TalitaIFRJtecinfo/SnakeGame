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
    }

}
