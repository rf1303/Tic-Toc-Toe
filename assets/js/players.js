import "./tictoc-xo.js";
import { tictocClicks, gameCpu } from "./tictoc-xo.js";

const buttonTictoc = document.querySelectorAll(".button__tictoc");
const wrapperBack = document.querySelector(".wrappers__back");
const wrappersTakes = document.querySelector(".wrappers__takes");
const wrappersMess = document.querySelector(".wrappers__mess");
const wrappersGame = document.querySelector(".wrappers__game");
const wrapperBoard = document.querySelector(".wrappers__board");
const wrapperPick = document.querySelector(".wrappers__picks");
const wrappersTied = document.getElementById("tied-w");
const gameW = document.querySelector(".wrappers__game--w");

export function cpuGame() {
    playerBegin();
    playerTitles('cpu');
    setTimeout(() => {
        gameCpu();
    }, 1000);
    tictocClicks();
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
    wrappersTied.classList.add('display__none');
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
    console.log('nro - nroX: ', nroX);
    const nroO = nro === "o" ? 1 : 2;
    const cpuYouX = nro === "x" ? "X(YOU)" : "X(CPU)";
    const cpuYouO = nro === "o" ? "O(YOU)" : "O(CPU)";
    console.log('nro - nroO: ', nroO);
    switch (titles) {
        case "two":
            titleLeft.textContent = `X(P${nroX})`;
            titleRight.textContent = `O(P${nroO})`;
            break;
        case "cpu": 
            titleLeft.textContent = `${cpuYouX}`;
            titleRight.textContent = `${cpuYouO}`;
            break
        default:
            break;
    }
}
