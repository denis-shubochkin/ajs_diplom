
import GamePlay from '../GamePlay';
import GameController from '../GameController';
import GameStateService from '../GameStateService';
import Bowman from '../Bowman.js'
import Undead from '../Undead.js'
import PositionedCharacter from '../PositionedCharacter'

test('load unavailable', () =>
{
  const jsdomAlert = window.alert;  // remember the jsdom alert
  window.alert = () => {};
  const b = new Bowman(0);
  b.cell = 0
  const u = new Undead(0);
  u.cell  = 1;
  document.body.innerHTML = '<div id="game-container"></div>';
  const gamePlay = new GamePlay();
  gamePlay.bindToDOM(document.querySelector('#game-container'));
  const stateService = new GameStateService(localStorage);
  const gameCtrl = new GameController(gamePlay, stateService);
  gameCtrl.init();
  gameCtrl.players.push(b);
  gameCtrl.players.push(u);
  gameCtrl.players.forEach((v) => {gameCtrl.pc.push(new PositionedCharacter(v,v.cell))});
    gameCtrl.onLoadGame();
  expect(gameCtrl.errorMessage).toEqual('Нет данных для загрузки');
  window.alert = jsdomAlert;
});

test('load successful', () =>
{
  const jsdomAlert = window.alert;  // remember the jsdom alert
  window.alert = () => {};
  const b = new Bowman(0);
  b.cell = 0
  const u = new Undead(0);
  u.cell  = 1;
  document.body.innerHTML = '<div id="game-container"></div>';
  const gamePlay = new GamePlay();
  gamePlay.bindToDOM(document.querySelector('#game-container'));
  const stateService = new GameStateService(localStorage);
  const gameCtrl = new GameController(gamePlay, stateService);
  gameCtrl.init();
  gameCtrl.players.push(b);
  gameCtrl.players.push(u);
  gameCtrl.players.forEach((v) => {gameCtrl.pc.push(new PositionedCharacter(v,v.cell))});
  gameCtrl.onSaveGame();
  gameCtrl.pc = [];
  gameCtrl.players[0].cell = 2;
  gameCtrl.players.forEach((v) => {gameCtrl.pc.push(new PositionedCharacter(v,v.cell))});
  gameCtrl.onLoadGame();
  expect(gameCtrl.players[0].cell).toEqual(0);
  window.alert = jsdomAlert;
});