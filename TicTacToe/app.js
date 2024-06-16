let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newgamebtn=document.querySelector("#new");
let msg1=document.querySelector(".msg");
let message=document.querySelector("#message");

let turnO=true;
const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
];
const resetgame=()=>{
    turnO=true;
    enable();
    msg1.classList.add("hide");
};
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
         console.log("box was clicked");
         if(turnO)
{
         box.innerText="O";
         turnO=false;
            }
            else{
                box.innerText="X";
                turnO=true;
            }box.disabled = true;
            checkwinner();

    });
});
const disable=()=>{
    for(let box of boxes)
        {
            box.disabled =true;
        }
};
const enable=()=>{
    for(let box of boxes)
        {
            box.disabled =false;
            box.innerText="";
        }
};
const showwinner=(winner)=>{
    message.innerText=`Congratulations,Winner is ${winner}`;
    msg1.classList.remove("hide");
    disable();
};

const checkwinner = ()=>{
      for(let pattern of win)
        {
            let pos1=boxes[pattern[0]].innerText;
            let pos2=boxes[pattern[1]].innerText;
            let pos3=boxes[pattern[2]].innerText;
            if(pos1!="" && pos2!="" && pos3!="")
                {
                    if(pos1==pos2 && pos2==pos3)
                        {
                            console.log("Winner",pos1);
                            showwinner(pos1);
                        }
                }
        }
};


newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);