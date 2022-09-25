const gridSize=3;
let gridVlaues=[[0,0,0],[0,0,0],[0,0,0]];
const PLAYER_1_VALUE=1;
const PLAYER_2_VALUE=2;
const EMPTY_CELL_VALUE=0;
let isPlaying=false;
let activePLayer=1;
const reset=()=>{
    gridVlaues=[[0,0,0],[0,0,0],[0,0,0]];
    isPlaying=false;
    activePLayer=1;
    grid.style.display='none';
    document.getElementById('info-form').style.display='block';

}
const grid=document.getElementsByClassName('grid')[0];
const getFirstPlayerName=()=>{
    return document.getElementById('player1_name').value;
}
const getSecondPlayerName=()=>{
    return document.getElementById('player2_name').value;
}
const switchPlayer=()=>{
    activePLayer=activePLayer===PLAYER_1_VALUE?PLAYER_2_VALUE:PLAYER_1_VALUE;
}
const showActivePlayerName=()=>{
    document.getElementById('bottom-msg').innerText=''+(activePLayer==PLAYER_1_VALUE?getFirstPlayerName():getSecondPlayerName())+' is playing';
}
const isWin=()=>{
    //return false;
    for(let i=0;i<gridSize;i++){
        let str=gridVlaues[i].join('');
        if(str=='111' || str=='222')
            return true;
         }
        if(
            (gridVlaues[0][0]==gridVlaues[1][0] && gridVlaues[1][0]==gridVlaues[2][0] && gridVlaues[2][0]!=EMPTY_CELL_VALUE )
            || (gridVlaues[0][1]==gridVlaues[1][1]&& gridVlaues[1][1]==gridVlaues[2][1] &&gridVlaues[2][1]!=EMPTY_CELL_VALUE )
            || (gridVlaues[2][2]==gridVlaues[2][2]&& gridVlaues[2][2]==gridVlaues[2][2] && gridVlaues[2][2] &&gridVlaues[2][2]!=EMPTY_CELL_VALUE )
        )
            return true;
        if( (gridVlaues[0][0]==gridVlaues[1][1] &&gridVlaues[1][1] ==gridVlaues[2][2] && gridVlaues[2][2]!=EMPTY_CELL_VALUE)
            || (gridVlaues[2][2]==gridVlaues[1][1] &&gridVlaues[1][1] ==gridVlaues[0][2] && gridVlaues[0][2]!=EMPTY_CELL_VALUE)
        )
        return true;

            return false;
    }


const announceWinner=()=>{
    console.log("the winner is "+activePLayer==PLAYER_1_VALUE?getFirstPlayerName():getSecondPlayerName())
    document.getElementById('bottom-msg').innerText='The winner is '+(activePLayer==PLAYER_1_VALUE?getFirstPlayerName():getSecondPlayerName());
}
const colorCell=(cell)=>{
    cell.innerText=activePLayer==PLAYER_1_VALUE?'X':'O';
}
document.querySelectorAll('.cell-content');
document.querySelectorAll('.cell-content').forEach(el=>el.addEventListener('click',(e)=>{
    console.log('row:'+e.target.dataset.row+' col:'+e.target.dataset.col);
    if(isPlaying) {
        gridVlaues[e.target.dataset.row - 1][e.target.dataset.col - 1] = activePLayer;
        colorCell(e.target);
        if (!isWin()) {
            console.log('switch player')
            console.log(e.target)
            switchPlayer();
            showActivePlayerName();
        } else {
            document.getElementById('bottom-msg').innerText='';
            isPlaying=false;
            announceWinner();
        }
    }
}));
document.getElementById('start-btn').addEventListener('click',()=>{
    document.getElementById('info-form').style.display='none';
    isPlaying=true;
    showActivePlayerName();
    grid.style.display='block';
})
document.getElementById('reset-btn').addEventListener('click',reset)

grid.style.display='none';


