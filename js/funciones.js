let auxNombre =[nombre,nickName];
let auxMegustas =[megusta,meGusta1];
let auxDisgusta =[meDisGusta,meDisGusta1];
//registro
var nombre = document.getElementById("nombre");
var nick = document.getElementById("nick-Name");
var contraseña = document.getElementById("contra");
var matricula = document.getElementById("matricula");
var sexo = document.getElementById("sexo");
var grupo = document.getElementById("grupo");
var terminoDeUso = document.getElementById("terminosDeUso");
var entrar = document.getElementById("btnentrar");
//inicio de secion
var nickName = document.getElementById("NN");
var contraseñaLogin = document.getElementById("con");
var btnEntrar = document.getElementById("bEntrar");
//perfil
var nombrePerfil = document.getElementById("nombrePerfil");
var descripcion = document.getElementById("descripcion");
var guardarBio = document.getElementById("guardar");
//home
var salida = document.getElementById("exit");
var auxSalida ="";
var megusta = document.getElementById("megusta");
var meDisGusta = document.getElementById("meDisgusta");
var meGusta1 = document.getElementById("meGusta1");
var meDisGusta1 = document.getElementById("meDisGusta1");
/**comprobacion de valores ingresados */
let n1 = "";
let ni = "";
let con = "";
let mat = "";
let sex;
let gru = "";
let ter;

nombre = n1;
nick = ni;
contraseña = con;
matricula = mat;
sexo = sex;
grupo = gru;
terminoDeUso = ter;

console.log(document.body.getAttribute(n1));

/*home*/
salida.addEventListener("click",function(){
    auxSalida= prompt("esta seguro que quiere salir ?");
});
/**registro*/
nombre.addEventListener("click",function(){
    nombre = "";
    nombre =>auxNombre;
    console.log(auxNombre);
});
entrar.addEventListener("click",function() {
    console.log("hola");
   alert("Bienvenido");
});


/**iniciar sesion */
if (nombre == nickName) {
    alert("Bienvenido");
}