const dx = [0, -1, 0, 1];
const dy = [1, 0, -1, 0];

const board = [];
for (let i = 0; i < 4; i++){
    const row = [1,1,1,1];
    board.push(row);
}
board[0][0] = 0;
const hiddenPuzzle = document.getElementById('puzzle00')
hiddenPuzzle.classList.add('hidden');

const boardSetting = () => {
    for (let i = 0; i < 4; i++){
        for (let j = 0; j < 4; j++){
            const piece = document.getElementById(`puzzle${i}${j}`);
            piece.classList.add(`pos${i}${j}`);
            piece.addEventListener('click', clickPuzzle);

            piece.style.backgroundImage = 'url("src/img/awesome.jpg")';
            piece.style.backgroundSize = '40vh 40vh';
            piece.style.backgroundPosition = `${(4-j)*10}vh ${(4-i)*10}vh`;
        }
    }

    shuffle();
};

const clickPuzzle = (event) => {
    const target = event.target;
    const cx = parseInt(target.classList[1][3]);
    const cy = parseInt(target.classList[1][4]);
    
    for (let i=0; i<4; i++){
        const nx = cx + dx[i];
        const ny = cy + dy[i];
        if ((nx>=0 && nx<4) && (ny>=0 && ny<4) && board[nx][ny] === 0){
            board[nx][ny] = 1;
            board[cx][cy] = 0;
            target.classList.remove(`pos${cx}${cy}`);
            target.classList.add(`pos${nx}${ny}`);

            hiddenPuzzle.classList.remove(`pos${nx}${ny}`);
            hiddenPuzzle.classList.add(`pos${cx}${cy}`);
            return;
        }
    }
    
}

const shuffle = () => {
    // 빈칸인 퍼즐의 상하좌우 중에서 랜덤으로 선택 (범위 안에서)
    // 서로 위치 교환
    // 이걸 랜덤한 횟수 반복
    let hiddenPuzzleX = 0;
    let hiddenPuzzleY = 0;
    const shuffleCount = Math.floor(Math.random() * 1000) + 1000;
    let count = 0;
    const puzzleShuffle = setInterval(()=>{
        while (true) {
            const selectDirection = Math.floor(Math.random() *  4);
            const nx = hiddenPuzzleX + dx[selectDirection];
            const ny = hiddenPuzzleY + dy[selectDirection];

            if ((nx>=0 && nx<4) && (ny>=0 && ny<4)){
                const target = document.querySelector(`.pos${nx}${ny}`);

                board[nx][ny] = 0;
                board[hiddenPuzzleX][hiddenPuzzleY] = 1;
                target.classList.remove(`pos${nx}${ny}`);
                target.classList.add(`pos${hiddenPuzzleX}${hiddenPuzzleY}`);

                hiddenPuzzle.classList.remove(`pos${hiddenPuzzleX}${hiddenPuzzleY}`);
                hiddenPuzzle.classList.add(`pos${nx}${ny}`);

                hiddenPuzzleX = nx;
                hiddenPuzzleY = ny;
                break;
            }
        }
        count += 1;
        if (count === shuffleCount){
            clearInterval(puzzleShuffle);
        }
    }, 1);
}

boardSetting();