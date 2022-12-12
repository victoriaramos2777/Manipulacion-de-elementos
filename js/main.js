//constante para body
const body = document.querySelector('body')
//llamar nuestras constantes principales
const main = document.getElementById('main');
const form = document.getElementById('form');
const seccionPrincipal = document.getElementById('contenido-1');
const contenidoBotones = document.getElementById('contenedor-btns')
//input de la formas
const sentimiento = document.getElementById('sentimiento');

//crear escuchador de eventos
form.addEventListener('submit',(e) =>{
    //Evitar accion por defecto
    e.preventDefault();
});
//crear evento global
main.addEventListener('click',(e) =>{

    if(e.target.classList.contains('feliz-btn')){
       //agragar clase al body
       body.removeAttribute('class');
       body.classList.add('feliz');
       //agregar la clase a la seccion
       seccionPrincipal.classList.remove('enojado-s', 'tranquilo-s', 'triste-s');  
       seccionPrincipal.classList.add('feliz-s');
        // Llamar funcion para agregar texto
         insertarEstadoDeAnimo('Feliz');
    }

    if(e.target.classList,contains('triste-btn')){
        body.removeAttribute('class');
        body.classList.add('triste');
         // Agregar la clase a la seccion
        seccionPrincipal.classList.remove('enojado-s', 'tranquilo-s', 'feliz-s');
         seccionPrincipal.classList.add('triste-s');

         // Llamar funcion para agregar texto
          insertarEstadoDeAnimo('Triste');
    }

    if(e.target.classList,contains('tranquilo-btn')){
        body.removeAttribute('class');
        body.classList.add('tranquilo');
          // Agregar la clase a la seccion
    seccionPrincipal.classList.remove('enojado-s', 'feliz-s', 'triste-s');
    seccionPrincipal.classList.add('tranquilo-s');

    // Llamar funcion para agregar texto
    insertarEstadoDeAnimo('Tranquilo');

    }
    if(e.target.classList.contains('enojado-btn')){
        body.removeAttribute('class');
        body.classList.add('enojado');
        //agregar la clase a la seccion 
        seccionPrincipal.classList.remove('feliz-s', 'tranquilo-s', 'triste-s');
        seccionPrincipal.classList.add('enojado-s');
         // Llamar funcion para agregar texto
           insertarEstadoDeAnimo('Enojado');
    }

});

function insertarEstadoDeAnimo(animo) {
    const texto = document.getElementById('estado-animo');
    texto.textContent = animo;
}