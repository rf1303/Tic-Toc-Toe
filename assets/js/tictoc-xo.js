console.log("inicio tictoc-xo ✅");

const iconX = `<svg class="tictoc__image tictoc__image--x" viewBox="0 0 64 64" width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill="currentColor" fill-rule="evenodd"/></svg>`;

const iconXout = `<svg class="tictoc__image" viewBox="0 0 64 64" width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M51.12 1.269c.511 0 1.023.195 1.414.586l9.611 9.611c.391.391.586.903.586 1.415s-.195 1.023-.586 1.414L44.441 32l17.704 17.705c.391.39.586.902.586 1.414 0 .512-.195 1.024-.586 1.415l-9.611 9.611c-.391.391-.903.586-1.415.586a1.994 1.994 0 0 1-1.414-.586L32 44.441 14.295 62.145c-.39.391-.902.586-1.414.586a1.994 1.994 0 0 1-1.415-.586l-9.611-9.611a1.994 1.994 0 0 1-.586-1.415c0-.512.195-1.023.586-1.414L19.559 32 1.855 14.295a1.994 1.994 0 0 1-.586-1.414c0-.512.195-1.024.586-1.415l9.611-9.611c.391-.391.903-.586 1.415-.586s1.023.195 1.414.586L32 19.559 49.705 1.855c.39-.391.902-.586 1.414-.586Z" stroke="#31C3BD" stroke-width="2" fill="none"/></svg>`;

const iconO = `<svg class="tictoc__image tictoc__image--o" viewBox="0 0 64 64" width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" fill="currentColor"/></svg>`;

const iconOout = `<svg class="tictoc__mage" viewBox="0 0 66 66" width="66" height="66" xmlns="http://www.w3.org/2000/svg"><path d="M33 1c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C15.327 65 1 50.673 1 33 1 15.327 15.327 1 33 1Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" stroke="#F2B137" stroke-width="2" fill="none"/></svg>`;

let tictoc = Array(9).fill("");
let turnPlayer = "x";

const buttonTictoc = document.querySelectorAll(".button__tictoc");
/* const imageTictoc = buttonTictoc.querySelectorAll() */

iconTurn();

export function tictocClicks() {
    buttonTictoc.forEach((btn, index) => {
        console.log("btn antes: ", index);
        btn.dataset.index = index;
        console.log("btn despues: ", index);
        btn.addEventListener("click", () => {
            console.log("mostrar ❌ o ⭕: ", btn);
            btnXO(btn, index);
        });
    });
}

function btnXO(btn, index) {
    if (tictoc[index] !== "") return;

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
        return;
    }
    if (tictoc.every((btn) => btn !== "")) {
        tictocResults("tied");
        return;
    }
    turnPlayer = turnPlayer === "x" ? "o" : "x";
    iconTurn();
}

export function tictocWin(cmb) {
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
    // return altWin.some( alt => {
    //     return alt.every(index => tictoc[index] === cmb );
    // });
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
    const wrapperBack = document.querySelector(".wrappers__back");
    const wrappersTakes = document.querySelector(".wrappers__takes");
    const wrappersMess = document.querySelector(".wrappers__mess");
    const messTitle = document.querySelector(".mess__title");
    const roundImage = document.querySelector(".round__image");
    const radioPlay = document.querySelector(".player__radio:checked");
    wrapperBack.classList.remove("display__none");
    wrappersTakes.classList.remove("display__none");
    wrappersMess.classList.remove("display__none");
    const nam = win === radioPlay.value ? 1 : 2;
    console.log("NAM: ", nam);
    switch (win) {
        case "x":
            messTitle.textContent = `Player ${nam} wins!`;
            roundImage.src = `./assets/images/icon-x.svg`;
            break;
        case "o":
            messTitle.textContent = `Player ${nam} wins!`;
            roundImage.src = `./assets/images/icon-o.svg`;
            break;
        default:
            break;
    }
}
