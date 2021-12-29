const board = [];
for (let i = 0; i < 5; i++){
    const row = [1,1,1,1,1];
    board.push(row);
}
board[0][0] = 0;
document.getElementById("puzzle1").style.visibility = "hidden";

const boardSetting = () => {
    let x = 0;
    let y = 0;
    
    for (let i = 0; i < 25; i++){
        const puzzle = document.getElementById(`puzzle${i+1}`);
        puzzle.addEventListener("click",clickPuzzle);
        puzzle.style.left = `${x}%`;
        puzzle.style.top = `${y}%`;

        x += 20;

        if (x===100){
            x = 0;
            y += 20;
        }
    }
};

const clickPuzzle = (event) => {
    console.log(event.target.id);

}

boardSetting();