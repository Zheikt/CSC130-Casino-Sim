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

updateLabels();

btnBack.onclick = (ev) => {
    window.location.assign('./index.html');
}

btnDeposit.onclick = (ev) => {
    let depositAmount = parseInt(txtChipTransfer.value);

    playerChipsLS -= depositAmount;
    playerBankLS += depositAmount;

    updateLabels();
}

btnWithdraw.onclick = (ev) => {
    let withdrawAmount = parseInt(txtBankTransfer.value);

    playerChipsLS += withdrawAmount;
    playerBankLS -= withdrawAmount;

    updateLabels();
}

txtChipTransfer.oninput = (ev) => {
    enableTransferButton(txtChipTransfer, btnDeposit);
}

txtBankTransfer.oninput = (ev) => {
    enableTransferButton(txtBankTransfer, btnWithdraw);
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
    lblAmountBank.innerText = playerBankLS;
    lblAmountChips.innerText = playerChipsLS;
}