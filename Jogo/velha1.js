
const player1 = "X";
const player2 = "0";
var playTime = player1;
var gameOver = false;


atualizaMostrador();
inicializarEspacos();


function atualizaMostrador(){
    if (gameOver){
    return;
 }
 if (playTime ==  player1){
  var player = document.querySelectorAll("div#mostrador img")[0];
  player.setAttribute("src", "img/X.png");
 } else{
  var player = document.querySelectorAll("div#mostrador img")[0];
  player.setAttribute("src", "img/O.png");
 }
}


function inicializarEspacos(){
 var espacos = document.getElementsByClassName("espaco");
 
 for (var i = 0; i < espacos.length; i++) {
  
  espacos[i].addEventListener("click", function(){
   
   if (gameOver){
    return;
   }
   if(this.getElementsByClassName("img").length == 0){
    if (playTime == player1){
     this.innerHTML = "<img scr='img/X.png'>";
     this.setAttribute("jogada", player1);
     playTime = player2;
    } else{
     this.innerHTML = "<img scr='img/O.png'>";
     this.setAttribute("jogada", player2);
     playTime = player1;
    }
    atualizaMostrador();
}
});
}
}