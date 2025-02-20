import "./style.css";
const Player = require('./player');

function drawBoard(){
    const content = document.querySelector('.content');

    const board = document.createElement('div');
    board.className = 'board';

    for (let y = 0; y < 10; y++){
        for (let x = 0; x < 10; x++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            board.append(cell);
        }
    }

    content.append(board);
}

function fillBoard(board, boardInfo) {
    const cells = board.childNodes;
    for (let y = 0; y < 10; y++){
        for (let x = 0; x < 10; x++){
            if (boardInfo[y][x] === 'S') cells[y * 10 + x].classList.add('ship')
        }
    }
}

function drawForm(){
    const content = document.querySelector('.content');
    const form = document.createElement('form');
    const name = document.createElement('input');
    const nameLabel = document.createElement('label');
    const button = document.createElement('button');

    name.name = 'playerName';
    name.id = 'playerName';
    name.placeholder = `Player Name`;

    nameLabel.for = 'playerName';
    nameLabel.textContent = 'Enter your name: ';

    button.type = 'button';
    button.textContent = 'Start Game';

    form.append(nameLabel, name, button);
    content.appendChild(form);

    button.addEventListener('click', () => {
        const player = new Player(name.value);
        clearContent();
        placeFleet(player);
    })
}

function placeFleet(player) {
    drawBoard();
    const board = document.querySelector('.board');
    const cells = document.querySelectorAll('.cell');
    const button = document.createElement('button');
    const content = document.querySelector('.content');

    button.type = 'button';
    button.textContent = 'Rotate';
    content.append(button);

    let indxShip = 0;
    let ship = player.gameboard.fleet[indxShip];
    
    
    button.addEventListener('click', () => {ship.isVertical = !ship.isVertical})
    
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', (e) => {
            let indx = [...cells].indexOf(e.target);
            let x = indx % 10;
            let y = (indx - indx % 10) / 10;
            
            if (ship.isVertical){
                if (player.gameboard.isValidLocation(indxShip, x, y)){
                    for (let i = 0; i < ship.ship.length; i++) {
                        cells[indx + i * 10].classList.add('avaliable');
                    }
                }

                else {
                    for (let i = 0; i < ship.ship.length; i++) {
                        if ((indx + i * 10 ) > 99) break
                        cells[indx + i * 10].classList.add('not-avaliable');
                    }
                }
            }
            
            else{
                if (player.gameboard.isValidLocation(indxShip, x, y)){
                    for (let i = 0; i < ship.ship.length; i++) {
                        cells[indx + i].classList.add('avaliable');
                    }
                }
                
                else {
                    for (let i = 0; i < ship.ship.length; i++) {
                        if (indx + i > y * 10 + 9) break;
                        cells[indx + i].classList.add('not-avaliable');
                    }
                }
            }
        })
    });

    cells.forEach((cell) => {
        cell.addEventListener('mouseout', (e) => {
        
            let indx = [...cells].indexOf(e.target);
            let x = indx % 10;
            let y = (indx - indx % 10) / 10;
            
            if (ship.isVertical) {
                if (player.gameboard.isValidLocation(indxShip, x, y)){
                    for (let i = 0; i < ship.ship.length; i++) {
                        cells[indx + i * 10].classList.remove('avaliable');
                    }
                }

                else {
                    for (let i = 0; i < 10 - y; i++) {
                        cells[indx + i * 10].classList.remove('not-avaliable');
                    }
                } 
            }

            else {
                if (player.gameboard.isValidLocation(indxShip, x, y)){
                    for (let i = 0; i < ship.ship.length; i++) {
                        cells[indx + i].classList.remove('avaliable');
                    }
                } 

                else {
                    for (let i = 0; i < 10 - x; i++) {
                        cells[indx + i].classList.remove('not-avaliable');
                    }
                } 
            }
        })
    });

    cells.forEach((cell) => {
        cell.addEventListener('click', (e) => {
            let indx = [...cells].indexOf(e.target);
            let x = indx % 10;
            let y = (indx - indx % 10) / 10;
            if (ship.isVertical) {
                if (player.gameboard.isValidLocation(indxShip, x, y)){
                    for (let i = 0; i < ship.ship.length; i++) {
                        cells[indx + i * 10].classList.add('ship');
                    };
                    player.gameboard.placeShip(indxShip, x, y);
                    indxShip += 1;
                    if (indxShip === 5) {
                        clearContent();
                        const PC = new Player('computer', true);
                        PC.placeFleetRandom();
                        startGame(player, PC);
                    }
                    ship = player.gameboard.fleet[indxShip];
                }
            }

            else {
                if (player.gameboard.isValidLocation(indxShip, x, y)){
                    for (let i = 0; i < ship.ship.length; i++) {
                        cells[indx + i].classList.add('ship');
                    };
                    player.gameboard.placeShip(indxShip, x, y);
                    indxShip += 1;
                    if (indxShip === 5) {
                        clearContent();
                        const PC = new Player('computer', true);
                        PC.placeFleetRandom();
                        startGame(player, PC);
                    }
                    ship = player.gameboard.fleet[indxShip];
                }
            }
        })
    })
}

function winOrLoose(str) {
    const div = document.createElement('div');
    const playAgain = document.createElement('button');
    const h1 = document.createElement('h1');
    const content = document.querySelector('.content');

    playAgain.textContent = 'Play Again';
    playAgain.type = 'button';

    h1.textContent = str;

    div.append(h1, playAgain);
    content.append(div);
    div.classList.add('info');

    const body = document.querySelector('body');
    body.addEventListener('click', (e) => {
        if (e.target === playAgain) {
            clearContent();
            drawForm();
        }
    })

}

function clearContent() {
    const content = document.querySelector('.content');
    while (content.firstChild) {
        content.removeChild(content.firstChild)
    }
}

function startGame(player, PC) {
    drawBoard();
    drawBoard();

    const boards = document.querySelectorAll('.board');
    const cells = boards[1].childNodes;
    const cellsPC = boards[0].childNodes;

    fillBoard(boards[0], player.gameboard.board);
    boards[1].classList.add('enemyBoard');

    cells.forEach((cell) => {
        cell.addEventListener('click', (e) => {
            if (!PC.gameboard.isAllShipSunk() 
                && !player.gameboard.isAllShipSunk() 
                && !e.target.classList.contains('stricken')
                && !e.target.classList.contains('miss')) {

                const indx = [...cells].indexOf(e.target);
                const x = indx % 10;
                const y = (indx - indx % 10) / 10;

                if (PC.gameboard.isAttackPossible(x, y)) {
                    PC.gameboard.receiveAttack(x, y);
                    PC.gameboard.board[y][x] === 'X'
                        ? e.target.classList.add('stricken')
                        : e.target.classList.add('miss')
                }

                if (PC.gameboard.isAllShipSunk()) {
                    winOrLoose(`You're win!`)
                }

                const indxPC = player.makeMoveRandom();
                const xPC = indxPC % 10;
                const yPC = (indxPC - indxPC % 10) / 10;

                player.gameboard.board[yPC][xPC] === 'X'
                    ? cellsPC[indxPC].classList.add('stricken')
                    : cellsPC[indxPC].classList.add('miss');

                if (player.gameboard.isAllShipSunk()) {
                    winOrLoose(`You're loose!`)
                }
            }
        })
    })
}

drawForm()