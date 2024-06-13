const lampada = document.getElementById('bulb')
const interruptor = document.getElementById('switch')
const alerta = document.getElementById('alerta')

let quebrada = false;
let chave = "assets/switch-off.png";
// MUDA A LAMPADA
function mudaLampada(valor) {
    if (valor == 1) {
        arquivo = "assets/lampada-apagada.png";
        chave = "assets/switch-off.png";
        interruptor.setAttribute("onclick", "mudaLampada(2)");
    }
    if (valor == 2) {
        arquivo = "assets/lampada-acesa.png";
        chave = "assets/switch-on.png";
        interruptor.setAttribute("onclick", "mudaLampada(1)");
    }
    if (valor == 3) {
        arquivo = "assets/lampada-quebrada.png";
    }
    interruptor.src = chave;

    if (!quebrada) {
        lampada.src = arquivo;
        if (valor == 3) {
            quebrada = true;
            alerta.innerHTML = 'Você quebrou o bagulho!'
        }
    }
}