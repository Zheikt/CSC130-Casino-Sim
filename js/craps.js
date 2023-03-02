let tokens = [document.getElementById('imgChip1'), document.getElementById('imgChip5'), document.getElementById('imgChip10'), 
                document.getElementById('imgChip20'), document.getElementById('imgChip50'), document.getElementById('imgChip100'), 
                document.getElementById('imgChip500'), document.getElementById('imgChip1000'), document.getElementById('imgChip5000')];
let btnBack = document.getElementById("btnBack");
let btnRoll = document.getElementById("btnRoll");
let btnRules = document.getElementById('btnRules');
let btnCloseRules = document.getElementById('btnCloseRules');
let imgTokenSelector = document.getElementById("imgTokenSelector");
let mdlRules = document.getElementById("mdlRules");

let playerChipsLS = localStorage.getItem('chipsBalance');

let currentToken;

btnRules.onclick = (ev) => {
    mdlRules.style.display = 'grid';
}

btnCloseRules.onclick = (ev) => {
    mdlRules.style.display = 'none';
}

for(let iter = 0; iter < tokens.length; iter++){
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
    
}

function setCurrentToken(){
    let id = imgTokenSelector.id;
    let firstNumberIndex = id.indexOf('p') + 1;

    currentToken = parseInt(id.split(firstNumberIndex));
}