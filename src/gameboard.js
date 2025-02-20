const Ship = require('./ship');

class Gameboard {

    // '' - empty spot
    // 'S' - ship
    // '*' - missed hit
    // 'X' - ship was hit

    constructor() {
        this.board = [['', '', '', '', '', '', '', '', '', ''],
                      ['', '', '', '', '', '', '', '', '', ''],
                      ['', '', '', '', '', '', '', '', '', ''],
                      ['', '', '', '', '', '', '', '', '', ''],
                      ['', '', '', '', '', '', '', '', '', ''],
                      ['', '', '', '', '', '', '', '', '', ''],
                      ['', '', '', '', '', '', '', '', '', ''],
                      ['', '', '', '', '', '', '', '', '', ''],
                      ['', '', '', '', '', '', '', '', '', ''],
                      ['', '', '', '', '', '', '', '', '', '']];

        this.fleet = [{name: 'Carrier', 
                       ship: new Ship(5),
                       isVertical: false,
                       x: -1,
                       y: -1},

                      {name: 'Battleship',
                       ship: new Ship(4),
                       isVertical: false,
                       x: -1,
                       y: -1},

                      {name: 'Cruiser',
                       ship: new Ship(3),
                       isVertical: false,
                       x: -1,
                       y: -1},

                      {name: 'Submarine',
                       ship: new Ship(3),
                       isVertical: false,
                       x: -1,
                       y: -1},

                      {name: 'Destroyer',
                       ship: new Ship(2),
                       isVertical: false,
                       x: -1,
                       y: -1}]
    }

    isAllShipSunk() {
        return this.fleet.every(el => el.ship.sunk)
    }

    receiveAttack(x, y) {
        if (this.isAttackPossible(x, y)){
            if (this.board[y][x] === 'S'){
                this.board[y][x] = 'X';
                this.fleet[this.findShip(x, y)].ship.hit();
            }else {
                this.board[y][x] = '*';

            }
        }
        
    }

    placeShip(indxOfFleet, x, y) {
        if (this.isValidLocation(indxOfFleet, x, y)){
            if (!this.fleet[indxOfFleet].isVertical){
                for (let iter = x; iter < x + this.fleet[indxOfFleet].ship.length; iter++){
                    this.board[y][iter] = 'S';
                };
            } else{
                for (let iter = y; iter < y + this.fleet[indxOfFleet].ship.length; iter++){
                    this.board[iter][x] = 'S';
                }   
            };
            this.fleet[indxOfFleet].x = x;
            this.fleet[indxOfFleet].y = y;
        }
    }

    isValidLocation(indxOfFleet, x, y) {
        if (this.fleet[indxOfFleet].isVertical){

            if (y + this.fleet[indxOfFleet].ship.length > this.board.length) return false

            for (let iter = y; iter < y + this.fleet[indxOfFleet].ship.length; iter++){
                if (this.board[iter][x] !== '') return false
                if (x > 0 && this.board[iter][x - 1] !== '') return false
                if (x < 9 && this.board[iter][x + 1] !== '') return false
            };
            
            if (y > 0 && this.board[y - 1][x] !== '') return false
            if (y > 0 && x > 0 && this.board[y - 1][x - 1] !== '') return false
            if (y > 0 && x < 9 && this.board[y - 1][x + 1] !== '') return false

            if (y + this.fleet[indxOfFleet].ship.length <= 9 && this.board[y + this.fleet[indxOfFleet].ship.length][x] !== '') return false
            if (y + this.fleet[indxOfFleet].ship.length <= 9 && x > 0 && this.board[y + this.fleet[indxOfFleet].ship.length][x - 1] !== '') return false
            if (y + this.fleet[indxOfFleet].ship.length <= 9 && x < 9 && this.board[y + this.fleet[indxOfFleet].ship.length][x + 1] !== '') return false


        } else{
            if (x + this.fleet[indxOfFleet].ship.length > this.board[0].length) return false
            
            for (let iter = x; iter < x + this.fleet[indxOfFleet].ship.length; iter++){
                if (this.board[y][iter] !== '') return false
                if (y > 0 && this.board[y - 1][iter] !== '') return false
                if (y < 9 && this.board[y + 1][iter] !== '') return false
            };
            

            if (x > 0 && this.board[y][x - 1] !== '') return false
            if (x > 0 && y > 0 && this.board[y - 1][x - 1] !== '') return false
            if (x > 0 && y < 9 && this.board[y + 1][x - 1] !== '') return false

            if (x + this.fleet[indxOfFleet].ship.length <= 9 && this.board[y][x + this.fleet[indxOfFleet].ship.length] !== '') return false
            if (x + this.fleet[indxOfFleet].ship.length <= 9 && y > 0 && this.board[y - 1][x + this.fleet[indxOfFleet].ship.length] !== '') return false
            if (x + this.fleet[indxOfFleet].ship.length <= 9 && y < 9 && this.board[y + 1][x + this.fleet[indxOfFleet].ship.length] !== '') return false
        };
        return true
    }

    findShip(x, y) {
        for (let indxOfFleet in this.fleet) {
            if (this.fleet[indxOfFleet].isVertical) {
                if (this.fleet[indxOfFleet].y <= y < this.fleet[indxOfFleet].y + this.fleet[indxOfFleet].ship.length 
                    && this.fleet[indxOfFleet].x === x)
                    return indxOfFleet
            }else {
                if (this.fleet[indxOfFleet].x <= x < this.fleet[indxOfFleet].x + this.fleet[indxOfFleet].ship.length 
                    && this.fleet[indxOfFleet].y === y)
                    return indxOfFleet
            }
        }
    }

    isAttackPossible(x, y) {
        return this.board[y][x] === 'S' || this.board[y][x] === ''
    }
}

module.exports = Gameboard;