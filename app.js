(function () {

    const gameBoard = (() => {
        const board = ['', '', '', '', '', '', '', '', ''];
        return {
            board
        }
    })();
    //player factories
    const player = (name, symbol) => {
        return {
            name,
            symbol
        }
    }

    const {
        board
    } = gameBoard;
    let symbol = '';
    let winningPlayer = '';



    const player1 = player('Player with 0', '0');
    const player2 = player('Player with X', 'X');

    const selectBox = document.querySelector(".select-box"),
        selectBtnX = selectBox.querySelector(".options .begin"),
        winner = document.querySelector(".won-text"),
        playBoard = document.querySelector(".play-board"),
        playArea = document.querySelector(".play-area"),
        cells = document.querySelectorAll("section .cell");
        resultBox = document.querySelector(".result-box"),
        replayBtn = resultBox.querySelector("button");



    window.onload = () => { //once window loaded
        for (let i = 0; i < cells.length; i++) {
            cells[i].addEventListener("click", function (e) {
                console.log("start symbol:", symbol);
                const targetArrayIndex = board[`${e.target.id}`];
                console.log(e.target);
                
                if (symbol === '') {
                    symbol = player1.symbol;
                    console.log(symbol);

                    if (targetArrayIndex === '') {
                        board.splice(`${e.target.id}`, 1, symbol)
                    };
                    console.log(board);
                } else if (symbol === player1.symbol) {
                    symbol = player2.symbol;
                    console.log(symbol);
                    winningPlayer = player2.name;
                    if (targetArrayIndex === '') {
                        board.splice(`${e.target.id}`, 1, symbol)
                    };
                    console.log(board);
                } else if (symbol === player2.symbol) {
                    symbol = player1.symbol;
                    console.log(symbol);
                    winningPlayer = player1.name;
                    if (targetArrayIndex === '') {
                        board.splice(`${e.target.id}`, 1, symbol)
                    };
                    console.log(board);
                }
                renderMoves();
                playerHasWon();
            })

        }
    }

    function cellDisabled() {
        playArea.classList.add('cellDisabled');
        resultBox.classList.add('show');
    }


    const playerHasWon = () => {

        if (board[0] === board[1] && board[1] === board[2] && board[0] !== '') {
            cellDisabled();
            replay();
            winner.textContent = `${winningPlayer} Wins!`;
            symbol = '';
            return;
        }
        if (board[3] === board[4] && board[4] === board[5] && board[3] !== '') {
            cellDisabled();
            replay();
            winner.textContent = `${winningPlayer} Wins!`;
            symbol = '';
            return;
        }
        if (board[6] === board[7] && board[7] === board[8] && board[6] !== '') {
            cellDisabled();
            replay();
            winner.textContent = `${winningPlayer} Wins!`;
            symbol = '';
            return;
        }
        if (board[0] === board[3] && board[3] === board[6] && board[0] !== '') {
            cellDisabled();
            replay();
            winner.textContent = `${winningPlayer} Wins!`;
            symbol = '';
            return;
        }
        if (board[1] === board[4] && board[4] === board[7] && board[1] !== '') {
            cellDisabled();
            replay();
            winner.textContent = `${winningPlayer} Wins!`;
            symbol = '';
            return;
        }
        if (board[2] === board[5] && board[5] === board[8] && board[2] !== '') {
            cellDisabled();
            replay();
            winner.textContent = `${winningPlayer} Wins!`;
            symbol = '';
            return;
        }
        if (board[0] === board[4] && board[4] === board[8] && board[0] !== '') {
            cellDisabled();
            replay();
            winner.textContent = `${winningPlayer} Wins!`;
            symbol = '';
            return;
        }
        if (board[2] === board[4] && board[4] === board[6] && board[2] !== '') {
            cellDisabled();
            replay();
            winner.textContent = `${winningPlayer} Wins!`;
            symbol = '';
            return;
        }
        if (board[0] !== '' && board[1] !== '' && board[2] !== '' && board[3] !== '' && board[4] !== '' &&
            board[5] !== '' && board[6] !== '' && board[7] !== '' && board[8] !== '') {
            winner.textContent = "DRAW!"
            replay();
            cellDisabled();
        }

    }

    selectBtnX.onclick = () => {
        selectBox.classList.add("hide"); //hide select box
        playBoard.classList.add("show"); //show the playboard section
    }

    function renderMoves() {
        for (let i = 0; i < cells.length; i++) {
            const targetBox = document.getElementById(`${i}`);
            targetBox.textContent = board[i];
        }
    }

    function replay() {
        replayBtn.addEventListener('click', function () {
            location.reload();
        })
    }
})();