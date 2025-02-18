class Ship {
    constructor(length) {
        this.length = length;
        this.countHit = 0;
        this.sunk = false;
    }

    hit() {
        if (!this.sunk){
            this.countHit += 1;
            this.isSunk();
        }
        return this
    }

    isSunk() {
        this.length <= this.countHit
        ? this.sunk = true
        : this.sunk = false
    }
}

module.exports = Ship;