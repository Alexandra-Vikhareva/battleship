const Gameboard = require('./gameboard');

test('функция попытки выстрела', () => {
    let b = new Gameboard;
    b.receiveAttack(4, 5);
    expect(b.board).toStrictEqual([['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '*', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '']]);
});

test('функция isAllSunk 1', () => {
    let b = new Gameboard;
    b.fleet[4].ship.hit().hit();
    expect(b.isAllShipSunk()).toBe(false);
});

test('функция isAllSunk 2', () => {
    let b = new Gameboard;
    b.fleet[0].ship.hit().hit().hit().hit().hit();
    b.fleet[1].ship.hit().hit().hit().hit();
    b.fleet[2].ship.hit().hit().hit();
    b.fleet[3].ship.hit().hit().hit();
    b.fleet[4].ship.hit().hit();
    expect(b.isAllShipSunk()).toBe(true);
});

test('Расположить корабль горизонтально', () => {
    let b = new Gameboard;
    b.placeShip(0, 0, 0);
    expect(b.board).toStrictEqual([['S', 'S', 'S', 'S', 'S', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '']]);
    expect(b.fleet[0].x).toBe(0);
    expect(b.fleet[0].y).toBe(0);
});

test('Расположить корабль вертикально', () => {
    let b = new Gameboard;
    b.fleet[0].isVertical = true;
    b.placeShip(0, 0, 0);
    expect(b.board).toStrictEqual([['S', '', '', '', '', '', '', '', '', ''],
        ['S', '', '', '', '', '', '', '', '', ''],
        ['S', '', '', '', '', '', '', '', '', ''],
        ['S', '', '', '', '', '', '', '', '', ''],
        ['S', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '']]);
    expect(b.fleet[0].x).toBe(0);
    expect(b.fleet[0].y).toBe(0);
})

test('Проверка допустимости расположения кораблей 1', () => {
    let b = new Gameboard;
    b.fleet[0].isVertical = true;
    b.placeShip(0, 0, 0);
    b.placeShip(1, 0, 0);
    expect(b.board).toStrictEqual([['S', '', '', '', '', '', '', '', '', ''],
        ['S', '', '', '', '', '', '', '', '', ''],
        ['S', '', '', '', '', '', '', '', '', ''],
        ['S', '', '', '', '', '', '', '', '', ''],
        ['S', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '']]);
});

test('Проверка допустимости расположения кораблей 2', () => {
    let b = new Gameboard;
    b.fleet[0].isVertical = true;
    b.placeShip(0, 5, 5);
    b.placeShip(1, 10, 0);
    expect(b.board).toStrictEqual([['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', 'S', '', '', '', ''],
        ['', '', '', '', '', 'S', '', '', '', ''],
        ['', '', '', '', '', 'S', '', '', '', ''],
        ['', '', '', '', '', 'S', '', '', '', ''],
        ['', '', '', '', '', 'S', '', '', '', '']]);
});

test('Попадание по кораблю', () => {
    let b = new Gameboard;
    b.fleet[0].isVertical = true;
    b.placeShip(0, 0, 0);
    b.receiveAttack(0, 0);
    expect(b.fleet[0].ship.countHit).toBe(1);
    expect(b.board).toStrictEqual([['X', '', '', '', '', '', '', '', '', ''],
        ['S', '', '', '', '', '', '', '', '', ''],
        ['S', '', '', '', '', '', '', '', '', ''],
        ['S', '', '', '', '', '', '', '', '', ''],
        ['S', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '']]);
})
