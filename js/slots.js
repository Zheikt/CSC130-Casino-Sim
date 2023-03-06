const imgSrcArry = ["./Assets/Slots/Wheel - Lemon.png", "./Assets/Slots/Wheel - Orange.png", "./Assets/Slots/Wheel - Banana.png", "./Assets/Slots/Wheel - Melon.png",
                    "./Assets/Slots/Wheel - Plum.png", "./Assets/Slots/Wheel - Cherry.png", "./Assets/Slots/Wheel - Bell.png", "./Assets/Slots/Wheel - Bars.png",
                    "./Assets/Slots/Wheel - Seven.png"];

const spinBtn = document.getElementById("btnSpin");
const addBtn = document.getElementById("addBet");
const removeBtn = document.getElementById("removeBet");
const backBtn = document.getElementById("btnBack");
const rulesBtn = document.getElementById("rulesBtn");
const closeRulesBtn = document.getElementById("closeRulesBtn");

const rulesScreen = document.getElementById("rulesScreen");

const chip1Btn = document.getElementById("btnChip_1");
const chip5Btn = document.getElementById("btnChip_5");
const chip10Btn = document.getElementById("btnChip_10");
const chip20Btn = document.getElementById("btnChip_20");
const chip50Btn = document.getElementById("btnChip_50");
const chip100Btn = document.getElementById("btnChip_100");
const chip1000Btn = document.getElementById("btnChip_1000");
const chip5000Btn = document.getElementById("btnChip_5000");

const selectionForChip1 = document.getElementById("selectionForChip_1");
const selectionForChip5 = document.getElementById("selectionForChip_5");
const selectionForChip10 = document.getElementById("selectionForChip_10");
const selectionForChip20 = document.getElementById("selectionForChip_20");
const selectionForChip50 = document.getElementById("selectionForChip_50");
const selectionForChip100 = document.getElementById("selectionForChip_100");
const selectionForChip1000 = document.getElementById("selectionForChip_1000");
const selectionForChip5000 = document.getElementById("selectionForChip_5000");

const slotBarrelSpot1 = document.getElementById("slotBarrelSpot1");
const slotBarrelSpot2 = document.getElementById("slotBarrelSpot2");
const slotBarrelSpot3 = document.getElementById("slotBarrelSpot3");

const chipCounterChip1 = document.getElementById("chipCounterChip1");
const chipCounterChip5 = document.getElementById("chipCounterChip5");
const chipCounterChip10 = document.getElementById("chipCounterChip10");
const chipCounterChip20 = document.getElementById("chipCounterChip20");
const chipCounterChip50 = document.getElementById("chipCounterChip50");
const chipCounterChip100 = document.getElementById("chipCounterChip100");
const chipCounterChip1000 = document.getElementById("chipCounterChip1000");
const chipCounterChip5000 = document.getElementById("chipCounterChip5000");

var moneyAmt = document.getElementById("moneyAmt");
const bankAmt = "";

var selectedChip = 1;
var selectedNumbers = [];

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const genRandImg = () =>
{
    let rNum = Math.random()

    if(rNum <= 0.2)
    {
        return 0;
    }
    else if(rNum <= 0.35)
    {
        return 1;
    }
    else if(rNum <= 0.48)
    {
        return 2;
    }
    else if(rNum <= 0.6)
    {
        return 3;
    }
    else if(rNum <= 0.7)
    {
        return 4;
    }
    else if(rNum <= 0.79)
    {
        return 5;
    }
    else if(rNum <= 0.87)
    {
        return 6;
    }
    else if(rNum <= 0.94)
    {
        return 7;
    }
    else
    {
        return 8;
    }
}

const removeChips = () =>
{
    let currentChipValue = getBetAmt();
    clearBets();
    let newChipValue = currentChipValue - selectedChip;
    moneyAmt.innerText = formatMoneyAmt(parseInt(moneyAmt.innerText.replace("$","").replaceAll(",","")) + selectedChip)
    while (newChipValue >= 5000) 
    {
        newChipValue -= 5000;
        chipCounterChip5000.innerText = parseInt(chipCounterChip5000.innerText) + 1
    }
    while (newChipValue >= 1000) 
    {
        newChipValue -= 1000;
        chipCounterChip1000.innerText = parseInt(chipCounterChip1000.innerText) + 1
    }
    while (newChipValue >= 100) 
    {
        newChipValue -= 100;
        chipCounterChip100.innerText = parseInt(chipCounterChip100.innerText) + 1
    }
    while (newChipValue >= 50) 
    {
        newChipValue -= 50;
        chipCounterChip50.innerText = parseInt(chipCounterChip50.innerText) + 1
    }
    while (newChipValue >= 20) 
    {
        newChipValue -= 20;
        chipCounterChip20.innerText = parseInt(chipCounterChip20.innerText) + 1
    }
    while (newChipValue >= 10) 
    {
        newChipValue -= 10;
        chipCounterChip10.innerText = parseInt(chipCounterChip10.innerText) + 1
    }
    while (newChipValue >= 5) 
    {
        newChipValue -= 5;
        chipCounterChip5.innerText = parseInt(chipCounterChip5.innerText) + 1
    }
    while (newChipValue >= 1) 
    {
        newChipValue -= 1;
        chipCounterChip1.innerText = parseInt(chipCounterChip1.innerText) + 1
    }
    checkChipAddAvailability(selectedChip);
    checkChipRemoveAvailability(selectedChip);
}

const setBtnAvailability = (btn, isAvailible, onClickFunction) =>
{
    if(!isAvailible)
    {
        btn.style.opacity = 0.6;
        btn.removeEventListener("click", onClickFunction);
    }
    else if(isAvailible)
    {
        btn.style.opacity = 1;
        btn.addEventListener("click", onClickFunction);
    }
}

const setPointerView = (chip1Visible, chip5Visible, chip10Visible, chip20Visible, chip50Visible, chip100Visible, chip1000Visible, chip5000Visible) =>
{
    if(chip1Visible)
    {
        selectionForChip1.classList.remove("invisible");
        selectionForChip1.classList.add("visible");
    }
    else
    {
        selectionForChip1.classList.remove("visible");
        selectionForChip1.classList.add("invisible");
    }

    if(chip5Visible)
    {
        selectionForChip5.classList.remove("invisible");
        selectionForChip5.classList.add("visible");
    }
    else
    {
        selectionForChip5.classList.remove("visible");
        selectionForChip5.classList.add("invisible");
    }

    if(chip10Visible)
    {
        selectionForChip10.classList.remove("invisible");
        selectionForChip10.classList.add("visible");
    }
    else
    {
        selectionForChip10.classList.remove("visible");
        selectionForChip10.classList.add("invisible");
    }

    if(chip20Visible)
    {
        selectionForChip20.classList.remove("invisible");
        selectionForChip20.classList.add("visible");
    }
    else
    {
        selectionForChip20.classList.remove("visible");
        selectionForChip20.classList.add("invisible");
    }

    if(chip50Visible)
    {
        selectionForChip50.classList.remove("invisible");
        selectionForChip50.classList.add("visible");
    }
    else
    {
        selectionForChip50.classList.remove("visible");
        selectionForChip50.classList.add("invisible");
    }

    if(chip100Visible)
    {
        selectionForChip100.classList.remove("invisible");
        selectionForChip100.classList.add("visible");
    }
    else
    {
        selectionForChip100.classList.remove("visible");
        selectionForChip100.classList.add("invisible");
    }

    if(chip1000Visible)
    {
        selectionForChip1000.classList.remove("invisible");
        selectionForChip1000.classList.add("visible");
    }
    else
    {
        selectionForChip1000.classList.remove("visible");
        selectionForChip1000.classList.add("invisible");
    }

    if(chip5000Visible)
    {
        selectionForChip5000.classList.remove("invisible");
        selectionForChip5000.classList.add("visible");
    }
    else
    {
        selectionForChip5000.classList.remove("visible");
        selectionForChip5000.classList.add("invisible");
    }
}

const getBetAmt = () =>
{
    let chip1Count = parseInt(chipCounterChip1.innerText);
    let chip5Count = parseInt(chipCounterChip5.innerText);
    let chip10Count = parseInt(chipCounterChip10.innerText);
    let chip20Count = parseInt(chipCounterChip20.innerText);
    let chip50Count = parseInt(chipCounterChip50.innerText);
    let chip100Count = parseInt(chipCounterChip100.innerText);
    let chip1000Count = parseInt(chipCounterChip1000.innerText);
    let chip5000Count = parseInt(chipCounterChip5000.innerText);

    return chip1Count + (chip5Count * 5) + (chip10Count * 10) + (chip20Count * 20) + (chip50Count * 50) + (chip100Count * 100) + (chip1000Count * 1000) + (chip5000Count * 5000)
}

const checkForPayout = (num1, num2, num3) =>
{
    if(num1 === 0 && num2 === 0 && num3 === 0)
    {
        return getBetAmt();
    }
    else if(num1 === 1 && num2 === 1 && num3 === 1)
    {
        return 2 * getBetAmt();
    }
    else if(num1 === 2 && num2 === 2 && num3 === 2)
    {   
        return 3 * getBetAmt();
    }
    else if(num1 === 3 && num2 === 3 && num3 === 3)
    {
        return 5 * getBetAmt();
    }
    else if(num1 === 4 && num2 === 4 && num3 === 4)
    {
        return 10 * getBetAmt();
    }
    else if(num1 === 5 && num2 === 5 && num3 === 5)
    {
        return 20 * getBetAmt();
    }
    else if(num1 === 6 && num2 === 6 && num3 === 6)
    {
        return 50 * getBetAmt();
    }
    else if(num1 === 7 && num2 === 7 && num3 === 7)
    {
        return 100 * getBetAmt();
    }
    else if(num1 === 8 && num2 === 8 && num3 === 8)
    {
        return 500 * getBetAmt();
    }
    else
    {
        return 0 * getBetAmt();
    }
}

const checkSpinAvailability = () =>
{
    if(parseInt(chipCounterChip1.innerText) > 0 || parseInt(chipCounterChip5.innerText) > 0 || parseInt(chipCounterChip10.innerText) > 0 || parseInt(chipCounterChip20.innerText) > 0 ||
    (parseInt(chipCounterChip50.innerText) > 0 || parseInt(chipCounterChip100.innerText) > 0 || parseInt(chipCounterChip1000.innerText) > 0 || parseInt(chipCounterChip5000.innerText) > 0))
    {
        setBtnAvailability(spinBtn, true, spinBtnClicked);
    }
    else
    {
        setBtnAvailability(spinBtn, false, spinBtnClicked);
    }
}

const checkIfOutOfChips = () =>
{
    if(parseInt(moneyAmt.innerText.replace('$',"").replaceAll(',',"")) <= 0)
    {
        window.localStorage.setItem("chipsBalance ", parseInt(moneyAmt.replace("$", "").replaceAll(",", "")));
        alert("You are out of chips!\nYou must go get more from the back to play.");
        window.location.href = "./bank.html";
    }
}

const checkChipRemoveAvailability = (chipValue) =>
{
    let betAmt = getBetAmt();
    if(betAmt >= chipValue)
    {
        setBtnAvailability(removeBtn,true,removeChips)
    }
    else
    {
        setBtnAvailability(removeBtn,false,removeChips)
    }
}

const checkChipAddAvailability = (chipValue) =>
{
    if(chipValue > parseInt(moneyAmt.innerText.replace("$","").replaceAll(",","")))
    {
        setBtnAvailability(addBtn,false,addBet)
    }
    else
    {
        setBtnAvailability(addBtn,true,addBet)
    }
}

const spinWheel = () =>
{
    let rNum1;
    let rNum2;
    let rNum3;

    let intervalId = setInterval(()=>
    {
        rNum1 = genRandImg();
        rNum2 = genRandImg();
        rNum3 = genRandImg();

        slotBarrelSpot1.src = imgSrcArry[rNum1];
        slotBarrelSpot2.src = imgSrcArry[rNum2];
        slotBarrelSpot3.src = imgSrcArry[rNum3];
    },100);
    setTimeout(()=>
    {
        clearInterval(intervalId);
        let payout = checkForPayout(rNum1,rNum2,rNum3);
        moneyAmt.innerText = formatMoneyAmt(parseInt(moneyAmt.innerText.replace("$","").replaceAll(",","")) + payout);
        checkSpinAvailability();
        clearBets();
        checkChipAddAvailability(selectedChip);
        checkChipRemoveAvailability(selectedChip);
        checkIfOutOfChips();
    }, 2000);
    
} 

const formatMoneyAmt = (totalMoney) =>
{
    totalMoney = "" + totalMoney;
    let reversedMoneyStr = "";
    let counter = 0;
    for(let i = totalMoney.length; i >= 0; i--)
    {
        reversedMoneyStr += totalMoney.substring(i,i+1);
        if((counter % 3) === 0 && counter != 0 && counter != totalMoney.length)
        {
            reversedMoneyStr += ",";
        }
        counter++;
    }
    let moneyStr = "$";
    for(let i = reversedMoneyStr.length; i >= 0; i--)
    {
        moneyStr += reversedMoneyStr.substring(i,i+1);
    }

    return moneyStr;
}

const addBet = () =>
{
    moneyAmtint = parseInt(moneyAmt.innerText.replace("$","").replaceAll(",",""));
    switch(selectedChip)
    {
        case 1:
            chipCounterChip1.innerText = (parseInt(chipCounterChip1.innerText) + 1);
            moneyAmt.innerText = formatMoneyAmt(moneyAmtint - 1)
            break
        case 5:
            chipCounterChip5.innerText = (parseInt(chipCounterChip5.innerText) + 1);
            moneyAmt.innerText = formatMoneyAmt(moneyAmtint - 5)
            break
        case 10:
            chipCounterChip10.innerText = (parseInt(chipCounterChip10.innerText) + 1);
            moneyAmt.innerText = formatMoneyAmt(moneyAmtint - 10)
            break
        case 20:
            chipCounterChip20.innerText = (parseInt(chipCounterChip20.innerText) + 1);
            moneyAmt.innerText = formatMoneyAmt(moneyAmtint - 20)
            break
        case 50:
            chipCounterChip50.innerText = (parseInt(chipCounterChip50.innerText) + 1);
            moneyAmt.innerText = formatMoneyAmt(moneyAmtint - 50)
            break
        case 100:
            chipCounterChip100.innerText = (parseInt(chipCounterChip100.innerText) + 1);
            moneyAmt.innerText = formatMoneyAmt(moneyAmtint - 100)
            break
        case 1000:
            chipCounterChip1000.innerText = (parseInt(chipCounterChip1000.innerText) + 1);
            moneyAmt.innerText = formatMoneyAmt(moneyAmtint - 1000)
            break
        case 5000:
            chipCounterChip5000.innerText = (parseInt(chipCounterChip5000.innerText) + 1);
            moneyAmt.innerText = formatMoneyAmt(moneyAmtint - 5000)
            break
    }

    consolidateChips();
    checkSpinAvailability();
    checkChipAddAvailability(selectedChip);
    checkChipRemoveAvailability(selectedChip);
}

const consolidateChips = () =>
{
    while(parseInt(chipCounterChip1.innerText) > 4 || parseInt(chipCounterChip5.innerText) > 1 || parseInt(chipCounterChip10.innerText) > 1 || 
            parseInt(chipCounterChip20.innerText) > 4 || (parseInt(chipCounterChip20.innerText) > 1 && parseInt(chipCounterChip10.innerText) > 0) || 
            parseInt(chipCounterChip50.innerText) > 1 || parseInt(chipCounterChip100.innerText) > 9 || parseInt(chipCounterChip1000.innerText) > 4)
    {
        while(parseInt(chipCounterChip1.innerText) > 4)
        {
            chipCounterChip1.innerText = (parseInt(chipCounterChip1.innerText) - 5);
            chipCounterChip5.innerText = (parseInt(chipCounterChip5.innerText) + 1);
        }

        while(parseInt(chipCounterChip5.innerText) > 1)
        {
            chipCounterChip5.innerText = (parseInt(chipCounterChip5.innerText) - 2);
            chipCounterChip10.innerText = (parseInt(chipCounterChip10.innerText) + 1);
        }

        while(parseInt(chipCounterChip10.innerText) > 1)
        {
            chipCounterChip10.innerText = (parseInt(chipCounterChip10.innerText) - 2);
            chipCounterChip20.innerText = (parseInt(chipCounterChip20.innerText) + 1);
        }

        while(parseInt(chipCounterChip20.innerText) > 4)
        {
            chipCounterChip20.innerText = (parseInt(chipCounterChip20.innerText) - 5);
            chipCounterChip100.innerText = (parseInt(chipCounterChip100.innerText) + 1);
        }

        while(parseInt(chipCounterChip20.innerText) > 1 && parseInt(chipCounterChip10.innerText) > 0)
        {
            chipCounterChip20.innerText = (parseInt(chipCounterChip20.innerText) - 2);
            chipCounterChip10.innerText = (parseInt(chipCounterChip10.innerText) - 1);
            chipCounterChip50.innerText = (parseInt(chipCounterChip50.innerText) + 1);
        }

        while(parseInt(chipCounterChip50.innerText) > 1)
        {
            chipCounterChip50.innerText = (parseInt(chipCounterChip50.innerText) - 2);
            chipCounterChip100.innerText = (parseInt(chipCounterChip100.innerText) + 1);
        }

        while(parseInt(chipCounterChip100.innerText) > 9)
        {
            chipCounterChip100.innerText = (parseInt(chipCounterChip100.innerText) - 10);
            chipCounterChip1000.innerText = (parseInt(chipCounterChip1000.innerText) + 1);
        }

        while(parseInt(chipCounterChip1000.innerText) > 4)
        {
            chipCounterChip1000.innerText = (parseInt(chipCounterChip1000.innerText) - 5);
            chipCounterChip5000.innerText = (parseInt(chipCounterChip5000.innerText) + 1);
        }
    }
    
}

const clearBets = () =>
{
    chipCounterChip1.innerText = 0;
    chipCounterChip5.innerText = 0;
    chipCounterChip10.innerText = 0;
    chipCounterChip20.innerText = 0;
    chipCounterChip50.innerText = 0;
    chipCounterChip100.innerText = 0;
    chipCounterChip1000.innerText = 0;
    chipCounterChip5000.innerText = 0;
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const spinBtnClicked = () =>
{
    setBtnAvailability(spinBtn, false, spinBtnClicked);
    setBtnAvailability(addBtn, false, addBet);
    setBtnAvailability(removeBtn, false, removeChips);
    spinWheel();
}

const chip1Clicked = () =>
{
    selectedChip = 1;
    setPointerView(true, false, false, false, false, false, false, false);
    checkChipAddAvailability(1);
    checkChipRemoveAvailability(1);
}

const chip5Clicked = () =>
{
    selectedChip = 5;
    setPointerView(false, true, false, false, false, false, false, false);
    checkChipAddAvailability(5);
    checkChipRemoveAvailability(5);
}

const chip10Clicked = () =>
{
    selectedChip = 10;
    setPointerView(false, false, true, false, false, false, false, false);
    checkChipAddAvailability(10);
    checkChipRemoveAvailability(10);
}

const chip20Clicked = () =>
{
    selectedChip = 20;
    setPointerView(false, false, false, true, false, false, false, false);    
    checkChipAddAvailability(20);
    checkChipRemoveAvailability(20);
}

const chip50Clicked = () =>
{
    selectedChip = 50;
    setPointerView(false, false, false, false, true, false, false, false);
    checkChipAddAvailability(50);
    checkChipRemoveAvailability(50);
}

const chip100Clicked = () =>
{
    selectedChip = 100;
    setPointerView(false, false, false, false, false, true, false, false);
    checkChipAddAvailability(100);
    checkChipRemoveAvailability(100);
}

const chip1000Clicked = () =>
{
    selectedChip = 1000;
    setPointerView(false, false, false, false, false, false, true, false);
    checkChipAddAvailability(1000);
    checkChipRemoveAvailability(1000);
}

const chip5000Clicked = () =>
{
    selectedChip = 5000;
    setPointerView(false, false, false, false, false, false, false, true);
    checkChipAddAvailability(5000);
    checkChipRemoveAvailability(5000);
}


// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

spinBtn.addEventListener("click", spinBtnClicked);
addBtn.addEventListener("click", addBet);
removeBtn.addEventListener("click", removeChips);
chip1Btn.addEventListener("click", chip1Clicked);
chip5Btn.addEventListener("click", chip5Clicked);
chip10Btn.addEventListener("click", chip10Clicked);
chip20Btn.addEventListener("click", chip20Clicked);
chip50Btn.addEventListener("click", chip50Clicked);
chip100Btn.addEventListener("click", chip100Clicked);
chip1000Btn.addEventListener("click", chip1000Clicked);
chip5000Btn.addEventListener("click", chip5000Clicked);
backBtn.addEventListener("click",() => {window.location.href = "./MainMenu.html"});
rulesBtn.addEventListener("click", () => {rulesScreen.style.visibility = "visible"});
closeRulesBtn.addEventListener("click", () => {rulesScreen.style.visibility = "hidden"});


window.onload = () =>
{
    moneyAmt.innerText = formatMoneyAmt(parseInt(window.localStorage.getItem("chipsBalance ")));
    checkSpinAvailability();
    checkChipAddAvailability(1);
    checkChipRemoveAvailability(1);
    checkIfOutOfChips(1);
}