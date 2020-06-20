export default class GameState {
  constructor() {
    this.countTurn = 1;
    this.current = 'Player';
  }

 
  turn() {
    if (this.countTurn % 2 === 0)
    {
      this.countTurn++;
      this.current = 'Player';
    }
    else {
      this.countTurn++;
      this.current = 'PC';
    }
  }

  static from(object) {
    // TODO: create object
    return null;
  }
}
