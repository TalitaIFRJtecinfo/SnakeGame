const cElemento = document.querySelector("canvas");
const cCtx = cElemento.getContext("2d");
function setup(){
    cElemento.width = cCtx.width = screen.width;
    cElemento.height = cCtx.height = screen.height;
}
setup();