import { Ships } from "./shipModule";

const Coordinate = (() => {
  const chosenCoordinate = [];

  function getChosenCoordinate() {
    return chosenCoordinate;
  }

  function pushToChosenCoordinate(coordinate) {
    return chosenCoordinate.push(coordinate);
  }

  return {
    getChosenCoordinate,
    pushToChosenCoordinate,
  };
})();

function placeShips(type, coordinate) {
  return new Ships(type, coordinate);
}

function receiveAttack(coordinate, shipPositions) {
  return shipPositions.includes(coordinate);
}

function allShipsSunk(shipsArray) {
  return shipsArray.every((ships) => ships.isSunk());
}

export { placeShips, receiveAttack, allShipsSunk, Coordinate };
