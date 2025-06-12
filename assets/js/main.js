import  './tictoc-xo.js';
import {cpuPlayer, personPlayer, cleanTakes} from './players.js';
import { tictocClicks, cleanBoard } from './tictoc-xo.js';

document.addEventListener('DOMContentLoaded', function () {
    console.log('inicio ✅');

    const buttonCpu = document.querySelector('.button__cpu');
    const buttonPerson = document.querySelector('.button__person');
    const radioPlayer = document.querySelector('.player__radio:checked'); 
    const buttonNext = document.querySelectorAll('.button__next');
    const buttonQuit = document.querySelector('.button__quit');

    console.log('radioPlayer: ', radioPlayer.value)
    
    buttonCpu.addEventListener('click', () => {
        cpuPlayer() 
    });

    buttonPerson.addEventListener('click', () => {
        personPlayer();
    });

    buttonNext.forEach(element => {
        element.addEventListener('click', () => {
            cleanTakes();
            cleanBoard();
            tictocClicks();
        });
    });

});
