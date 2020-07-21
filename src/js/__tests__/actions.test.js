
import GamePlay from '../GamePlay';
import GameController from '../GameController';
import GameStateService from '../GameStateService';
import Bowman from '../Bowman.js'
import Undead from '../Undead.js'
import PositionedCharacter from '../PositionedCharacter'


test('cursor pointer', () =>
  {
    const b = new Bowman(0);
    b.cell = 0
    const b2 = new Bowman(0);
    b2.cell  = 1;
    const u = new Undead(0);
    u.cell  = 7;
    document.body.innerHTML = '<div id="game-container"></div>';
    const gamePlay = new GamePlay();
    gamePlay.bindToDOM(document.querySelector('#game-container'));
    const stateService = new GameStateService(localStorage);
    const gameCtrl = new GameController(gamePlay, stateService);
    gameCtrl.init();
    gameCtrl.players.push(b);
    gameCtrl.players.push(b2);
    gameCtrl.onCellEnter(0);
     expect(gamePlay.boardEl.style.cursor).toEqual('pointer');
  });

  test('green circle', () =>
  {
    const b = new Bowman(0);
    b.cell = 0
    document.body.innerHTML = '<div id="game-container"></div>';
    const gamePlay = new GamePlay();
    gamePlay.bindToDOM(document.querySelector('#game-container'));
    const stateService = new GameStateService(localStorage);
    const gameCtrl = new GameController(gamePlay, stateService);
    gameCtrl.init();
    gameCtrl.players.push(b);
    gameCtrl.selectedYellow=0;
    gameCtrl.onCellEnter(1);
     expect(gamePlay.cells[1].classList.contains('selected-green')).toEqual(true);
  });

  test('yellow circle', () =>
  {
    const b = new Bowman(0);
    b.cell = 0
    document.body.innerHTML = '<div id="game-container"></div>';
    const gamePlay = new GamePlay();
    gamePlay.bindToDOM(document.querySelector('#game-container'));
    const stateService = new GameStateService(localStorage);
    const gameCtrl = new GameController(gamePlay, stateService);
    gameCtrl.init();
    gameCtrl.players.push(b);
    gameCtrl.onCellClick(0);
     expect(gamePlay.cells[0].classList.contains('selected-yellow')).toEqual(true);
  });

  test('green circle out of range', () =>
  {
    const b = new Bowman(0);
    b.cell = 0
    document.body.innerHTML = '<div id="game-container"></div>';
    const gamePlay = new GamePlay();
    gamePlay.bindToDOM(document.querySelector('#game-container'));
    const stateService = new GameStateService(localStorage);
    const gameCtrl = new GameController(gamePlay, stateService);
    gameCtrl.init();
    gameCtrl.players.push(b);
    gameCtrl.selectedYellow=0;
    gameCtrl.onCellEnter(6);
     expect(gamePlay.cells[6].classList.contains('selected-green')).toEqual(false);
  });

  test('cursor out of range', () =>
  {
    const b = new Bowman(0);
    b.cell = 0
    document.body.innerHTML = '<div id="game-container"></div>';
    const gamePlay = new GamePlay();
    gamePlay.bindToDOM(document.querySelector('#game-container'));
    const stateService = new GameStateService(localStorage);
    const gameCtrl = new GameController(gamePlay, stateService);
    gameCtrl.init();
    gameCtrl.players.push(b);
    gameCtrl.selectedYellow=0;
    gameCtrl.onCellEnter(6);
     expect(gamePlay.boardEl.style.cursor).toEqual('not-allowed');
  });

  test('cursor crosshair', () =>
  {
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
    gameCtrl.selectedYellow=0;
    gameCtrl.onCellEnter(1);
     expect(gamePlay.boardEl.style.cursor).toEqual('crosshair');
  });

  test('red circle', () =>
  {
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
    gameCtrl.selectedYellow=0;
    gameCtrl.onCellEnter(1);
    expect(gamePlay.cells[1].classList.contains('selected-red')).toEqual(true);
  });

 