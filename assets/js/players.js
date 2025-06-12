import "./tictoc-xo.js";
import { tictocClicks } from "./tictoc-xo.js";

const wrapperBoard = document.querySelector(".wrappers__board");
const wrapperPick = document.querySelector(".wrappers__picks");

export function cpuPlayer(takesTitle) {
    playerBegin();
}

export function personPlayer() {
    playerBegin();
    tictocClicks();
}

function playerBegin() {
    const wrapperBoard = document.querySelector(".wrappers__board");
    const wrapperPick = document.querySelector(".wrappers__picks");

    wrapperBoard.classList.remove("display__none");
    wrapperPick.classList.add("display__none");
}
