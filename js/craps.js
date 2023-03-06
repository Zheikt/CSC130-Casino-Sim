const FIELD_PAYOUT_MULTIPLIER = 1;
const FIELD_2_PAYOUT_MULTIPLIER = 2;
const FIELD_12_PAYOUT_MULTIPLIER = 3;
const PASS_PAYOUT_MULTIPLIER = 1;
const DONT_PASS_PAYOUT_MULTIPLIER = 1;
const ONE_ROLL_CRAPS_PAYOUT_MULTIPLIER = 7;
const ONE_ROLL_12_2_PAYOUT_MULTIPLIER = 30;
const ONE_ROLL_11_3_PAYOUT_MULTIPLIER = 15;
const HARDWAY_10_4_PAYOUT_MULTIPLIER = 7;
const HARDWAY_8_6_PAYOUT_MULTIPLIER = 9;

const chip1Color = '0e7e4d';
const chip5Color = 'da4a9c';
const chip10Color = '1e579c';
const chip20Color = 'a02243';
const chip50Color = '15c2f1';
const chip100Color = 'ea2740';
const chip500Color = '8cd426';
const chip1000Color = 'f4d10a';
const chip5000Color = 'e47733';

let tokens = [document.getElementById('imgChip1'), document.getElementById('imgChip5'), document.getElementById('imgChip10'),
    document.getElementById('imgChip20'), document.getElementById('imgChip50'), document.getElementById('imgChip100'),
    document.getElementById('imgChip500'), document.getElementById('imgChip1000'), document.getElementById('imgChip5000')];
let dice = [document.getElementById('imgLeftDie'), document.getElementById('imgRightDie')];
let btnBack = document.getElementById("btnBack");
let btnRoll = document.getElementById("btnRoll");
let btnRules = document.getElementById('btnRules');
let btnCloseRules = document.getElementById('btnCloseRules');
let imgTokenSelector = document.getElementById("imgTokenSelector");
let mdlRules = document.getElementById("mdlRules");

let playerChipsLS = localStorage.getItem('chipsBalance');

let hardwayValues = [4, 10, 6, 8];
let singleRollValues = [7, 3, 11, 2, 12];
let fieldValues = [2, 3, 4, 9, 10, 11, 12];

let currentToken;

btnRules.onclick = (ev) => {
    mdlRules.style.display = 'grid';
}

btnCloseRules.onclick = (ev) => {
    mdlRules.style.display = 'none';
}

for (let iter = 0; iter < tokens.length; iter++) {
    tokens[iter].onclick = (ev) => {
        const startOffset = 2;
        const endOffset = 3;
        let index = tokens.findIndex((elem) => elem.id === ev.target.id);
        console.log(index);
        imgTokenSelector.style.gridColumn = (index + startOffset) + '/' + (index + endOffset);
    }
}

btnRoll.onclick = (ev) => {
    let die1 = Math.ceil((Math.random() * 6));
    let die2 = Math.ceil((Math.random() * 6));

    if (die1 == die2 && hardwayValues.includes(die1 + die2)) {

    }

    dice[0].src = `../Repo/Assets/Craps/Dice${die1}.png`;
    dice[1].src = `../Repo/Assets/Craps/Dice${die2}.png`;

    dice[0].visibility = 'visible';
    dice[1].visibility = 'visible';

}

function setCurrentToken() {
    let id = imgTokenSelector.id;
    let firstNumberIndex = id.indexOf('p') + 1;

    currentToken = parseInt(id.split(firstNumberIndex));
}