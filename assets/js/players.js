import './tictoc-xo.js'

const wrapperBoard = document.querySelector('.wrappers__board');
const wrapperPick = document.querySelector('.wrappers__picks');



export function cpuPlayer() {
    playerBegin();

}

export function personPlayer() {
    playerBegin();



}




function playerBegin() {
    const wrapperBoard = document.querySelector('.wrappers__board');
    const wrapperPick = document.querySelector('.wrappers__picks');
    
    wrapperBoard.classList.remove('display__none');
    wrapperPick.classList.add('display__none');
}
