import "./tictoc-xo.js";
import { tictocClicks } from "./tictoc-xo.js";

const buttonTictoc = document.querySelectorAll(".button__tictoc");
const wrapperBack = document.querySelector(".wrappers__back");
const wrappersTakes = document.querySelector(".wrappers__takes");
const wrappersMess = document.querySelector(".wrappers__mess");
const wrappersGame = document.querySelector(".wrappers__game");
const wrapperBoard = document.querySelector(".wrappers__board");
const wrapperPick = document.querySelector(".wrappers__picks");
const gameW = document.getElementById("game-w");

export function cpuPlayer(takesTitle) {
    playerBegin();
    playerTitles('cpu');
}

export function personPlayer() {
    playerBegin();
    playerTitles('two');
    tictocClicks();
}

export function restartQ() {
    wrappersTakes.classList.remove('display__none'); 
    wrapperBack.classList.remove('display__none'); 
    gameW.classList.remove('display__none'); 
}
export function restartC() {
    wrappersTakes.classList.add('display__none'); 
    wrapperBack.classList.add('display__none'); 
    gameW.classList.add('display__none'); 
}


export function cleanTakes() {
   wrapperBack.classList.add('display__none'); 
   wrappersMess.classList.add('display__none'); 
   wrappersTakes.classList.add('display__none'); 
   wrappersGame.classList.add('display__none'); 
}

function playerBegin() {
    wrapperBoard.classList.remove("display__none");
    wrapperPick.classList.add("display__none");
}

export function tictocQuit() {
    wrapperBoard.classList.add("display__none");
    wrapperPick.classList.remove("display__none");
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
