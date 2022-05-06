const Usuario_Registrado = "Yissel";
const Contrasena_Registrada = "123456";
const IMG_Ingreso_Error = "https://c.tenor.com/WLFPMuWtlJYAAAAd/ese-a-ese.gif";
const IMG_Ingreso_Correcto= "https://c.tenor.com/Dhrbmr_t3tEAAAAd/forrest-gump-hello.gif";

const CANT_Intentos_Def = 0;

let usuarioIngresado = "usuario por def";
let contrasenaIngresada = "contraseña por def";
let cantIntentos = CANT_Intentos_Def;

function verificacion(){
    usuarioIngresado = document.querySelector('#usuario_ingresado').value;
    contrasenaIngresada = document.querySelector('#contrasena_ingresada').value;

    if( (usuarioIngresado == Usuario_Registrado) && (contrasenaIngresada == Contrasena_Registrada)){
        document.querySelector('#mensaje_resultado').innerHTML = `
            <h2> Usuario ${usuarioIngresado} bienvenido! </h2>
            <img src=${IMG_Ingreso_Correcto} alt="imagen de error ingreso">
            
        `;
        cantIntentos = CANT_Intentos_Def;
    }
    else{
        cantIntentos++;
        document.querySelector('#mensaje_resultado').innerHTML = `
            <h1> Usuario y/o contraseña incorrectos! </h1>
            <img src=${IMG_Ingreso_Error} alt="imagen de error ingreso">
            <h3> intentos: ${cantIntentos} </h3>
        `;
    }
}