import  './tictoc-xo.js'
import {cpuPlayer, personPlayer} from './players.js';

document.addEventListener('DOMContentLoaded', function () {
    console.log('inicio ✅');

    const buttonCpu = document.querySelector('.button__cpu');
    const buttonPerson = document.querySelector('.button__person');
    const radioPlayer = document.querySelector('.player__radio:checked'); 
    const buttonNext = document.querySelector('.button__next');
    const buttonQuit = document.querySelector('.button__quit');

    console.log('radioPlayer: ', radioPlayer.value)
    
    buttonCpu.addEventListener('click', () => {
        cpuPlayer() 
    });

    buttonPerson.addEventListener('click', () => {
        personPlayer();
    });



});
