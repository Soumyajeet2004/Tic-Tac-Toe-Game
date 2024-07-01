let box1=document.querySelectorAll(".box");
let res=document.querySelector(".res");
let newGameButton=document.querySelector("#newbt");
let msgContainer=document.querySelector(".msg-containers");
let msg=document.querySelector("#msg");
let turnO = true;
let arr = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6]
]
box1.forEach((box) =>{
    box.addEventListener("click" , () =>{
        if (turnO===true){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWin();
    })
})

const checkWin = () =>{
    for(let pattern of arr){
        let position1= box1[pattern[0]].innerText;
        let position2= box1[pattern[1]].innerText;
        let position3= box1[pattern[2]].innerText;

        if(position1 !="" && position2 !="" && position3 !=""){
            if(position1 === position2 && position2 === position3){
                showWinner(position1);
            }
        }
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulation Player '${winner}' ,You are the winner .`;
    msgContainer.classList.remove("hide");
    disabled();
}

const enabled = () => {
    for(box of box1){
        box.innerText = "";
        box.enabled = true;
    }
}

const disabled = () => {
    for(box of box1){
        box.disabled = true;
    }
}

const resetButton = () => {
    let turnO = true;
    enabled();
    msgContainer.classList.add("hide");
}

newGameButton.addEventListener("click",resetButton);
res.addEventListener("click",resetButton)
