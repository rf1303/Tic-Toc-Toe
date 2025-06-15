console.log("inicio tictoc-xo ✅");

const iconX = `<svg class="tictoc__image tictoc__image--x" viewBox="0 0 64 64" width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill="currentColor" fill-rule="evenodd"/></svg>`;

const iconXout = `<svg class="tictoc__image" viewBox="0 0 64 64" width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M51.12 1.269c.511 0 1.023.195 1.414.586l9.611 9.611c.391.391.586.903.586 1.415s-.195 1.023-.586 1.414L44.441 32l17.704 17.705c.391.39.586.902.586 1.414 0 .512-.195 1.024-.586 1.415l-9.611 9.611c-.391.391-.903.586-1.415.586a1.994 1.994 0 0 1-1.414-.586L32 44.441 14.295 62.145c-.39.391-.902.586-1.414.586a1.994 1.994 0 0 1-1.415-.586l-9.611-9.611a1.994 1.994 0 0 1-.586-1.415c0-.512.195-1.023.586-1.414L19.559 32 1.855 14.295a1.994 1.994 0 0 1-.586-1.414c0-.512.195-1.024.586-1.415l9.611-9.611c.391-.391.903-.586 1.415-.586s1.023.195 1.414.586L32 19.559 49.705 1.855c.39-.391.902-.586 1.414-.586Z" stroke="#31C3BD" stroke-width="2" fill="none"/></svg>`;

const iconO = `<svg class="tictoc__image tictoc__image--o" viewBox="0 0 64 64" width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" fill="currentColor"/></svg>`;

const iconOout = `<svg class="tictoc__mage" viewBox="0 0 66 66" width="66" height="66" xmlns="http://www.w3.org/2000/svg"><path d="M33 1c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C15.327 65 1 50.673 1 33 1 15.327 15.327 1 33 1Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" stroke="#F2B137" stroke-width="2" fill="none"/></svg>`;

let tictoc = Array(9).fill("");
let turnPlayer = "x";
let playX = 0;
let playO = 0;
let playC = 0;
let cpuMode = false;
const altWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const buttonTictoc = document.querySelectorAll(".button__tictoc");
const wrapperBack = document.querySelector(".wrappers__back");
const wrappersTakes = document.querySelector(".wrappers__takes");
const wrappersMess = document.querySelector(".wrappers__mess");
const buttonRadio = document.querySelector('.player__radio:checked');

iconTurn();

export function tictocClicks() {
    buttonTictoc.forEach((btn, index) => {
        btn.dataset.index = index;
        console.log("btn despues: ", index);
        btn.addEventListener("click", () => {
            console.log("ahora: ", btn.dataset.index);
            btnXO(btn, index);
        });
    });
}

export function btnXO(btn, index) {
    if (tictoc[index] !== "") return;
    console.log("jugador ⛵ ", turnPlayer);

    tictoc[index] = turnPlayer;
    btn.innerHTML = turnPlayer === "x" ? iconX : iconO;
    const winResults = tictocWin(turnPlayer);

    if (winResults) {
        winResults.forEach((element) => {
            const eSvg = buttonTictoc[element].querySelector("svg");
            switch (turnPlayer) {
                case "x":
                    buttonTictoc[element].classList.add("button__tictoc--xf");
                    eSvg.classList.remove("tictoc__image--x");
                    buttonTictoc[element].style.color = "#1a2a33";
                    break;
                case "o":
                    buttonTictoc[element].classList.add("button__tictoc--of");
                    eSvg.classList.remove("tictoc__image--o");
                    buttonTictoc[element].style.color = "#1a2a33";
                default:
                    break;
            }
        });
        tictocResults(turnPlayer);
        turnPlayer = "x";
        return;
    }
    if (tictoc.every((btn) => btn !== "")) {
        tictocResults("tied");
        return;
    }
    turnPlayer = turnPlayer === "x" ? "o" : "x";
    iconTurn();
    
    if (cpuMode) {
        setTimeout(() => {
            gameCpu(); 
        }, 1500);
    }

}

export function tictocWin(cmb) {
    for (const alt of altWin) {
        if (alt.every((index) => tictoc[index] === cmb)) {
            console.log("tictocWin: ", alt, " turnPlayer: ", turnPlayer);
            return alt;
        }
    }
    return null;
}

function iconTurn() {
    const iconX = document.querySelector(".turn__icon--x");
    const iconO = document.querySelector(".turn__icon--o");

    if (turnPlayer === "x") {
        iconX.classList.remove("display__none");
        iconO.classList.add("display__none");
    } else {
        iconX.classList.add("display__none");
        iconO.classList.remove("display__none");
    }
}

function tictocResults(win) {
    console.log("EL ganador es: ", win);
    const wrappersTied = document.getElementById("tied-w");
    const messTitle = document.querySelector(".mess__title");
    const roundImage = document.querySelector(".round__image");
    const radioPlay = document.querySelector(".player__radio:checked");
    const resultsL = document.querySelector(".results__number--l");
    const resultsR = document.querySelector(".results__number--r");
    const resultsC = document.querySelector(".results__number--c");
    wrapperBack.classList.remove("display__none");
    wrappersTakes.classList.remove("display__none");
    const nam = win === radioPlay.value ? 1 : 2;
    switch (win) {
        case "x":
            wrappersMess.classList.remove("display__none");
            playX++;
            messTitle.textContent = `Player ${nam} wins!`;
            messTitle.style.color = "#31c3bd";
            roundImage.src = `./assets/images/icon-x.svg`;
            resultsL.textContent = `${playX}`;
            break;
        case "o":
            wrappersMess.classList.remove("display__none");
            playO++;
            messTitle.textContent = `Player ${nam} wins!`;
            messTitle.style.color = "#f2b137";
            roundImage.src = `./assets/images/icon-o.svg`;
            resultsR.textContent = `${playO}`;
            break;
        case "tied":
            playC++;
            wrappersTied.classList.remove("display__none");
            resultsC.textContent = `${playC}`;
        default:
            console.log("no hay ningun resultado");
            break;
    }
}

export function cleanBoard() {
    tictoc = Array(9).fill("");
    buttonTictoc.forEach((element) => {
        element.innerHTML = "";
        element.classList.remove("button__tictoc--of", "button__tictoc--xf");
    });
}

export function localSave() {
    const pO = playO;
    const pX = playX;
    const pC = playC;
    const resultPlay = {
        playO,
        playX,
        playC,
        fecha: new Date().toISOString(),
    };
    const results = JSON.parse(localStorage.getItem("tictocResults")) || [];
    results.push(resultPlay);
    localStorage.setItem("tictocResults", JSON.stringify(results));
}

export function gameCpu() {
    cpuMode = true;
    const buttonRadio = document.querySelector('.player__radio:checked');
    const personG = buttonRadio.value;
    console.log('personG: ', personG);
    const cpuG = personG === "x" ? "o" : "x";
    console.log('cpuG: ', cpuG, ' turnPlayer: ', turnPlayer); 
    if (cpuG !== turnPlayer) {
        return tictocClicks();
    }
    const winC = winnerCpu(cpuG);
    console.log('winC: ', winC);
    if (winC !== null) {
        btnXO(buttonTictoc[winC], winC);
        console.log('winner: ', buttonTictoc[winC]);
        return;
    }

    const blkP = winnerCpu(personG);
    if (blkP !== null) {
        btnXO(buttonTictoc[blkP], blkP);
        console.log('blkP: ', buttonTictoc[blkP]);
        return;
    }

    const clearCpu = tictoc.map((box, i) => box === "" ? i : null)
                           .filter( i => i !== null);
    console.log('clearCpu: ', clearCpu);
    if (clearCpu.length > 0) {
        const cpuPlay = clearCpu[Math.floor(Math.random() * clearCpu.length)];
        btnXO(buttonTictoc[cpuPlay], cpuPlay);
        console.log('buttonTictoc[cpuPlay]: ', buttonTictoc[cpuPlay], ' cpuPlay: ', cpuPlay);
    }
}
 
export function winnerCpu(cpuG) {
    console.log('cpuG: ', cpuG, ' turnPlayer: ', turnPlayer); 
    for (const cmb of altWin) {
        const [a, b, c] = cmb;
        const cmbValue = [tictoc[a], tictoc[b], tictoc[c]];
        const empty = cmb.filter(i => tictoc[i] === "");

        const ctaPlay = cmbValue.filter(v => v === cpuG).length;

        if (ctaPlay === 2 && empty.length === 1) {
            return empty[0];
        }
    }
    return null;
}
