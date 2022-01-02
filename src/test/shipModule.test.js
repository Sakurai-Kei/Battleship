/* eslint-disable no-undef */
import { Ships, shipTypes } from "../shipModule";

test("A player guesses his opponent ship correctly", () => {
  const shipA = new Ships(shipTypes.carrier, [1, 2, 3, 4, 5]);
  shipA.hit(1);

  expect(shipA.hitLocation).toEqual([1]);
});

test("A player guesses his opponent ship correctly 2nd time", () => {
  const shipA = new Ships(shipTypes.carrier, [1, 2, 3, 4, 5]);
  shipA.hitLocation = [1];
  shipA.hit(2);

  expect(shipA.hitLocation).toEqual([1, 2]);
});

test("A ship has not sunk", () => {
  const shipA = new Ships(shipTypes.carrier, [1, 2, 3, 4, 5]);
  shipA.hitLocation = [1, 2, 3];

  expect(shipA.isSunk()).toBe(false);
});

test("A ship has sunk", () => {
  const shipA = new Ships(shipTypes.carrier, [1, 2, 3, 4, 5]);
  shipA.hitLocation = [1, 2, 3, 4, 5];

  expect(shipA.isSunk()).toBe(true);
});
