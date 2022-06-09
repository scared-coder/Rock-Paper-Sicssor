const computerChoice=document.getElementById('computerChoice');
const userChoice=document.getElementById('userChoice');
const result=document.getElementById('result');
const possibleChoices=document.querySelectorAll('button');
let userClick;
let computerClick;
let resultShow;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e)=>{
    userClick=e.target.id;
    console.log(userClick);
    userChoice.innerHTML=userClick;
    generateComputerChoice();
    getResults();
}));

function generateComputerChoice(){
    const random=Math.floor(Math.random()*possibleChoices.length+1);
    console.log(random);
    if(random===1){
        computerClick='rock';
    }
    else if(random===2){
        computerClick='paper';
    }
    else{
        computerClick='siccsors';
    }
    computerChoice.innerHTML=computerClick;
}

function getResults(){
    if(userClick===computerClick){
        resultShow='Its a draw!';
    }
    else if(userClick==='paper' && computerClick==='siccsors'){
        resultShow='You Lose Kid!';
    }
    else if(userClick==='rock' && computerClick==='paper'){
        resultShow='You Lose Kid!';
    }
    else if(userClick==='siccsors' && computerClick==='rock'){
        resultShow='You Lose Kid!';
    }
    else if(userClick==='siccsors' && computerClick==='paper'){
        resultShow='You Won Big Man!';
    }
    else if(userClick==='paper' && computerClick==='rock'){
        resultShow='You Won Big Man!';
    }
    else if(userClick==='rock' && computerClick==='siccsors'){
        resultShow="You Won Big Man!";
    }

    result.innerHTML=resultShow;
}