let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset_btn");
let newGameBtn = document.querySelector("#new_btn");
let msgContainer = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");
let turn0 = true;
let drawCondition = 0;


const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
// Function to reset the game
const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        console.log("btn is clicked");
        if(turn0){
            box.innerText = "o";
            box.style.backgroundColor = "#BE95C4";
            box.style.color = "#fff";
            turn0 = false;
            drawCondition += 1;
        }
        else{
            box.innerText = "x";
            box.style.backgroundColor = "#7F6DA7";
            box.style.color = "#fff";
            turn0 = true;
            drawCondition += 1;
        }
        box.disabled=true;
        checkWinner();
    });
});

const disableBoxes= () =>{
    for(let box of boxes){
        box.disabled = true;
    }
    drawCondition = 0;
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        box.style.backgroundColor = "";
    }
    drawCondition = 0;

}

const showWinner = (Winner) => {
    
    msg.innerText = `WINNER IS : Player ${Winner}` ;
    console.log(`Winner is : ${Winner}`);
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () =>{
    for(let pattern of winPatterns){
        if(drawCondition == 9){
            msg.innerText = "Game is draw ";
            // console.log(Winner is : ${Winner});
            msgContainer.classList.remove("hide");
            disableBoxes();
            drawCondition = 0;
        }
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
                // console.log("WINNER " , pos1Val);
                showWinner(pos1Val);
            }
        }
    }
   
}

newGameBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);