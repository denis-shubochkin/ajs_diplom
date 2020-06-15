export default class GameState {
  constructor() {
    this.countTurn = 1;
  }

 
  turn() {
    if (this.countTurn % 2 === 0)
    {
      this.countTurn++;
      return 'Player';
    }
    else {
      this.countTurn++;
      return 'PC';
    }
  }

  static from(object) {
    // TODO: create object
    return null;
  }
}
