import Character from './Character'

export default class Bowman extends Character {
    constructor(level, type = 'bowman') {
        super(level, type = 'bowman');
        this.attack = 25;
        this.defence = 25;
        this.health = 100;
        this.range = 2;
        this.cells = [0,8,16,24,32,40,48,56,1,9,17,25,33,41,49,57];
        
    }
}