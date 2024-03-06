const horas = document.getElementById ('horas'); //Id da tag span horas 
const minutos = document.getElementById ('minutos'); //Id da tag span minutos
const segundos = document.getElementById ('segundos'); //Id da tag span segundos


const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    /*Os if, serve apenas para manter o 0 antes dos segundos, minutos e horas*/
    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;
    

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

    
})


/*OBS: const e let são as variaveis*/


