//constante para body
const body = document.querySelector('body')
//llamar nuestras constantes
const main = document.getElementById('main');
const form = document.getElementById('form');
const seccionPrincipal = document.getElementById('contenido-1');
//input de la fromas
const sentimiento = document.getElementById('sentimiento');

//crear escuchador de eventos
form.addEventListener('submit',(e) =>{
    //Evitar accion por defecto
    e.preventDefault();
});
//crear evento global
main.addEventListener('click',(e) =>{
    if(e.target.id === 'feliz'){
       //agragar clase al body
       body.removeAttribute('class');
       body.classList.add('feliz');
       //agregar la clase a la seccion
       seccionPrincipal.classList.add('feliz-s');
    }
    if(e.target.id === 'triste'){
        body.removeAttribute('class');
        body.classList.add('triste');
    }
    if(e.target.id === 'tranquilo'){
        body.removeAttribute('class');
        body.classList.add('tranquilo');
    }
    if(e.target.id === 'enojado'){
        body.removeAttribute('class');
        body.classList.add('enojado');
        //agregar la clase a la seccion 
        seccionPrincipal.classList.add('enojado-s');
    }

});