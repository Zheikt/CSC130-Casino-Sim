const FIELD_PAYOUT_MULTIPLIER = 1;
const FIELD_2_PAYOUT_MULTIPLIER = 2;
const FIELD_12_PAYOUT_MULTIPLIER = 3;
const PASS_PAYOUT_MULTIPLIER = 1;
const DONT_PASS_PAYOUT_MULTIPLIER = 1;
const ONE_ROLL_CRAPS_PAYOUT_MULTIPLIER = 7;
const ONE_ROLL_12_2_PAYOUT_MULTIPLIER = 30;
const ONE_ROLL_11_3_PAYOUT_MULTIPLIER = 15;
const ONE_ROLL_7_PAYOUT_MULTIPLIER = 4;
const HARDWAY_10_4_PAYOUT_MULTIPLIER = 7;
const HARDWAY_8_6_PAYOUT_MULTIPLIER = 9;

let tokenColors = ['#0e7e4d', '#da4a9c', '#1e579c', '#a02243', '#15c2f1', '#ea2740', '#8cd426', '#f4d10a', '#e47733'];
let tokenValues = [1, 5, 10, 20, 50, 100, 500, 1000, 5000];

let tokens = [document.getElementById('imgChip1'), document.getElementById('imgChip5'), document.getElementById('imgChip10'),
document.getElementById('imgChip20'), document.getElementById('imgChip50'), document.getElementById('imgChip100'),
document.getElementById('imgChip500'), document.getElementById('imgChip1000'), document.getElementById('imgChip5000')];

let hardwaySpaces = [document.getElementById('btnDbl2'), document.getElementById('btnDbl5'), document.getElementById('btnDbl3'),
document.getElementById('btnDbl4')];

let oneRollSpaces = [document.getElementById('btnOneRoll7'), document.getElementById('btnOneRoll3'), document.getElementById('btnOneRoll11'),
document.getElementById('btnOneRoll2'), document.getElementById('btnOneRoll12'), document.getElementById('btnOneRollCraps')];

let fieldSpaces = [document.getElementById('btnField2'), document.getElementById('btnField3'), document.getElementById('btnField4'),
document.getElementById('btnField9'), document.getElementById('btnField10'), document.getElementById('btnField11'), document.getElementById('btnField12')];

let passSpace = document.getElementById('btnPass');
let noPassSpace = document.getElementById('btnDontPass');

let pointIndicators = [document.getElementById('imgCrapsIndicator4'), document.getElementById('imgCrapsIndicator5'), 
document.getElementById('imgCrapsIndicator6'),document.getElementById('imgCrapsIndicator8'), document.getElementById('imgCrapsIndicator9'), 
document.getElementById('imgCrapsIndicator10')];

let dice = [document.getElementById('imgLeftDie'), document.getElementById('imgRightDie')];
let btnBack = document.getElementById("btnBack");
let btnRoll = document.getElementById("btnRoll");
let btnRules = document.getElementById('btnRules');
let btnCloseRules = document.getElementById('btnCloseRules');
let imgTokenSelector = document.getElementById("imgTokenSelector");
let mdlRules = document.getElementById("mdlRules");
let lblChipAmount = document.getElementById("lblChipAmount");

let playerChipsLS = localStorage.getItem('chipsBalance');

lblChipAmount.textContent = `$${playerChipsLS}`;

let hardwayValues = [4, 10, 6, 8];
let oneRollValues = [7, 3, 11, 2, 12, 'Craps'];
let fieldValues = [2, 3, 4, 9, 10, 11, 12];

let currentToken = 0;

let pointOn = false;
let point = 0;

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
        currentToken = index;
    }
}

for (let iter = 0; iter < hardwaySpaces.length; iter++) {
    for (let betPlaceIter = 0; betPlaceIter < tokens.length; betPlaceIter++) {
        let txtTokenColor = document.createElement('div');
        txtTokenColor.textContent = '\u2022';
        txtTokenColor.style.color = tokenColors[betPlaceIter];
        txtTokenColor.style.margin = 0;
        //txtTokenColor.style.width = '50%';
        txtTokenColor.style.fontSize = '20pt';
        //txtTokenColor.style.height = '67%';
        txtTokenColor.style.display = 'none';
        txtTokenColor.id = `hdwy${hardwayValues[iter]}Chip${tokenValues[betPlaceIter]}Dot`;

        let txtTokenNum = document.createElement('div');
        txtTokenNum.style.margin = 0;
        txtTokenNum.style.marginLeft = '15px';
        //txtTokenNum.style.width = '50%';
        txtTokenNum.style.fontSize = '12pt';
        //txtTokenNum.style.height = '67%';
        txtTokenNum.style.display = 'none';
        txtTokenNum.id = `hdwy${hardwayValues[iter]}Chip${tokenValues[betPlaceIter]}Num`;

        hardwaySpaces[iter].append(txtTokenColor);
        hardwaySpaces[iter].append(txtTokenNum);
    }

    hardwaySpaces[iter].onclick = (ev) => {
        let mainId = `hdwy${parseInt(ev.target.id[ev.target.id.length - 1]) * 2}Chip${tokenValues[currentToken]}`;
        console.log(mainId);
        let tokenColorElem = document.getElementById(mainId + "Dot");
        let tokenCounterElem = document.getElementById(mainId + "Num");

        tokenColorElem.style.display = 'contents';
        tokenCounterElem.style.display = 'contents';
        ev.target.style.backgroundColor = 'rgba(0,0,0,0.5)';

        tokenCounterElem.textContent = 'x' + (tokenCounterElem.textContent == '' ? '1' : (parseInt(tokenCounterElem.textContent.substring(1)) + 1));

        playerChipsLS -= tokenValues[currentToken];
    }
}

for (let iter = 0; iter < oneRollSpaces.length; iter++) {
    for (let betPlaceIter = 0; betPlaceIter < tokens.length; betPlaceIter++) {
        let txtTokenColor = document.createElement('div');
        txtTokenColor.textContent = '\u2022';
        txtTokenColor.style.color = tokenColors[betPlaceIter];
        txtTokenColor.style.margin = 0;
        //txtTokenColor.style.width = '50%';
        txtTokenColor.style.fontSize = '20pt';
        //txtTokenColor.style.height = '67%';
        txtTokenColor.style.display = 'none';
        txtTokenColor.id = `onrl${oneRollValues[iter]}Chip${tokenValues[betPlaceIter]}Dot`;

        let txtTokenNum = document.createElement('div');
        txtTokenNum.style.margin = 0;
        txtTokenNum.style.marginLeft = '15px';
        //txtTokenNum.style.width = '50%';
        txtTokenNum.style.fontSize = '12pt';
        //txtTokenColor.style.height = '67%';
        txtTokenNum.style.display = 'none';
        txtTokenNum.id = `onrl${oneRollValues[iter]}Chip${tokenValues[betPlaceIter]}Num`;

        oneRollSpaces[iter].append(txtTokenColor);
        oneRollSpaces[iter].append(txtTokenNum);
    }

    oneRollSpaces[iter].onclick = (ev) => {
        let numStartIndex = FindIndexOfNum(ev.target.id);
        let mainId = `onrl${numStartIndex == -1 ? 'Craps' : ev.target.id.substring(numStartIndex)}Chip${tokenValues[currentToken]}`;
        console.log(mainId);
        let tokenColorElem = document.getElementById(mainId + "Dot");
        let tokenCounterElem = document.getElementById(mainId + "Num");

        console.log(tokenColorElem.id);

        tokenColorElem.style.display = 'contents';
        tokenCounterElem.style.display = 'contents';
        ev.target.style.backgroundColor = 'rgba(0,0,0,0.5)';

        console.log(tokenCounterElem.textContent);

        tokenCounterElem.textContent = 'x' + (tokenCounterElem.textContent == '' ? '1' : (parseInt(tokenCounterElem.textContent.substring(1)) + 1));

        playerChipsLS -= tokenValues[currentToken];
    }
}

for (let iter = 0; iter < fieldSpaces.length; iter++) {
    for (let betPlaceIter = 0; betPlaceIter < tokens.length; betPlaceIter++) {
        let txtTokenColor = document.createElement('div');
        txtTokenColor.textContent = '\u2022';
        txtTokenColor.style.color = tokenColors[betPlaceIter];
        txtTokenColor.style.margin = 0;
        //txtTokenColor.style.width = '50%';
        txtTokenColor.style.fontSize = '20pt';
        //txtTokenColor.style.height = '67%';
        txtTokenColor.style.display = 'none';
        txtTokenColor.id = `fld${fieldValues[iter]}Chip${tokenValues[betPlaceIter]}Dot`;

        let txtTokenNum = document.createElement('div');
        txtTokenNum.style.margin = 0;
        txtTokenNum.style.marginLeft = '15px';
        //txtTokenNum.style.width = '50%';
        txtTokenNum.style.fontSize = '12pt';
        //txtTokenNum.style.height = '67%';
        txtTokenNum.style.display = 'none';
        txtTokenNum.id = `fld${fieldValues[iter]}Chip${tokenValues[betPlaceIter]}Num`;

        fieldSpaces[iter].append(txtTokenColor);
        fieldSpaces[iter].append(txtTokenNum);
    }

    fieldSpaces[iter].onclick = (ev) => {
        let numIndex = FindIndexOfNum(ev.target.id);
        let mainId = `fld${parseInt(ev.target.id.substring(numIndex))}Chip${tokenValues[currentToken]}`;
        console.log(mainId);
        let tokenColorElem = document.getElementById(mainId + "Dot");
        let tokenCounterElem = document.getElementById(mainId + "Num");

        console.log(tokenColorElem.id);

        tokenColorElem.style.display = 'contents';
        tokenCounterElem.style.display = 'contents';
        ev.target.style.backgroundColor = 'rgba(0,0,0,0.5)';

        console.log(tokenCounterElem.textContent);

        tokenCounterElem.textContent = 'x' + (tokenCounterElem.textContent == '' ? '1' : (parseInt(tokenCounterElem.textContent.substring(1)) + 1));

        playerChipsLS -= tokenValues[currentToken];
    }
}

for (let betPlaceIter = 0; betPlaceIter < tokens.length; betPlaceIter++) {
    let txtTokenColor = document.createElement('div');
    txtTokenColor.textContent = '\u2022';
    txtTokenColor.style.color = tokenColors[betPlaceIter];
    txtTokenColor.style.margin = 0;
    //txtTokenColor.style.width = '50%';
    txtTokenColor.style.fontSize = '20pt';
    //txtTokenColor.style.height = '67%';
    txtTokenColor.style.display = 'none';
    txtTokenColor.id = `passChip${tokenValues[betPlaceIter]}Dot`;

    let txtTokenNum = document.createElement('div');
    txtTokenNum.style.margin = 0;
    txtTokenNum.style.marginLeft = '15px';
    //txtTokenNum.style.width = '50%';
    txtTokenNum.style.fontSize = '12pt';
    //txtTokenNum.style.height = '67%';
    txtTokenNum.style.display = 'none';
    txtTokenNum.id = `passChip${tokenValues[betPlaceIter]}Num`;

    passSpace.append(txtTokenColor);
    passSpace.append(txtTokenNum);
}

passSpace.onclick = (ev) => {
    let mainId = `passChip${tokenValues[currentToken]}`;
    console.log(mainId);
    let tokenColorElem = document.getElementById(mainId + "Dot");
    let tokenCounterElem = document.getElementById(mainId + "Num");

    console.log(tokenColorElem.id);

    tokenColorElem.style.display = 'contents';
    tokenCounterElem.style.display = 'contents';
    ev.target.style.backgroundColor = 'rgba(0,0,0,0.5)';

    console.log(tokenCounterElem.textContent);

    tokenCounterElem.textContent = 'x' + (tokenCounterElem.textContent == '' ? '1' : (parseInt(tokenCounterElem.textContent.substring(1)) + 1));

    playerChipsLS -= tokenValues[currentToken];
}

for (let betPlaceIter = 0; betPlaceIter < tokens.length; betPlaceIter++) {
    let txtTokenColor = document.createElement('div');
    txtTokenColor.textContent = '\u2022';
    txtTokenColor.style.color = tokenColors[betPlaceIter];
    txtTokenColor.style.margin = 0;
    //txtTokenColor.style.width = '50%';
    txtTokenColor.style.fontSize = '20pt';
    //txtTokenColor.style.height = '67%';
    txtTokenColor.style.display = 'none';
    txtTokenColor.id = `nopsChip${tokenValues[betPlaceIter]}Dot`;

    let txtTokenNum = document.createElement('div');
    txtTokenNum.style.margin = 0;
    txtTokenNum.style.marginLeft = '15px';
    //txtTokenNum.style.width = '50%';
    txtTokenNum.style.fontSize = '12pt';
    //txtTokenNum.style.height = '67%';
    txtTokenNum.style.display = 'none';
    txtTokenNum.id = `nopsChip${tokenValues[betPlaceIter]}Num`;

    noPassSpace.append(txtTokenColor);
    noPassSpace.append(txtTokenNum);
}

noPassSpace.onclick = (ev) => {
    let mainId = `nopsChip${tokenValues[currentToken]}`;
    let tokenColorElem = document.getElementById(mainId + "Dot");
    let tokenCounterElem = document.getElementById(mainId + "Num");

    tokenColorElem.style.display = 'contents';
    tokenCounterElem.style.display = 'contents';
    ev.target.style.backgroundColor = 'rgba(0,0,0,0.5)';
    tokenCounterElem.textContent = 'x' + (tokenCounterElem.textContent == '' ? '1' : (parseInt(tokenCounterElem.textContent.substring(1)) + 1));

    playerChipsLS -= tokenValues[currentToken];
}

btnRoll.onclick = (ev) => {
    let die1 = Math.ceil((Math.random() * 6));
    let die2 = Math.ceil((Math.random() * 6));

    let dieTotal = die1 + die2;

    let hardwayWinnings = evaluateHardway(die1, die2);
    let oneRollWinnings = evaluateOneRoll(dieTotal);
    let fieldWinnings = evaluateField(dieTotal);
    let multiRollWinnings = evaluateMultiRoll(dieTotal);

    dice[0].src = `../Repo/Assets/Craps/Dice${die1}.png`;
    dice[1].src = `../Repo/Assets/Craps/Dice${die2}.png`;

    dice[0].style.visibility = 'visible';
    dice[1].style.visibility = 'visible';

    alert(`Die Roll: ${die1} + ${die2} = ${dieTotal}\nYour winnings this roll:\nHardway: ${hardwayWinnings}\nOne Roll: ${oneRollWinnings}\nField: ${fieldWinnings}\nPass: ${multiRollWinnings[0]}\nDon't Pass: ${multiRollWinnings[1]}`);

    playerChipsLS = playerChipsLS + (hardwayWinnings < 0 ? 0 : hardwayWinnings) + (oneRollWinnings < 0 ? 0 : oneRollWinnings) + (fieldWinnings < 0 ? 0 : fieldWinnings) + (multiRollWinnings[0] < 0 ? 0 : multiRollWinnings[0]) + (multiRollWinnings[1] < 0 ? 0 : multiRollWinnings[1]);

    localStorage.setItem("chipsBalance", playerChipsLS);

    for (let iter = 0; iter < hardwayValues.length; iter++) {
        for (let chipIter = 0; chipIter < tokenValues.length; chipIter++) {
            let chipNum = document.getElementById("hdwy" + hardwayValues[iter] + "Chip" + tokenValues[chipIter] + "Num");
            let chipDot = document.getElementById("hdwy" + hardwayValues[iter] + "Chip" + tokenValues[chipIter] + "Dot");
            if (dieTotal == 7 || dieTotal == hardwayValues[iter]) {
                chipNum.style.display = 'none';
                chipDot.style.display = 'none';
            }
            chipNum.textContent = '';
        }
        hardwaySpaces[iter].style.backgroundColor = 'rgba(0,0,0,0)';
    }

    for (let iter = 0; iter < oneRollValues.length; iter++) {
        for (let chipIter = 0; chipIter < tokenValues.length; chipIter++) {
            let chipNum = document.getElementById("onrl" + oneRollValues[iter] + "Chip" + tokenValues[chipIter] + "Num");
            let chipDot = document.getElementById("onrl" + oneRollValues[iter] + "Chip" + tokenValues[chipIter] + "Dot");
            chipNum.style.display = 'none';
            chipDot.style.display = 'none';
            chipNum.textContent = '';
        }
        oneRollSpaces[iter].style.backgroundColor = 'rgba(0,0,0,0)';
    }

    for (let iter = 0; iter < fieldValues.length; iter++) {
        for (let chipIter = 0; chipIter < tokenValues.length; chipIter++) {
            let chipNum = document.getElementById("fld" + fieldValues[iter] + "Chip" + tokenValues[chipIter] + "Num");
            let chipDot = document.getElementById("fld" + fieldValues[iter] + "Chip" + tokenValues[chipIter] + "Dot");
            chipNum.style.display = 'none';
            chipDot.style.display = 'none';
            chipNum.textContent = '';
        }
        fieldSpaces[iter].style.backgroundColor = '';
    }

    for (let chipIter = 0; chipIter < tokenValues.length; chipIter++) {
        let chipNum = document.getElementById("passChip" + tokenValues[chipIter] + "Num");
        let chipDot = document.getElementById("passChip" + tokenValues[chipIter] + "Dot");
        if ((pointOn == true && dieTotal == point) || (pointOn == false &&  dieTotal == 11) || dieTotal == 7) {
            chipNum.style.display = 'none';
            chipDot.style.display = 'none';
            chipNum.textContent = '';
            passSpace.style.backgroundColor = 'rgba(0,0,0,0)';
        }
        
    }
    

    for (let chipIter = 0; chipIter < tokenValues.length; chipIter++) {
        let chipNum = document.getElementById("nopsChip" + tokenValues[chipIter] + "Num");
        let chipDot = document.getElementById("nopsChip" + tokenValues[chipIter] + "Dot");
        if ((pointOn == false && (dieTotal == 12 || dieTotal == 3 || dieTotal == 2 || dieTotal == 11)) || dieTotal == 7) {
            chipNum.style.display = 'none';
            chipDot.style.display = 'none';
            chipNum.textContent = '';
            noPassSpace.style.backgroundColor = 'rgba(0,0,0,0)';
        }
    }

    if(pointOn == false && dieTotal != 7 && dieTotal != 11 && dieTotal != 2 && dieTotal != 3 && dieTotal != 12){
        point = dieTotal;
        pointOn = true;
        (document.getElementById('imgCrapsIndicator4')).style.visibility = 'hidden';
        (document.getElementById(`imgCrapsIndicator${dieTotal}`)).style.visibility = 'visible';
        (document.getElementById(`imgCrapsIndicator${dieTotal}`)).src = './Assets/Craps/CrapsOnIndicator.png';
    } else if(pointOn == true && (point == dieTotal || dieTotal == 7)){
        pointOn = false;
        (document.getElementById(`imgCrapsIndicator${point}`)).style.visibility = 'hidden';
        (document.getElementById('imgCrapsIndicator4')).style.visibility = 'visible';
        (document.getElementById(`imgCrapsIndicator4`)).src = './Assets/Craps/CrapsOffIndicator.png';
        point = 0;
    }

    lblChipAmount.textContent = `$${playerChipsLS}`;
}

btnBack.onclick = (ev) => {
    window.location.assign("./MainMenu.html")
}

function setCurrentToken() {
    let id = imgTokenSelector.id;
    let firstNumberIndex = id.indexOf('p') + 1;

    currentToken = parseInt(id.split(firstNumberIndex));
}

function evaluateHardway(die1, die2) {
    let mainId = 'hdwy';
    let isHardway = (die1 == die2) && (die1 != 1) && (die1 != 6);
    let netWinnings = 0;
    for (let iter = 0; iter < hardwayValues.length; iter++) {
        let betTotal = 0;
        for (let chipIter = 0; chipIter < tokenValues.length; chipIter++) {
            let chipNum = document.getElementById(mainId + hardwayValues[iter] + "Chip" + tokenValues[chipIter] + "Num");
            if (chipNum.style.display == 'contents') {
                betTotal += parseInt(chipNum.textContent.substring(FindIndexOfNum(chipNum.textContent))) * tokenValues[chipIter];
            }
        }

        if (isHardway && (die1 + die2) == hardwayValues[iter]) {
            if (iter < 2) {
                netWinnings += (HARDWAY_10_4_PAYOUT_MULTIPLIER * betTotal) + betTotal;
            } else {
                netWinnings += (HARDWAY_8_6_PAYOUT_MULTIPLIER * betTotal) + betTotal;
            }
        } else if ((die1 + die2) == 7 || (die1 + die2) == hardwayValues[iter]) {
            netWinnings -= betTotal;
        }
    }

    return netWinnings;
}

function evaluateOneRoll(dieTotal) {
    let mainId = 'onrl';
    let isOneRoll = dieTotal == 7 || dieTotal == 2 || dieTotal == 12 || dieTotal == 3 || dieTotal == 11;
    let netWinnings = 0;

    for (let iter = 0; iter < oneRollValues.length; iter++) {
        let betTotal = 0;
        for (let chipIter = 0; chipIter < tokenValues.length; chipIter++) {
            let chipNum = document.getElementById(mainId + oneRollValues[iter] + "Chip" + tokenValues[chipIter] + "Num");
            if (chipNum.style.display == 'contents') {
                betTotal += parseInt(chipNum.textContent.substring(FindIndexOfNum(chipNum.textContent))) * tokenValues[chipIter];
            }
        }

        if (isOneRoll) {
            if (oneRollValues[iter] === 'Craps') {
                if (dieTotal == 2 || dieTotal == 3 || dieTotal == 12) {
                    netWinnings += (ONE_ROLL_CRAPS_PAYOUT_MULTIPLIER * betTotal) + betTotal;
                } else {
                    netWinnings -= betTotal;
                }
            } else if (dieTotal == oneRollValues[iter]) {
                if (dieTotal == 7) {
                    netWinnings += (ONE_ROLL_7_PAYOUT_MULTIPLIER * betTotal) + betTotal;
                } else if (dieTotal == 2 || dieTotal == 12) {
                    netWinnings += (ONE_ROLL_12_2_PAYOUT_MULTIPLIER * betTotal) + betTotal;
                } else if (dieTotal == 3 || dieTotal == 11) {
                    netWinnings += (ONE_ROLL_11_3_PAYOUT_MULTIPLIER * betTotal) + betTotal;
                }
            } else {
                netWinnings -= betTotal;
            }
        } else {
            netWinnings -= betTotal;
        }
    }

    return netWinnings;
}

function evaluateField(dieTotal) {
    let mainId = 'fld';
    let isField = fieldValues.includes(dieTotal);
    let netWinnings = 0;

    for (let iter = 0; iter < fieldValues.length; iter++) {
        let betTotal = 0;
        for (let chipIter = 0; chipIter < tokenValues.length; chipIter++) {
            let chipNum = document.getElementById(mainId + fieldValues[iter] + "Chip" + tokenValues[chipIter] + "Num");
            if (chipNum.style.display == 'contents') {
                betTotal += parseInt(chipNum.textContent.substring(FindIndexOfNum(chipNum.textContent))) * tokenValues[chipIter];
            }
        }

        if (isField) {
            if (dieTotal == 2) {
                netWinnings += (FIELD_2_PAYOUT_MULTIPLIER * betTotal) + betTotal;
            } else if (dieTotal == 12) {
                netWinnings += (FIELD_12_PAYOUT_MULTIPLIER * betTotal) + betTotal;
            } else if (dieTotal == fieldValues[iter]){
                netWinnings += (FIELD_PAYOUT_MULTIPLIER * betTotal) + betTotal;
            } else {
                netWinnings -= betTotal;
            }
        } else {
            netWinnings -= betTotal;
        }
    }

    return netWinnings;
}

function evaluateMultiRoll(dieTotal) {
    let passId = 'passChip';
    let noPassId = 'nopsChip';

    let isPass = pointOn ? (dieTotal == point) : (dieTotal == 7 || dieTotal == 11);
    let isNoPass = pointOn ? (dieTotal == 7) : (dieTotal == 2 || dieTotal == 3);

    let passBet = 0;
    let noPassBet = 0;

    for (let iter = 0; iter < tokenValues.length; iter++) {
        let passChipNum = document.getElementById(passId + tokenValues[iter] + "Num");
        let noPassChipNum = document.getElementById(noPassId + tokenValues[iter] + "Num");
        if (passChipNum.style.display == 'contents') {
            passBet += parseInt(passChipNum.textContent.substring(FindIndexOfNum(passChipNum.textContent))) * tokenValues[iter];
        }

        if (noPassChipNum.style.display == 'contents') {
            noPassBet += parseInt(noPassChipNum.textContent.substring(FindIndexOfNum(noPassChipNum.textContent))) * tokenValues[iter];
        }
    }

    if (isPass == false && isNoPass == true) {
        passBet *= -1;
    } else if (isPass) {
        passBet = (PASS_PAYOUT_MULTIPLIER * passBet) + passBet;
    }

    if (isNoPass == false && isPass == true) {
        noPassBet *= -1;
    } else if (isNoPass) {
        noPassBet = (DONT_PASS_PAYOUT_MULTIPLIER * noPassBet) + noPassBet;
    }

    return isPass == false && isNoPass == false ? [0, 0] : [passBet, noPassBet];
}

function wasMultiRoll() {
    let passId = 'passChip';
    let noPassId = 'nopsChip';

    let returnBool = false;

    for (let iter = 0; iter < tokenValues; iter++) {
        if ((document.getElementById(passId + tokenValues[iter])).style.visibility == 'visible' || (document.getElementById(noPassId + tokenValues[iter])).style.visibility) {
            returnBool = true;
            break;
        }
    }

    return returnBool;
}

function FindIndexOfNum(str) {
    let returnValue = -1;
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    for (let iter = 0; iter < str.length; iter++) {
        if (numbers.findIndex((num) => num == str[iter]) != -1) {
            returnValue = iter;
            break;
        }
    }

    return returnValue;
}