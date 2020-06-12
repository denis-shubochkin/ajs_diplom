import Character from './Character'

export default class Swordsman  extends Character {
    constructor(level, type = 'swordsman') {
        super(level, type = 'swordsman');
        this.attack = 40;
        this.defence = 10;
        this.health = 100;
        this.range = 4;
        this.cells = [0,8,16,24,32,40,48,56,1,9,17,25,33,41,49,57];
    }
}