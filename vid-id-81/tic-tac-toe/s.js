const board = document.querySelector(".board")
let total_turn =0;
let winner_found = false;
let turn = 'X'

// win condition

let win_condition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

// fill board with E = Empty (initially)

let board_array = new Array(9).fill("E")

// function for win winner


function check_winner(){
    for(let arr of win_condition){
       

        if(board_array[arr[0]]===board_array[arr[1]] && board_array[arr[1]]===board_array[arr[2]] && board_array[arr[0]]!=="E"){
            document.querySelector(".result").innerHTML=`${board_array[arr[0]]} is winner`
            return 1;
        }
    }
    return 0;
    
}



const printer = (event)=>{

    const box = event.target;


    // check if box  is empty or not 
    
    if(board_array[box.id]==="E"){
        total_turn++;
        if(turn === 'O'){
        box.innerHTML = 'O';
        board_array[box.id]='O'
        if(check_winner()){
            winner_found=true;
            board.removeEventListener('click',printer)
        }
        turn = "X"
    }
        else{
            box.innerHTML='X'
            board_array[box.id]='X'
            if(check_winner()){
                winner_found=true
            board.removeEventListener('click',printer)
            }
            turn = "O"
        }    
    }
    if(total_turn===9 && winner_found==false){
        document.querySelector(".result").innerHTML="DRAW";
    }
    
}

board.addEventListener("click",printer)

let btn = document.querySelector("button");
btn.addEventListener("click",(event)=>{
    const box = document.querySelectorAll(".box")
    Array.from(box).forEach((value)=>{
        value.innerHTML=""
    })
    turn="X";
    total_turn=0
    winner_found=false;
    board_array= new Array(9).fill("E")
    board.addEventListener("click",printer)
    document.querySelector(".result").innerHTML=""
})





