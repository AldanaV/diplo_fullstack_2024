/**  Clase 17: funciones y DOM*/

class Mascota{
    constructor(nombre){
        this.nombre = nombre;
        this.adoptada = false;
    }
    //Metodo
    adoptar(){
        this.adoptada = true;
    }
}

//Funcion para agregar mascota a la lista

function agregarMascota(){
    const inputMascota = document.getElementById("nuevaMascota");
    const nombreMascota = inputMascota.value.trim(); //trim quita los espacios en blanco que puso el usuario

    if(nombreMascota != ""){
        const nuevaMascota = new Mascota(nombreMascota);
        //Crear el elemento lista
        const elementoLista = document.createElement("li");
        elementoLista.textContent = nuevaMascota.nombre;

        if(nuevaMascota.adoptada){
            elementoLista.classList.add("adoptada")
        }

        //Evento
        elementoLista.addEventListener("click", function(){
            nuevaMascota.adoptar();
            elementoLista.classList.add("adoptada")

        })

        const listaMascotas = document.getElementById("listaMascotas");
        listaMascotas.appendChild(elementoLista)
    }

}
