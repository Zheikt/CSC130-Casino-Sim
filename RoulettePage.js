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

var currentTokenValue = 0;

function getAnswerInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function CheckForWin() {

}

function Exit() {
    window.location = "./MainMenu.html";
}

function PlaceBid(clickedid) {
    var id = clickedid + "";
    var clickedDiv = document.getElementById(id);
    if (arrowOne.style.visibility == "visible") {
        clickedDiv.style.border = "5px dotted green";
    }
    else if (arrowTwo.style.visibility == "visible") {
        clickedDiv.style.border = "5px dotted pink";
    }
    else if (arrowThree.style.visibility == "visible") {
        clickedDiv.style.border = "5px dotted blue";
    }
    else if (arrowFour.style.visibility == "visible") {
        clickedDiv.style.border = "5px dotted darkred";
    }
    else if (arrowFive.style.visibility == "visible") {
        clickedDiv.style.border = "5px dotted lightblue";
    }
    else if (arrowSix.style.visibility == "visible") {
        clickedDiv.style.border = "5px dotted red";
    }
    else if (arrowSeven.style.visibility == "visible") {
        clickedDiv.style.border = "5px dotted yellow";
    }
    else if (arrowEight.style.visibility == "visible") {
        clickedDiv.style.border = "5px dotted orange";
    }
    else {
        clickedDiv.style.border = "";
    }
}

function Spin() {
    resultArea.style.visibility = "visible";
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
    CheckForWin();
}

function Rules() {
    
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