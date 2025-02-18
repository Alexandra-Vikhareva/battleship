const Ship = require('./ship');

test('функция попадания 1', () => {
    let ship = new Ship(3);
    ship.hit();
    expect(ship['countHit']).toBe(1);
});

test('функция попадания 2', () => {
    let ship = new Ship(3);
    ship.hit().hit().hit();
    expect(ship['countHit']).toBe(3);
});

test('функция попадания 3', () => {
    let ship = new Ship(3);
    ship.hit().hit().hit().hit();
    expect(ship['countHit']).toBe(3);
});

test('функция потопления 1', () => {
    let ship = new Ship(3);
    ship.hit();
    expect(ship['sunk']).toBe(false);
});

test('функция потопления 2', () => {
    let ship = new Ship(3);
    ship.hit().hit().hit()
    expect(ship['sunk']).toBe(true);
});