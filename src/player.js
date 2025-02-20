const Gameboard = require('./gameboard');

class Player {
    constructor(name, isPc = false) {
        this.name = name;
        this.isPc = isPc;
        this.gameboard = new Gameboard();
    }

    #randomInt(maxnum){
        return Math.floor(Math.random() * maxnum)
    }

    makeMoveRandom() {
        while (true){
            const x = this.#randomInt(10);
            const y = this.#randomInt(10);
            if (this.gameboard.isAttackPossible(x, y)){
                this.gameboard.receiveAttack(x, y)
                return y * 10 + x
            }
        }
    }

    placeFleetRandom() {
        for (let indxOfShip = 0; indxOfShip < this.gameboard.fleet.length; indxOfShip++) {
            let ship =  this.gameboard.fleet[indxOfShip];
            ship.isVertical = Boolean(this.#randomInt(2));
            if (ship.isVertical) {
                while (true){
                    let x = this.#randomInt(10);
                    let y = this.#randomInt(10 - ship.ship.length + 1);
                    if (this.gameboard.isValidLocation(indxOfShip, x, y)) {
                        this.gameboard.placeShip(indxOfShip, x, y);
                        break
                    }
                }
                
            } else {
                while(true){
                    let y = this.#randomInt(10);
                    let x = this.#randomInt(10 - ship.ship.length + 1);
                    if (this.gameboard.isValidLocation(indxOfShip,x, y)) {
                        this.gameboard.placeShip(indxOfShip, x, y);
                        break
                    }
                }
            }
        }
    }
}

module.exports = Player