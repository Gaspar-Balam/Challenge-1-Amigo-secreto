// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];//array

function agregarAmigo(){

    let agregar_nombre = document.getElementById("amigo");//acceder al nombre
    let nombre = agregar_nombre.value;

    if (nombre === ""){
        alert("Escribe un nombre.");
        return;

    } else { 
        
        amigos.push(nombre); //agregar nombre del Id
        agregar_nombre.value = "";
            
        console.log(amigos);//ver array

        actualizarLista();

    } 
}

function actualizarLista(){
    
    let lista_amigos = document.getElementById("listaAmigos");

    lista_amigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista_amigos.appendChild(li);
    }
}

function sortearAmigo(){

    if (amigos.length === 0){
        alert("Agregue un nombre.");
        return;

    } else {

        let ruleta = Math.floor(Math.random()*amigos.length); //elegir un nombre entre el primer y ultimo amigo de la lista.

        let ganador  = amigos[ruleta]; //obtener el nombre de lista a atraves de su posicion.
    
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "El ganador es: " + ganador + ".";

        amigos = [];
        actualizarLista();
    }
    
}