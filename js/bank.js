let btnBack = document.getElementById("btnBack");
let btnDeposit = document.getElementById("btnTransferChips");
let btnWithdraw = document.getElementById("btnTransferBank");
let imgTransferDirection = document.getElementById("imgTransferDirection");
let lblAmountChips = document.getElementById("chipAmount");
let lblAmountBank = document.getElementById("bankAmount");
let txtChipTransfer = document.getElementById("chipTransferAmount");
let txtBankTransfer = document.getElementById("bankTransferAmount");

let playerBankLS = localStorage.getItem("bankBalance");
let playerChipsLS = localStorage.getItem("chipsBalance");

playerBankLS = playerBankLS === null ? 10000 : parseInt(playerBankLS);
playerChipsLS = playerChipsLS === null ? 0 : parseInt(playerChipsLS);

imgTransferDirection.style.visibility = 'hidden';

updateLabels();

btnBack.onclick = (ev) => {
    localStorage.setItem("bankBalance", playerBankLS);
    localStorage.setItem("chipsBalance", playerChipsLS);
    window.location.assign('./MainMenu.html');
}

btnDeposit.onclick = (ev) => {
    let depositAmount = parseInt(txtChipTransfer.value);

    if(depositAmount <= playerChipsLS){
        playerChipsLS -= depositAmount;
        playerBankLS += depositAmount;

        updateLabels();
        imgTransferDirection.style.visibility = 'hidden';
    } else {

    }
}

btnWithdraw.onclick = (ev) => {
    let withdrawAmount = parseInt(txtBankTransfer.value);

    playerChipsLS += withdrawAmount;
    playerBankLS -= withdrawAmount;

    updateLabels();
    imgTransferDirection.style.visibility = 'hidden';
}

txtChipTransfer.oninput = (ev) => {
    enableTransferButton(txtChipTransfer, btnDeposit);
    imgTransferDirection.style.transform = 'rotate(-90deg)';
    imgTransferDirection.style.visibility = 'visible';
}

txtBankTransfer.oninput = (ev) => {
    enableTransferButton(txtBankTransfer, btnWithdraw);
    imgTransferDirection.style.transform = 'rotate(90deg)';
    imgTransferDirection.style.visibility = 'visible';
}

function enableTransferButton(txtTransfer, btnTransfer){
    console.log(txtTransfer.value.length);
    if(txtTransfer.value.length === 0){
        btnTransfer.classList.add('disabled');
    } else {
        btnTransfer.classList.remove('disabled');
    }
}

function updateLabels(){
    if(playerBankLS < 0){
        lblAmountBank.style.color = 'red';
    } else {
        
        lblAmountBank.style.color= 'white';
    }
    lblAmountBank.innerText = NumToMoneyStr(playerBankLS);
    lblAmountChips.innerText = NumToMoneyStr(playerChipsLS);

    localStorage.setItem("bankBalance", playerBankLS);
    localStorage.setItem("chipsBalance", playerChipsLS);
}

function NumToMoneyStr(iVal){
    let bIsNegative = iVal < 0;
    let strVal = "" + Math.abs(iVal);
    let numOfCommas = Math.floor(Math.pow(iVal, (1.0/1000.0))); //equivalent to doing a 1000-th root
    for(let iter = strVal.length - 3; iter > 0; iter -= 3){
        strVal = strVal.slice(0, iter) + ',' + strVal.slice(iter);
    }

    strVal = (bIsNegative ? '-' : '') + '$' + strVal;
    return strVal;
}