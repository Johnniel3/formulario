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
    nombre.addEventListener("blur", validarCampo);
    correo.addEventListener("blur", validarCampo);

    function validarCampo(event) {
        if(event.target.id == "correo" && event.target.value){
            validarEmail(event)
        } else if (event.target.id == "nombre" && event.target.value ) {
            validarName(event)
        } else if( !event.target.value ) {
            generarAlert(event)
        } 
    }

    function validarEmail(correo) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        const valido = regex.test(correo.target.value);
        if(valido && correo.target.nextElementSibling) {
            correo.target.classList.add("valido")
            correo.target.setAttribute('readonly', true);
        } else if(valido) {
            correo.target.classList.add("valido")
            correo.target.setAttribute('readonly', true);
        } else {
            generarAlert(correo)
        }
    }
    function validarName(nombre) {
        const regex = /^[a-zA-Z0-9áéíóúñÁÉÍÓÚÑ\s]{2,50}$/;
        const valido = regex.test(nombre.target.value);
        if(valido && !nombre.target.nextElementSibling) {
            nombre.target.classList.add("valido")
            nombre.target.setAttribute('readonly', true);
        } else if(valido) {
            nombre.target.classList.add("valido")
            nombre.target.setAttribute('readonly', true);
        } else {
            generarAlert(nombre)
        }
    }

    function generarAlert(error) {
        let existe = error.target.nextElementSibling;

        if(existe) {
            return ""
        }

        referencia = error.target
        const padre = error.target.parentElement
        aviso = document.createElement("p");
        aviso.textContent = `${error.target.id} invalido`;
        aviso.classList.add("incorrecto");
        padre.classList.add("animado")
        //agregar a HTML
        padre.appendChild(aviso)
    }
})