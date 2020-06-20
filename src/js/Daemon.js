import Character from './Character'

export default class Daemon extends Character {
    constructor(level, type = 'daemon') {
        super(level, type = 'daemon');
        this.attack = 10;
        this.defence = 40;
        this.health = 100;
        this.range = 1;
        this.side = 'bad';
        this.attackRange = 4;
        this.cells = [7,15,23,31,39,47,55,63,6,14,22,30,38,46,54,62];
        
    }
}