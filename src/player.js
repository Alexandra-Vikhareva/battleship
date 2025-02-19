const Gameboard = require('./gameboard');

class Player {
    constructor(name, isPc = false) {
        this.name = name;
        this.isPc = isPc;
        this.gameboard = new Gameboard();
    }
}

module.exports = Player