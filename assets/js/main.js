import  './tictoc-xo.js'
import {cpuPlayer, personPlayer} from './players.js';

document.addEventListener('DOMContentLoaded', function () {
    console.log('inicio ✅');

    const playerRadio = document.querySelectorAll('.player__radio');
    const buttonCpu = document.querySelector('.button__cpu');
    const buttonPerson = document.querySelector('.button__person');
    
    buttonCpu.addEventListener('click', () => {
        cpuPlayer() 
    });

    buttonPerson.addEventListener('click', () => {
        personPlayer();
    });

});
