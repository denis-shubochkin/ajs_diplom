import Character from './Character'

class Magician  extends Character {
    constructor(level, type = 'generic') {
        super(level, type = 'generic');
        this.attack = 10;
        this.defence = 40;
    }
}