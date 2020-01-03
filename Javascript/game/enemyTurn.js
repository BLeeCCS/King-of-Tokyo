import { renderTurnMonster } from "./renderTurnMonster.js";

export function enemy(monstersArray,next) {
    renderTurnMonster(next);
    monstersArray[next].rollDice();
}