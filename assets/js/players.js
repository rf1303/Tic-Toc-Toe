import "./tictoc-xo.js";
import { tictocClicks } from "./tictoc-xo.js";


export function cpuPlayer(takesTitle) {
    playerBegin();
    playerTitles('cpu');
}

export function personPlayer() {
    playerBegin();
    playerTitles('two');
    tictocClicks();
}

function playerBegin() {
    const wrapperBoard = document.querySelector(".wrappers__board");
    const wrapperPick = document.querySelector(".wrappers__picks");

    wrapperBoard.classList.remove("display__none");
    wrapperPick.classList.add("display__none");
}


function playerTitles(titles) {
    const nro = document.querySelector('.player__radio:checked').value;
    const titleLeft = document.querySelector('.results__title--l');
    const titleRight = document.querySelector('.results__title--r');
    const nroX = nro === "x" ? 1 : 2;
    console.log('nro - nroX: ', nro, ' ', nroX);
    const nroO = nro === "o" ? 1 : 2;
    console.log('nro - nroO: ', nro, ' ', nroO);
    switch (titles) {
        case "two":
            titleLeft.textContent = `X(P${nroX})`;
            titleRight.textContent = `X(P${nroO})`;
            break;
        case "cpu": 
            if (nro === "x") {
                titleLeft.textContent = `X(YOU})`;
                titleRight.textContent = `X(CPU)`;
                
            }  else {
                titleLeft.textContent = `X(CPU)`;
                titleRight.textContent = `X(YOU)`;
                }
            break
        default:
            break;
    }
}
