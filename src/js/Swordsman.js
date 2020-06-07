import Character from './Character'

class Swordsman  extends Character {
    constructor(level, type = 'generic') {
        super(level, type = 'generic');
        this.attack = 40;
        this.defence = 10;
    }
}