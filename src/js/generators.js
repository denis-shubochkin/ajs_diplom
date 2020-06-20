/**
 * Generates random characters
 *
 * @param allowedTypes  iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */
import Bowman from './Bowman'
import Swordsman from './Swordsman'
import Magician from './Magician'
import Daemon from './Daemon'
import Undead from './Undead'
import Vampire from './Vampire'

// export function* characterGenerator(allowedTypes, maxLevel) {
//   let lockedCells = [];
//   if(allowedTypes.includes(1))
//   {
//   do
//   {
//   if(Math.floor(Math.random()*10)===allowedTypes[0])
//   {
//     let b = new Bowman(1,'player');
//     b.level = Math.floor(1  + Math.random() * (maxLevel));
//     do{
//       b.cell = b.cells[Math.floor(Math.random() * b.cells.length)];
//       if(!lockedCells.includes(b.cell)) {
//         lockedCells.push(b.cell);
//         break;
//       }
//     }
//     while (1===1)
//     yield b;
//   }
//  if(Math.floor(Math.random()*10)===allowedTypes[1])
//   {
//     let s = new Swordsman(1,'player');
//     s.level = Math.floor(1  + Math.random() * (maxLevel));
//     do{
//       s.cell = s.cells[Math.floor(Math.random() * s.cells.length)];
//       if(!lockedCells.includes(s.cell)) {
//         lockedCells.push(s.cell);
//         break;
//       }
//     }
//     while (1===1)
//     yield s;
//   }
//   if(Math.floor(Math.random()*10)===allowedTypes[2])
//   {
//     let m = new Magician(1,'player');
//     m.level = Math.floor(1  + Math.random() * (maxLevel));
//     do{
//       m.cell = m.cells[Math.floor(Math.random() * m.cells.length)];
//       if(!lockedCells.includes(m.cell)) {
//         lockedCells.push(m.cell);
//         break;
//       }
//     }
//     while (1===1)
//     yield m;
//   }
//   } while (1===1) 
// }

// if(allowedTypes.includes(4))
// {
//   do
//   {
//   if(Math.floor(Math.random()*10)===allowedTypes[0])
//   {
//     let d = new Daemon(1,'pc');
//     d.level = Math.floor(1  + Math.random() * (maxLevel));
//     do{
//       d.cell = d.cells[Math.floor(Math.random() * d.cells.length)];
//       if(!lockedCells.includes(d.cell)) {
//         lockedCells.push(d.cell);
//         break;
//       }
//     }
//     while (1===1)
//     yield d;
//   }
//   if(Math.floor(Math.random()*10)===allowedTypes[1])
//   {
//     let u = new Undead(1,'pc');
//     u.level = Math.floor(1  + Math.random() * (maxLevel));
//     do{
//       u.cell = u.cells[Math.floor(Math.random() * u.cells.length)];
//       if(!lockedCells.includes(u.cell)) {
//         lockedCells.push(u.cell);
//         break;
//       }
//     }
//     while (1===1)
//     yield u;
//   }
//   if(Math.floor(Math.random()*10)===allowedTypes[2])
//   {
//     let v = new Vampire(1,'pc');
//     v.level = Math.floor(1  + Math.random() * (maxLevel));
//     do{
//       v.cell = v.cells[Math.floor(Math.random() * v.cells.length)];
//       if(!lockedCells.includes(v.cell)) {
//         lockedCells.push(v.cell);
//         break;
//       }
//     }
//     while (1===1)
//     yield v;
//   }
//   } while (1===1) 
// }


// }

// export function generateTeam(allowedTypes, maxLevel, characterCount) {
//   const characters = [Bowman,Swordsman,Magician]
//   let g = characterGenerator(characters,maxLevel); 
//   let b = characterGenerator([4,5,6],maxLevel);
//   let goodTeam = [];
//   let badTeam = [];
//   let c = 0;
//    do {
//      if(maxLevel===1)
//      {
//      goodTeam.push(g.next().value);
//      }
//      badTeam.push(b.next().value);
//      c++;
//    }
//    while (c<characterCount);
//    return goodTeam.concat(badTeam);
// }
export function* characterGenerator(allowedTypes, maxLevel) {
  let lockedCells = [];
  do{
  for (let i=0;i<allowedTypes.length;i++)
  {
    if((Math.floor(0  + Math.random() * (2)))===i)
    {
    let pers = new allowedTypes[i];
    pers.level = Math.floor(1  + Math.random() * (maxLevel));
    do{
      pers.cell = pers.cells[Math.floor(Math.random() * pers.cells.length)];
      if(!lockedCells.includes(pers.cell)) {
        lockedCells.push(pers.cell);
        break;
      }
    }
    while (1===1)
    yield pers;
    }
  }
} while (1===1)
   
    
}

export function generateTeam(allowedTypes, maxLevel, characterCount) {
  let g = characterGenerator(allowedTypes,maxLevel); 
  let team = [];
  let c = 0;
   do {
     team.push(g.next().value);
     c++;
   }
   while (c<characterCount);
   return team;
}
