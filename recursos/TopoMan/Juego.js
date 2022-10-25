
var btnTopo = document.getElementById("topo");
var btnPlay = document.getElementById("play");
let puntos = 0;
let x = 450,
  y = 350;
let cont = 0;
let z = 1000;
var tiempo;

btnPlay.addEventListener("click", function () {
  alert("Ya iniciaste \n Topoman !!!");
  document.getElementById('can_Intro').src = "musica/Porter Robinson/Porter Robinson  Blossom Official Audio.mp3";
  btnTopo.addEventListener("click", function () {
    puntos = puntos + 100;
    document.getElementById('PUNTOS2').textContent = puntos;

    if (puntos == 1000) {
      alert("ganaste");


    }
  });
  tiempo = setInterval(MoveTopo, z);
});

function MoveTopo() {
  let aleatorioX = Math.floor(Math.random(100) * x);
  let aleatorioY = Math.floor(Math.random(100) * x);
  btnTopo.style.top = aleatorioX + "px";
  btnTopo.style.left = aleatorioY + "px";
  cont++;

  if (cont == 20) {
    clearInterval(tiempo);
    alert("Se termino el tiempo, hiciste " + puntos + " puntos");
    document.getElementById('topo').style.display = "none";
  }
}