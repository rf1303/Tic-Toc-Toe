import {btnXO, tictocClicks} from './tictoc-xo.js'
import './tictoc-xo.js';

const buttonRadio = document.querySelector('.player__radio:checked');
const buttonTictoc = document.querySelectorAll(".button__tictoc");

export function gameCpu() {
    const personG = buttonRadio.value;
    console.log('personG: ', personG);
    const cpuG = personG === "x" ? "o" : "x";
    console.log('cpuG: ', cpuG);
    /* tictocClicks();  */
    const winC = winnerCpu(cpuG);
    if (winner !== null) {
        btnXO(buttonTictoc[winC], winC);
        console.log('winner: ', buttonTictoc[winC]);
        return;
    }

    const blkP = blockPerson(personG);
    if (blkP !== null) {
        btnXO(buttonTictoc[blkP], blkP);
        console.log('blkP: ', buttonTictoc[blkP]);
        return;
    }

}
export function winnerCpu(cpuG) {
    console.log('winnerCpu: ', cpuG);
}
