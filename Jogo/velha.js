const player1 = "X"; // constante com atribuição
const player2 = "O"; // constante com atribuição

var playTime = player1; // variável com atribuição da constante
var gameOver = false; // variável com com valor falso

atualizaMostrador(); // usado para atualizar a vez de cada jogador
inicializarEspacos(); // usado para iniciar as casa do jogo

function atualizaMostrador() // condições para "atualizaMostrador"
{
    if (gameOver) { return;} // condição que verifica se game over for verdadeiro retorna ao início

    if (playTime == player1) // condição que verifica se for a vez do jogador 1 ...
    {
        var player = document.querySelectorAll("div#mostrador img")[0] // seleciona, dentro da div com id "mostrador", a imagem na posição zero
        player.setAttribute("src", "img/X.png"); // aponta para o arquivo com a imagem
    }
    else
    {
        var player = document.querySelectorAll("div#mostrador img")[0] // seleciona, dentro da div com id "mostrador", a imagem na posição zero
        player.setAttribute("src", "img/O.png"); // aponta para o arquivo com a imagem
    }
}

function inicializarEspacos() // condições para "inicializarEspacos"
{
    var espacos = document.getElementsByClassName("espaco"); // seleciona os elementos com a class "espaco" 
    for (var i = 0; i < espacos.length; i++) // condição que quando a var i for menor que espaços ...
    {
        espacos[i].addEventListener("click", function() // seleciona qualquer local da div com class "espaco" e o seleciona ao clicá-lo
        {
            if (gameOver) { return;} // condição que verifica se game over for verdadeiro retorna ao início
            if (this.getElementsByClassName("img").length == 0) // função que seleciona todos os elementos com a tag img 
            {
                if(playTime == player1) // condição que verifica se for a vez do jogador 1 ...
                {
                    this.innerHTML = "<img src='img/X.png'>"; // pega a imagem de X e coloca no espaço 
                    this.setAttribute("jogada", player1); // define que o usuário fez a jogada
                    playTime = player2; // muda a vez do jogador
                }
                else
                {
                    this.innerHTML = "<img src='img/O.png'>"; // pega a imagem de X e coloca no espaço 
                    this.setAttribute("jogada", player2); // define que o usuário fez a jogada
                    playTime = player1; // muda a vez do jogador
                }
                atualizaMostrador(); // usado para atualizar a vez de cada jogador
                verificarVencedor(); // usado para verificar se há algum vencedor
            }
        });
    }
}

function verificarVencedor() // condições para "verificarVencedor"
{
    var a1 = document.getElementById("a1").getAttribute("jogada"); // cria a var com o próprio nome od id e atributo "jogada"
    var a2 = document.getElementById("a2").getAttribute("jogada"); // cria a var com o próprio nome od id e atributo "jogada"
    var a3 = document.getElementById("a3").getAttribute("jogada"); // cria a var com o próprio nome od id e atributo "jogada"
}

