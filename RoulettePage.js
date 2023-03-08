var arrowOne = document.getElementById("imgArrowOne");
var arrowTwo = document.getElementById("imgArrowFive");
var arrowThree = document.getElementById("imgArrowTen");
var arrowFour = document.getElementById("imgArrowTwenty");
var arrowFive = document.getElementById("imgArrowFifty");
var arrowSix = document.getElementById("imgArrowHundred");
var arrowSeven = document.getElementById("imgArrowOneThousand");
var arrowEight = document.getElementById("imgArrowFiveThousand");
var resultArea = document.getElementById("divSpinResult");
var result = document.getElementById("lblResult");
var numOfChips = document.getElementById("pGolbalChipsNum");
let mdlRules = document.getElementById("mdlRules");

let currentTokenValue = 0;
let totalPayout = 0;
let totalBetAmount = 0;
let totalChips = localStorage.getItem('chipsBalance');

function SetChips() {
    if (totalChips == 0){
        alert("You have no chips. Redirecting to Bank.");
        window.location = "./Bank.html";
    }
    // else if (totalChips = "NaN") {
    //     numOfChips.innerHTML = 4000;
    // }
    else {
        numOfChips.innerText = totalChips;
    }
}

btnCloseRules.onclick = (ev) => {
    mdlRules.style.display = 'none';
}

function getAnswerInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Rules() {
    console.log("Rules Press");
    mdlRules.style.display = 'grid';
}

function finalCompression(roll, bidAmount, btnidNum, color) {
    if (btnidNum == roll) {
        CheckForSingleWin(roll, bidAmount);
    }
    if (btnidNum == 45 && color == "red") {
        totalPayout += bidAmount * 2;
        console.log("Red Pay-Out: " + totalPayout);
    }
    if (btnidNum == 46 && color == "black") {
        totalPayout += bidAmount * 2;
        console.log("Black Pay-Out: " + totalPayout);
    }
    if (btnidNum == 44) {
        CheckForEvenWin(roll, bidAmount);
    }
    if (btnidNum == 47) {
        CheckForOddWin(roll, bidAmount);
    }
    if (btnidNum == 42 && (roll == 1 || roll == 4 || roll == 7 || roll == 10 || roll == 13 || roll == 16 || roll == 19 || roll == 22 || roll == 25 || roll == 28 || roll == 31 || roll == 34)) {
        // Payout for Row 1
        totalPayout += bidAmount * 2;
        console.log("Row One Pay-Out: " + totalPayout);
    }
    if (btnidNum == 41 && (roll == 2 || roll == 5 || roll == 8 || roll == 11 || roll == 14 || roll == 17 || roll == 20 || roll == 23 || roll == 26 || roll == 29 || roll == 32 || roll == 35)) {
        // Payout for Row 2
        totalPayout += bidAmount * 2;
        console.log("Row Two Pay-Out: " + totalPayout);
    }
    if (btnidNum == 40 && (roll == 3 || roll == 6 || roll == 9 || roll == 12 || roll == 15 || roll == 18 || roll == 11 || roll == 24 || roll == 27 || roll == 30 || roll == 33 || roll == 36)) {
        // Payout for Row 3
        totalPayout += bidAmount * 2;
        console.log("Row Three Pay-Out: " + totalPayout);
    }
    if (btnidNum == 37 && (roll >= 1 && roll <= 12)){
        totalPayout += bidAmount * 2;
        console.log("1st 12 Pay-Out: " + totalPayout);
    }
    if (btnidNum == 38 && (roll >= 13 && roll <= 24)){
        totalPayout += bidAmount * 2;
        console.log("1st 12 Pay-Out: " + totalPayout);
    }
    if (btnidNum == 39 && (roll >= 25 && roll <= 36)){
        totalPayout += bidAmount * 2;
        console.log("1st 12 Pay-Out: " + totalPayout);
    }
    if (btnidNum == 43 && (roll >= 1 && roll <= 18)){
        totalPayout += bidAmount * 2;
        console.log("First 18 Pay-Out: " + totalPayout);
    }
    if (btnidNum == 48 && (roll >= 19 && roll <= 36)){
        totalPayout += bidAmount * 2;
        console.log("Last 18 Pay-Out: " + totalPayout);
    }
}

function Spin() {
    resultArea.style.visibility = "visible";
    totalPayout = 0;
    var roll = getAnswerInt(0, 36);
    console.log(roll);
    result.innerHTML = roll;

    if (roll == 2 || roll == 4 || roll == 6 || roll == 8 || roll == 10 || roll == 11 || roll == 13 || roll == 15 || roll == 17 || roll == 20 || roll == 22 || roll == 24 || roll == 26 || roll == 28 || roll == 29 || roll == 31 || roll == 33 || roll == 35) {
        resultArea.style.backgroundColor = "black";
    }
    else if (roll == 1 || roll == 3 || roll == 5 || roll == 7 || roll == 9 || roll == 12 || roll == 14 || roll == 16 || roll == 18 || roll == 19 || roll == 21 || roll == 23 || roll == 25 || roll == 27 || roll == 30 || roll == 32 || roll == 34 || roll == 36) {
        resultArea.style.backgroundColor = "red";
    }
    else {
        resultArea.style.backgroundColor = "green";
    }
    for (var i = 0; i <= 48; i++) {
        var divbidded = document.getElementById("btn" + i.toString());
        switch (divbidded.style.border.toString()) {
            case "5px dotted green" :
                finalCompression(roll, 1, i, resultArea.style.backgroundColor);
                break;
            case "5px dotted pink" :
                finalCompression(roll, 5, i, resultArea.style.backgroundColor);
                break;
            case "5px dotted blue" :
                finalCompression(roll, 10, i, resultArea.style.backgroundColor);
                break;
            case "5px dotted darkred" :
                finalCompression(roll, 20, i, resultArea.style.backgroundColor);
                break;
            case "5px dotted lightblue" :
                finalCompression(roll, 50, i, resultArea.style.backgroundColor);
                break;
            case "5px dotted red" :
                finalCompression(roll, 100, i, resultArea.style.backgroundColor);
                break;
            case "5px dotted yellow" :
                finalCompression(roll, 1000, i, resultArea.style.backgroundColor);
                break;
            case "5px dotted orange" :
                finalCompression(roll, 5000, i, resultArea.style.backgroundColor);
                break;
        }
    }
    var tempChips = parseInt(numOfChips.innerText);
    totalChips = tempChips + totalPayout;
    numOfChips.innerHTML = totalChips;
    calcChips();
    WinLoss();
}

function calcChips() {
    let tempChips = totalChips - totalBetAmount
    if (tempChips <= 0) {
        // Leave Page
        alert("You have no chips. Redirecting to Bank.");
        window.location = "./Bank.html";
        return true;
    }
    else {
        // Calculate Chips
        numOfChips.innerHTML = tempChips;
        return false;
    }
     
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function WinLoss() {
    await sleep(1000);
    let money = totalPayout - totalBetAmount
    alert("Result: " + money + " Dollars");
    ClearBets();
}

function ClearBets() {
    for (let i = 0; i <= 48; i++) {
        var div = document.getElementById("btn" + i.toString());
        div.style.border = "";
    }
    totalBetAmount = 0;
}

function CheckForOddWin(roll, bidAmount) {
    if (roll % 2 != 0) {
        // Payout for Odds
        totalPayout += bidAmount * 2;
        console.log("Odd Pay-Out: " + totalPayout);
    }
    else {
        console.log("No Odd Win");
    }
}

function CheckForEvenWin(roll, bidAmount) {
    if (roll % 2 == 0) {
        // Payout for Evens
        totalPayout += bidAmount * 2;
        console.log("Evens Pay-Out: " + totalPayout);
    }
    else {
        console.log("No Even Win");
    }
}

function CheckForColorWin(color, bidAmount) {
    switch (color) {
        case "black":
            
            break;
        case "red":
            
            break;
        case "green":
            totalPayout += bidAmount * 2;
            console.log("Green Pay-Out: " + totalPayout);
            break;
    }
}

function CheckForSingleWin(roll, bidAmount) {
        var biddedDiv = document.getElementById("btn" + roll.toString());
        switch (biddedDiv.style.border.toString()) {
            case "5px dotted green" :
                console.log("Green Bid Won!");
                totalPayout += bidAmount * 36;
                console.log("single Number Pay-Out: " + totalPayout);
                break;
            case "5px dotted pink" :
                console.log("Pink Bid Won!");
                totalPayout += bidAmount * 36;
                console.log("single Number Pay-Out: " + totalPayout);
                break;
            case "5px dotted blue" :
                console.log("Blue Bid Won!");
                totalPayout += bidAmount * 36;
                console.log("single Number Pay-Out: " + totalPayout);
                break;
            case "5px dotted darkred" :
                console.log("Dark Red Bid Won!");
                totalPayout += bidAmount * 36;
                console.log("single Number Pay-Out: " + totalPayout);
                break;
            case "5px dotted lightblue" :
                console.log("Light Blue Bid Won!");
                totalPayout += bidAmount * 36;
                console.log("single Number Pay-Out: " + totalPayout);
                break;
            case "5px dotted red" :
                console.log("Red Bid Won!");
                totalPayout += bidAmount * 36;
                console.log("single Number Pay-Out: " + totalPayout);
                break;
            case "5px dotted yellow" :
                console.log("Yellow Bid Won!");
                totalPayout += bidAmount * 36;
                console.log("single Number Pay-Out: " + totalPayout);
                break;
            case "5px dotted orange" :
                console.log("Orange Bid Won!");
                totalPayout += bidAmount * 36;
                console.log("single Number Pay-Out: " + totalPayout);
                break;
        }
}

function Exit() {
    alert("Calculating Coins");
    localStorage.setItem("chipsBalance", totalChips)
    window.location = "./MainMenu.html";
}

function CheckIfOver() {
    if (totalBetAmount > parseInt(numOfChips.innerHTML)) {
        return true;
    }
    else {
        return false;
    }
}

function PlaceBid(clickedid) {
    var clickedDiv = document.getElementById(clickedid.toString());
    if (arrowOne.style.visibility == "visible") {
        if (clickedDiv.style.border == "5px dotted green") {
            alert("Bid Already Placed");
        }
        else {
            clickedDiv.style.border = "5px dotted green";
            totalBetAmount += 1;
            if (CheckIfOver() == true) {
                totalBetAmount -= 1;
                clickedDiv.style.border = "";
                alert("Not Enough Chips");
            }
        }
    }
    else if (arrowTwo.style.visibility == "visible") {
        if (clickedDiv.style.border != "") {
            alert("Bid Already Placed");
        }
        else {
            clickedDiv.style.border = "5px dotted pink";
            totalBetAmount += 5;
            if (CheckIfOver() == true) {
                totalBetAmount -= 5;
                clickedDiv.style.border = "";
                alert("Not Enough Chips");
            }
        }
    }
    else if (arrowThree.style.visibility == "visible") {
        if (clickedDiv.style.border != "") {
            alert("Bid Already Placed");
        }
        else {
            clickedDiv.style.border = "5px dotted blue";
            totalBetAmount += 10;
            if (CheckIfOver() == true) {
                totalBetAmount -= 10;
                clickedDiv.style.border = "";
                alert("Not Enough Chips");
            }
        }
    }
    else if (arrowFour.style.visibility == "visible") {
        if (clickedDiv.style.border != "") {
            alert("Bid Already Placed");
        }
        else {
            clickedDiv.style.border = "5px dotted darkred";
            totalBetAmount += 20;
            if (CheckIfOver() == true) {
                totalBetAmount -= 20;
                clickedDiv.style.border = "";
                alert("Not Enough Chips");
            }
        }
    }
    else if (arrowFive.style.visibility == "visible") {
        if (clickedDiv.style.border != "") {
            alert("Bid Already Placed");
        }
        else {
            clickedDiv.style.border = "5px dotted lightblue";
            totalBetAmount += 50;
            if (CheckIfOver() == true) {
                totalBetAmount -= 50;
                clickedDiv.style.border = "";
                alert("Not Enough Chips");
            }
        }
    }
    else if (arrowSix.style.visibility == "visible") {
        if (clickedDiv.style.border != "") {
            alert("Bid Already Placed");
        }
        else {
            clickedDiv.style.border = "5px dotted red";
            totalBetAmount += 100;
            if (CheckIfOver() == true) {
                totalBetAmount -= 100;
                clickedDiv.style.border = "";
                alert("Not Enough Chips");
            }
        }
    }
    else if (arrowSeven.style.visibility == "visible") {
        if (clickedDiv.style.border != "") {
            alert("Bid Already Placed");
        }
        else {
            clickedDiv.style.border = "5px dotted yellow";
            totalBetAmount += 1000;
            if (CheckIfOver() == true) {
                totalBetAmount -= 1000;
                clickedDiv.style.border = "";
                alert("Not Enough Chips");
            }
        }
    }
    else if (arrowEight.style.visibility == "visible") {
        if (clickedDiv.style.border != "") {
            alert("Bid Already Placed");
        }
        else {
            clickedDiv.style.border = "5px dotted orange";
            totalBetAmount += 5000;
            if (CheckIfOver() == true) {
                totalBetAmount -= 5000;
                clickedDiv.style.border = "";
                alert("Not Enough Chips");
            }
        }
    }
    else {
        if (clickedDiv.style.border == "5px dotted green") {
            clickedDiv.style.border = "";
            totalBetAmount -= 1;
        }
        if (clickedDiv.style.border == "5px dotted pink") {
            clickedDiv.style.border = "";
            totalBetAmount -= 5;
        }
        if (clickedDiv.style.border == "5px dotted blue") {
            clickedDiv.style.border = "";
            totalBetAmount -= 10;
        }
        if (clickedDiv.style.border == "5px dotted darkred") {
            clickedDiv.style.border = "";
            totalBetAmount -= 20;
        }
        if (clickedDiv.style.border == "5px dotted lightblue") {
            clickedDiv.style.border = "";
            totalBetAmount -= 50;
        }
        if (clickedDiv.style.border == "5px dotted red") {
            clickedDiv.style.border = "";
            totalBetAmount -= 100;
        }
        if (clickedDiv.style.border == "5px dotted yellow") {
            clickedDiv.style.border = "";
            totalBetAmount -= 1000;
        }
        if (clickedDiv.style.border == "5px dotted orange") {
            clickedDiv.style.border = "";
            totalBetAmount -= 5000;
        }
    }
    console.log(totalBetAmount);
}

function SelectToken(clickedId) {
    var id = clickedId + "";
    switch(id) {
        case "btnOneToken":
            if (arrowOne.style.visibility == "visible") {
                arrowOne.style.visibility = "Hidden";
                currentTokenValue = 0;
            }
            else {
                arrowOne.style.visibility = "Visible";
                arrowTwo.style.visibility = "Hidden";
                arrowThree.style.visibility = "Hidden";
                arrowFour.style.visibility = "Hidden";
                arrowFive.style.visibility = "Hidden";
                arrowSix.style.visibility = "Hidden";
                arrowSeven.style.visibility = "Hidden";
                arrowEight.style.visibility = "Hidden";
                currentTokenValue = 1;
            }
            break;
        case "btnFiveToken":
            if (arrowTwo.style.visibility == "visible") {
                arrowTwo.style.visibility = "Hidden";
                currentTokenValue = 0;
            }
            else {
                arrowOne.style.visibility = "Hidden";
                arrowTwo.style.visibility = "Visible";
                arrowThree.style.visibility = "Hidden";
                arrowFour.style.visibility = "Hidden";
                arrowFive.style.visibility = "Hidden";
                arrowSix.style.visibility = "Hidden";
                arrowSeven.style.visibility = "Hidden";
                arrowEight.style.visibility = "Hidden";
                currentTokenValue = 5;
            }
            break;
        case "btnTenToken":
            if (arrowThree.style.visibility == "visible") {
                arrowThree.style.visibility = "hidden";
                currentTokenValue = 0;
            }
            else {
                arrowOne.style.visibility = "Hidden";
                arrowTwo.style.visibility = "Hidden";
                arrowThree.style.visibility = "Visible";
                arrowFour.style.visibility = "Hidden";
                arrowFive.style.visibility = "Hidden";
                arrowSix.style.visibility = "Hidden";
                arrowSeven.style.visibility = "Hidden";
                arrowEight.style.visibility = "Hidden";
                currentTokenValue = 10;
            }
            break;
        case "btnTwentyToken":
            if (arrowFour.style.visibility == "visible") {
                arrowFour.style.visibility = "hidden";
                currentTokenValue = 0;
            }
            else {
                arrowOne.style.visibility = "Hidden";
                arrowTwo.style.visibility = "Hidden";
                arrowThree.style.visibility = "Hidden";
                arrowFour.style.visibility = "Visible";
                arrowFive.style.visibility = "Hidden";
                arrowSix.style.visibility = "Hidden";
                arrowSeven.style.visibility = "Hidden";
                arrowEight.style.visibility = "Hidden";
                currentTokenValue = 20;
            }
            break;
        case "btnFiftyToken":
            if (arrowFive.style.visibility == "visible") {
                arrowFive.style.visibility = "hidden";
                currentTokenValue = 0;
            }
            else {
                arrowOne.style.visibility = "Hidden";
                arrowTwo.style.visibility = "Hidden";
                arrowThree.style.visibility = "Hidden";
                arrowFour.style.visibility = "Hidden";
                arrowFive.style.visibility = "Visible";
                arrowSix.style.visibility = "Hidden";
                arrowSeven.style.visibility = "Hidden";
                arrowEight.style.visibility = "Hidden";
                currentTokenValue = 50;
            }
            break;
        case "btnOneHundredToken":
            if (arrowSix.style.visibility == "visible") {
                arrowSix.style.visibility = "hidden";
                currentTokenValue = 0;
            }
            else {
                arrowOne.style.visibility = "Hidden";
                arrowTwo.style.visibility = "Hidden";
                arrowThree.style.visibility = "Hidden";
                arrowFour.style.visibility = "Hidden";
                arrowFive.style.visibility = "Hidden";
                arrowSix.style.visibility = "Visible";
                arrowSeven.style.visibility = "Hidden";
                arrowEight.style.visibility = "Hidden";
                currentTokenValue = 100;
            }
            break;
        case "btnOneThousandToken":
            if (arrowSeven.style.visibility == "visible") {
                arrowSeven.style.visibility = "hidden";
                currentTokenValue = 0;
            }
            else {
                arrowOne.style.visibility = "Hidden";
                arrowTwo.style.visibility = "Hidden";
                arrowThree.style.visibility = "Hidden";
                arrowFour.style.visibility = "Hidden";
                arrowFive.style.visibility = "Hidden";
                arrowSix.style.visibility = "Hidden";
                arrowSeven.style.visibility = "Visible";
                arrowEight.style.visibility = "Hidden";
                currentTokenValue = 1000;
            }
            break;
        case "btnFiveThousandToken":
            if (arrowEight.style.visibility == "visible") {
                arrowEight.style.visibility = "hidden";
                currentTokenValue = 0;
            }
            else {
                arrowOne.style.visibility = "Hidden";
                arrowTwo.style.visibility = "Hidden";
                arrowThree.style.visibility = "Hidden";
                arrowFour.style.visibility = "Hidden";
                arrowFive.style.visibility = "Hidden";
                arrowSix.style.visibility = "Hidden";
                arrowSeven.style.visibility = "Hidden";
                arrowEight.style.visibility = "Visible";
                currentTokenValue = 5000;
            }
            break;
    }
}