const labirinto = document.getElementById('labirinto');
const jogador = document.getElementById('jogador');
const mensagem = document.getElementById('mensagem');
let posX = 10, posY = 10;

// Criar paredes do labirinto
const paredes = [
    {x: 50, y: 0, width: 10, height: 60},
    {x: 0, y: 90, width: 70, height: 10},
    {x: 100, y: 60, width: 150, height: 10},
    {x: 100, y: 20, width: 10, height: 180},
    {x: 30, y: 140, width: 70, height: 10},
    {x: 200, y: 0, width: 10, height: 30},
    {x: 250, y: 40, width: 10, height: 150},
    {x: 30, y: 190, width: 10, height: 50},
    {x: 0, y: 240, width: 150, height: 10},
    {x: 150, y: 110, width: 10, height: 170},
    {x: 190, y: 110, width: 10, height: 170},
    {x: 200, y: 270, width: 40, height: 10},
    {x: 220, y: 260, width: 10, height: 40},
    {x: 230, y: 220, width: 70, height: 10},
    {x: 280, y: 140, width: 20, height: 10},
    {x: 260, y: 90, width: 20, height: 10},
    {x: 220, y: 90, width: 10, height: 90},
    {x: 200, y: 170, width: 30, height: 10},
   
];

paredes.forEach(p => {
    const parede = document.createElement('div');
    parede.className = 'parede';
    parede.style.left = p.x + 'px';
    parede.style.top = p.y + 'px';
    parede.style.width = p.width + 'px';
    parede.style.height = p.height + 'px';
    labirinto.appendChild(parede);
});

function moverJogador(dx, dy) {
    const novoX = posX + dx;
    const novoY = posY + dy;

    if (novoX >= 0 && novoX <= 280 && novoY >= 0 && novoY <= 280) {
        if (!colisao(novoX, novoY)) {
            posX = novoX;
            posY = novoY;
            jogador.style.left = posX + 'px';
            jogador.style.top = posY + 'px';

            if (posX > 250 && posY > 250) {
                mensagem.textContent = 'Parabéns! Você encontrou a página perdida!';
                mensagem.style.color = '#44ff44';
            }
        }
    }
}

function colisao(x, y) {
    const jogadorRect = {x, y, width: 20, height: 20};
    return paredes.some(parede => 
        jogadorRect.x < parede.x + parede.width &&
        jogadorRect.x + jogadorRect.width > parede.x &&
        jogadorRect.y < parede.y + parede.height &&
        jogadorRect.y + jogadorRect.height > parede.y
    );
}

document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'ArrowUp': moverJogador(0, -10); break;
        case 'ArrowDown': moverJogador(0, 10); break;
        case 'ArrowLeft': moverJogador(-10, 0); break;
        case 'ArrowRight': moverJogador(10, 0); break;
    }
});