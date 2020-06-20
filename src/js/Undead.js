import Character from './Character'

export default class Undead  extends Character {
    constructor(level, type = 'undead') {
        super(level, type = 'undead');
        this.attack = 40;
        this.defence = 10;
        this.health = 100;
        this.range = 4;
        this.side = 'bad';
        this.attackRange = 1;
        this.cells = [7,15,23,31,39,47,55,63,6,14,22,30,38,46,54,62];
        
    }
}