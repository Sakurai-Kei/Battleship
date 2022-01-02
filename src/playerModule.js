class Player {
  constructor(name) {
    this.name = name;
    this.ships = [];
  }

  addShip(ship) {
    return this.ships.push(ship);
  }
}

export { Player };
