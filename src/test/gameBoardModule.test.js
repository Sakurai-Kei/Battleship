/* eslint-disable no-undef */
import { Ships, shipTypes } from "../shipModule";
import { placeShips, receiveAttack, allShipsSunk } from "../gameBoardModule";

test("Place ship in a position", () => {
  const shipA = placeShips(shipTypes.carrier, [1, 2, 3, 4, 5]);
  expect(shipA.position).toEqual([1, 2, 3, 4, 5]);
});

test("A player shoots at a location and hits the target.", () => {
  const shipA = placeShips(shipTypes.carrier, [1, 2, 3, 4, 5]);
  expect(receiveAttack(1, shipA.position)).toEqual(true);
});

test("A player shoots at a location and miss the target.", () => {
  const shipA = placeShips(shipTypes.carrier, [1, 2, 3, 4, 5]);
  expect(receiveAttack(6, shipA.position)).toEqual(false);
});

test("All ships have not sunk in one gameboard.", () => {
  const shipA = new Ships(shipTypes.carrier, [1, 2, 3, 4, 5]);
  const shipB = new Ships(shipTypes.carrier, [6, 7, 8, 9, 10]);

  shipA.hitLocation = [1, 2, 3, 4, 5];
  shipB.hitLocation = [6, 7, 8, 9];
  const shipsArray = [shipA, shipB];
  expect(allShipsSunk(shipsArray)).toEqual(false);
});

test("All ships have sunk in one gameboard.", () => {
  const shipA = new Ships(shipTypes.carrier, [1, 2, 3, 4, 5]);
  const shipB = new Ships(shipTypes.carrier, [6, 7, 8, 9, 10]);

  shipA.hitLocation = [1, 2, 3, 4, 5];
  shipB.hitLocation = [6, 7, 8, 9, 10];
  const shipsArray = [shipA, shipB];
  expect(allShipsSunk(shipsArray)).toEqual(true);
});
