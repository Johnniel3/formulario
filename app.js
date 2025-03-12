document.addEventListener("DOMContentLoaded", function() {
    //selecionando mis elementos
    const nombre = document.querySelector("#nombre");
    const correo = document.querySelector("#correo");
    const incorrectos = document.querySelector(".incorrecto");
    const btnGoogle = document.querySelector(".google");
    const btnFacebook = document.querySelector(".facebook");
    const terminos = document.querySelector(".privacidad");
    const inputNombre = document.querySelector(".inputNombre");
    const inputCorreo = document.querySelector(".inputCorreo");

    // console.log(inputNombre)
    
    //Asignar eventos y funcion para validar
    nombre.addEventListener("blur", validar);
    correo.addEventListener("blur", validar);


    //funcion para validar los inputs Nombre y Correo
    function validar(evento) {
        //verifico si el campo esta vacio
        evento.target.value === "" ? vacio(evento) : verificar(evento);
    }
    
    function vacio(evento, referencia) {
        //creo la referencia del target
        referencia = evento.target.parentElement;
        // comprobar si existe una alerta
        const alerta = referencia.querySelector(".incorrecto");
        if (alerta) {
            verificar(evento, referencia)
        }
        //toma el target mediante la referencia
        const error = document.createElement("p");
        error.textContent = `El ${evento.target.id} es obligatorio.`
        error.classList.add("incorrecto")
        referencia.classList.toggle("animado");
        //agrego el texto al target
        referencia.appendChild(error)
    }
    
    function verificar(evento, referencia) {
        referencia = evento.target;
        const alerta = referencia.document.querySelector(".incorrecto") 
        if(alerta) {
            alerta.remove()
        }
    }
    
})