const shipTypes = {
  carrier: {
    class: "Carrier",
    size: 5,
  },
  battleship: {
    class: "Battleship",
    size: 4,
  },
  destroyer: {
    class: "Destroyer",
    size: 3,
  },
  submarine: {
    class: "Submarine",
    size: 3,
  },
  patrolBoat: {
    class: "Patrol Boat",
    size: 2,
  },
};

class Ships {
  constructor(type, position) {
    this.type = type;
    this.position = position;
    this.hitLocation = [];
  }

  hit(coordinate) {
    return this.hitLocation.push(coordinate);
  }

  isSunk() {
    return this.hitLocation.length === this.position.length;
  }
}

export { Ships, shipTypes };
