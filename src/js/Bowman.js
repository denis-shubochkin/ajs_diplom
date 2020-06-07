import Character from './Character'

class Bowman extends Character {
    constructor(level, type = 'generic') {
        super(level, type = 'generic');
        this.attack = 25;
        this.defence = 25;
    }
}