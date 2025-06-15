import "./tictoc-xo.js";
import { cpuGame, personPlayer, cleanTakes, tictocQuit, restartQ, restartC} from "./players.js";
import { tictocClicks, cleanBoard, localSave } from "./tictoc-xo.js";

document.addEventListener("DOMContentLoaded", function() {
    console.log("inicio ✅");
    console.log(localStorage.getItem('tictocResults'));

    mostrarHistorial();

    const buttonCpu = document.querySelector(".button__cpu");
    const buttonPerson = document.querySelector(".button__person");
    const radioPlayer = document.querySelector(".player__radio:checked");
    const buttonNext = document.querySelectorAll(".button__next");
    const buttonQuit = document.querySelectorAll(".button__quit");
    const buttonRestart = document.querySelector(".button__restart");
    const gameRestart = document.querySelector(".button__restart--game");
    const buttonCancel = document.querySelector(".button__cancel");

    console.log("radioPlayer: ", radioPlayer.value);

    buttonCpu.addEventListener("click", () => {
        cpuGame();
    });

    buttonPerson.addEventListener("click", () => {
        personPlayer();
    });

    buttonNext.forEach((element) => {
        element.addEventListener("click", () => {
            cleanTakes();
            cleanBoard();
            tictocClicks();
        });
    });
    buttonQuit.forEach((element) => {
        element.addEventListener("click", () => {
            cleanTakes();
            cleanBoard();
            tictocQuit();
            localSave();
        });
    });

    buttonRestart.addEventListener('click', () => {
        restartQ();        
    });
    
    gameRestart.addEventListener('click', () => {
        cleanTakes();
        cleanBoard();
        tictocClicks();
    });

    buttonCancel.addEventListener('click', () => {
            restartC();
    });

    function mostrarHistorial() {
      const historial = JSON.parse(localStorage.getItem('tictocResultados')) || [];
      console.table(historial, ' ⚡');
    }


});
