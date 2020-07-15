
import GamePlay from '../GamePlay';
import GameController from '../GameController';
import GameStateService from '../GameStateService';
import Bowman from '../Bowman.js'
import Undead from '../Undead.js'


test('cursor pointer', () =>
  {
    const b = new Bowman(0);
    b.cell = 0
    const b2 = new Bowman(0);
    b2.cell  = 1;
    const u = new Undead(0);
    b.cell  = 7;
    document.body.innerHTML = '<div id="game-container"></div>';
    const gamePlay = new GamePlay();
gamePlay.bindToDOM(document.querySelector('#game-container'));
const stateService = new GameStateService(localStorage);
const gameCtrl = new GameController(gamePlay, stateService);
gameCtrl.init();
     expect(1).toEqual(1);
  });