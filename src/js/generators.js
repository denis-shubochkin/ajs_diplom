/**
 * Generates random characters
 *
 * @param allowedTypes  iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */
import Bowman from './Bowman'
import Swordsman from './Swordsman'

export function* characterGenerator(allowedTypes, maxLevel) {
  do
  {
  if(Math.floor(Math.random()*10)===0)
  {
    let b = new Bowman();
    yield b;
  }
 if(Math.floor(Math.random()*10)===1)
  {
    let s = new Swordsman();
    yield s;
  }
  } while (1===1)
    }
}

export function generateTeam(allowedTypes, maxLevel, characterCount) {
  let g = characterGenerator(allowedTypes,maxLevel); 
  let goodTeam = [];
  let badTeam = [];
  let c = 0;
   do {
     goodTeam.push(g.next().value);
     badTeam.push(g.next().value);
     c++;
   }
   while (c<=characterCount);
   return goodTeam;
}
