const player1 = "X"; // constante com atribuição
const player2 = "O"; // constante com atribuição

var playTime = player1; // variável com atribuição da constante
var gameOver = false; // variável com com valor falso
var draw = false;

atualizaMostrador(); // usado para atualizar a vez de cada jogador
inicializarEspacos(); // usado para iniciar as casa do jogo

function atualizaMostrador() // condições para "atualizaMostrador"
{
    if (gameOver) { return;} // condição que verifica se game over for verdadeiro retorna ao início
    if (draw) {return};

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

async function verificarVencedor() // condições para "verificarVencedor" sendo ela asíncrona
{
    var a1 = document.getElementById("a1").getAttribute("jogada"); // cria a var com o próprio nome od id e atributo "jogada"
    var a2 = document.getElementById("a2").getAttribute("jogada"); // cria a var com o próprio nome od id e atributo "jogada"
    var a3 = document.getElementById("a3").getAttribute("jogada"); // cria a var com o próprio nome od id e atributo "jogada"

    var b1 = document.getElementById("b1").getAttribute("jogada"); // cria a var com o próprio nome od id e atributo "jogada"
    var b2 = document.getElementById("b2").getAttribute("jogada"); // cria a var com o próprio nome od id e atributo "jogada"
    var b3 = document.getElementById("b3").getAttribute("jogada"); // cria a var com o próprio nome od id e atributo "jogada"

    var c1 = document.getElementById("c1").getAttribute("jogada"); // cria a var com o próprio nome od id e atributo "jogada"
    var c2 = document.getElementById("c2").getAttribute("jogada"); // cria a var com o próprio nome od id e atributo "jogada"
    var c3 = document.getElementById("c3").getAttribute("jogada"); // cria a var com o próprio nome od id e atributo "jogada"

    var vencedor = ""; // var que verifica quem venceu

    if((a1 == b1 && a1 == c1 && a1 != "") || (a1 == a2 && a1 == a3 && a1 != "") || (a1 == b2 && a1 == c3 &&  a1 != "")) // verifica que se as var a1, b1 e c1 ou a1, a2 e a3 ou a1, b2 e c3 são iguais e diferentes de vazio 
    vencedor = a1; // indica que o vencedor será o a1
    
    else if((b2 == b1 && b2 == b3 && b2 != "") || (b2 == a2 && b2 == c2 && b2 != "") || (b2 == a3 && b2 == c1 && b2 !="")) // verifica que se as var b2, b1 e b3 ou b2, a2 e c2 ou b2, a3 e c1 são iguais e diferentes de vazio 
    vencedor = b2; // indica que o vencedor será o b2
    
    else if ((c3 == b3 && c3 == a3 && c3 != "") || (c3 == c2 && c3 == c1 && c3 != ""))// verifica que se as var c3, b3 e a3 ou c3, c2 e c1 são iguais e diferentes de vazio 
    vencedor = c3; // indica que o vencedor será o c3

    if(vencedor != "") // condição qu verifica se o vencedor é diferente de vazio
    {
        gameOver = true; // var gameOver será verdadeira 

        await sleep(1); //  função que faz com que o site espere alguns segundos para chamar algo

        alert("O ganhador foi o: " + vencedor + ""); // caixa de alerta que mostra o vencedor
    }
    if(vencedor == "")
    {
        draw = true;
    }
}

function sleep(ms) //chama a função sleep dentro de await
{
    return new Promise(resolve => setTimeout(resolve, ms)); // faz retornar o novo objeto depois de esperar o tempo soolicitado pelo await
}
