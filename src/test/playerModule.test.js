/* eslint-disable no-undef */
import { Player } from "../playerModule";
import { Ships, shipTypes } from "../shipModule";

test("Instantiate a player object named Sakurai", () => {
  const playerA = new Player("Sakurai");
  expect(playerA.name).toBe("Sakurai");
});

test("Add a ship into the player object named Sakurai", () => {
  const playerA = new Player("Sakurai");
  const shipA = new Ships(shipTypes.carrier, [1, 2, 3, 4, 5]);
  playerA.addShip(shipA);
  expect(playerA.ships).toEqual([shipA]);
});

test("Add multiple ships into the player object named Sakurai", () => {
  const playerA = new Player("Sakurai");
  const shipA = new Ships(shipTypes.carrier, [1, 2, 3, 4, 5]);
  const shipB = new Ships(shipTypes.destroyer, [6, 7, 8, 9]);
  playerA.addShip(shipA);
  playerA.addShip(shipB);
  expect(playerA.ships).toEqual([shipA, shipB]);
});
