import Character from './Character'

export default class Vampire  extends Character {
    constructor(level, type = 'vampire') {
        super(level, type = 'vampire');
        this.attack = 25;
        this.defence = 25;
        this.health = 100;
        this.range = 2;
        this.side = 'bad';
        this.attackRange = 2;
        this.cells = [7,15,23,31,39,47,55,63,6,14,22,30,38,46,54,62];
        
    }
}