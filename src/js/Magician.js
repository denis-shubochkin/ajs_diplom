import Character from './Character'

export default class Magician  extends Character {
    constructor(level, type = 'magician') {
        super(level, type = 'magician');
        this.attack = 10;
        this.defence = 40;
        this.health = 100;
        this.range = 1;
        this.attackRange = 4;
        this.cells = [0,8,16,24,32,40,48,56,1,9,17,25,33,41,49,57];
    }
}