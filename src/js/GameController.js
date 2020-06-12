import themes from './themes'
import cursors from './cursors'
import {generateTeam} from './generators'
import PositionedCharacter from './PositionedCharacter'

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    this.players = [];
    this.selectedYellow;
    this.selectedGreen;
    this.selectedRed;
    this.pc = [];
    this.level = themes.prairie;
  }

  changeLevel()
  {
    if (this.level === themes.prairie) {
      this.level = themes.desert
      this.gamePlay.drawUi(themes.desert);
      this.clearCells();
      for(let i = 0; i< this.players.length; i++)
      {
        if(['daemon','undead','vampire'].includes(this.players[i].type))
        {
          this.players.splice(i,1);
        }
        if(['bowman','swordsman','magician'].includes(this.players[i].type))
        {
          this.players[i].level += 1;
          this.players[i].health = 100;
        }
      }

      return;
    };
    if (this.level === themes.desert) {this.level = themes.arctic};
    if (this.level === themes.arctic) {this.level = themes.mountain};
    if (this.level === themes.mountain) {this.gamePlay.showError('Игра пройдена');};
  }
  
  transCoor(index) {
    if(index===0) return [0,0];
if(index===1) return [1,0];
if(index===2) return [2,0];
if(index===3) return [3,0];
if(index===4) return [4,0];
if(index===5) return [5,0];
if(index===6) return [6,0];
if(index===7) return [7,0];
if(index===8) return [0,1];
if(index===9) return [1,1];
if(index===10) return [2,1];
if(index===11) return [3,1];
if(index===12) return [4,1];
if(index===13) return [5,1];
if(index===14) return [6,1];
if(index===15) return [7,1];
if(index===16) return [0,2];
if(index===17) return [1,2];
if(index===18) return [2,2];
if(index===19) return [3,2];
if(index===20) return [4,2];
if(index===21) return [5,2];
if(index===22) return [6,2];
if(index===23) return [7,2];
if(index===24) return [0,3];
if(index===25) return [1,3];
if(index===26) return [2,3];
if(index===27) return [3,3];
if(index===28) return [4,3];
if(index===29) return [5,3];
if(index===30) return [6,3];
if(index===31) return [7,3];
if(index===32) return [0,4];
if(index===33) return [1,4];
if(index===34) return [2,4];
if(index===35) return [3,4];
if(index===36) return [4,4];
if(index===37) return [5,4];
if(index===38) return [6,4];
if(index===39) return [7,4];
if(index===40) return [0,5];
if(index===41) return [1,5];
if(index===42) return [2,5];
if(index===43) return [3,5];
if(index===44) return [4,5];
if(index===45) return [5,5];
if(index===46) return [6,5];
if(index===47) return [7,5];
if(index===48) return [0,6];
if(index===49) return [1,6];
if(index===50) return [2,6];
if(index===51) return [3,6];
if(index===52) return [4,6];
if(index===53) return [5,6];
if(index===54) return [6,6];
if(index===55) return [7,6];
if(index===56) return [0,7];
if(index===57) return [1,7];
if(index===58) return [2,7];
if(index===59) return [3,7];
if(index===60) return [4,7];
if(index===61) return [5,7];
if(index===62) return [6,7];
if(index===63) return [7,7];
  }

  init() {
    this.gamePlay.drawUi(themes.prairie);
    this.onCellEnter = this.onCellEnter.bind( this );
    this.onCellLeave = this.onCellLeave.bind( this );
    this.onCellClick = this.onCellClick.bind( this );
    this.onNewgame = this.onNewgame.bind( this );
    this.gamePlay.addCellEnterListener(this.onCellEnter);
    this.gamePlay.addCellClickListener(this.onCellClick);
    this.gamePlay.addCellLeaveListener(this.onCellLeave);
    this.gamePlay.addNewGameListener(this.onNewgame);
    //
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
  }

  checkEnemies()
  {
    let enemiesCount = 0;
    for(let i = 0; i< this.players.length; i++)
    {
      if(['daemon','undead','vampire'].includes(this.players[i].type))
      {
        enemiesCount++;
      }
    }
    if (enemiesCount===0)
    {
      this.changeLevel();
    }
  }

  onCellClick(index) {
    for(let i = 0; i< this.players.length; i++)
    {
      //выделение персонажа
      if (this.players[i].cell === index)
      {
        if (['bowman','swordsman','magician'].includes(this.players[i].type))
        {
          if(this.selectedYellow>= 0) {
            this.gamePlay.deselectCell(this.selectedYellow);
          }
          this.gamePlay.selectCell(index);
          this.selectedYellow = index;
          return;
        }
        else
        {
          this.gamePlay.showError('Этот персонаж не играбельный');
        }
      }
      if(this.players[i].cell === this.selectedYellow)
      {
        // Перемещение персонажа
        if(this.selectedGreen === index)
        {
          this.players[i].cell = index;
          this.pc[i].position = index;
          this.gamePlay.redrawPositions(this.pc);
          this.clearCells();
          return;
        }
        // Атака 
        if(this.selectedRed === index)
        {
          for (let j =0;j<=this.players.length;j++)
          {
            if(this.players[j].cell === index)
            {
              let dmg = Math.max(this.players[i].attack - this.players[j].defence, this.players[i].attack * 0.1);
              this.gamePlay.showDamage(index,dmg).then((r) => {
                this.players[j].health -= dmg;
                this.gamePlay.redrawPositions(this.pc);
              });
              if(this.players[j].health<=0)
              {
                this.players.splice(j,1);
                this.pc.splice(j,1);
                this.gamePlay.redrawPositions(this.pc);
                this.checkEnemies();
              }
              return;
            }
            // else {
            //   this.gamePlay.showError('Этот противник уже уничтожен');
            //   return;
            // }
          }
          }
        }
      }
  }

  onCellEnter(index) {
    
    for(let i = 0; i< this.players.length; i++)
    {
      // Проверка на присутствие персонажа в клетке и вывод его инфо
      if (this.players[i].cell === index && ['bowman','swordsman','magician'].includes(this.players[i].type))
      {
        this.gamePlay.setCursor(cursors.pointer);
        this.gamePlay.showCellTooltip(`${String.fromCodePoint(0x1F396)}${this.players[i].level} ${String.fromCodePoint(0x2694)} ${this.players[i].attack} ${String.fromCodePoint(0x1F6E1)}${this.players[i].defence} ${String.fromCodePoint(0x2764)}${this.players[i].health} `,index);
        return;
      }
    }
    for(let i = 0; i< this.players.length; i++)
    {
      // Действия выделенного игрока
      if(this.players[i].cell === this.selectedYellow)
      {
        let playerCell = this.transCoor(this.players[i].cell);
        let cursorCell = this.transCoor(index);
        // Курсор по горизонтали
            if(playerCell[1]===cursorCell[1] && Math.abs(playerCell[0] - cursorCell[0])<=this.players[i].range && JSON.stringify(playerCell) != JSON.stringify(cursorCell))
            {
              
              for(let j = 0; j< this.players.length; j++)
              { 
                if(this.players[j].cell===index && !['bowman','swordsman','magician'].includes(this.players[j].type))
                {
                  this.gamePlay.setCursor(cursors.crosshair);
                  this.gamePlay.selectCell(index,'red');
                  this.selectedRed = index;
                  return;
                }
                else if(this.players[j].cell===index)
                {
                  return;
                }
              }
              
              this.gamePlay.setCursor(cursors.pointer);
              this.gamePlay.selectCell(index,'green');
              this.selectedGreen = index;
            }
            // Курсор по вертикали
            else if(playerCell[0]===cursorCell[0] && Math.abs(playerCell[1] - cursorCell[1])<=this.players[i].range && JSON.stringify(playerCell) != JSON.stringify(cursorCell))
            {
              for(let j = 0; j< this.players.length; j++)
              { 
                if(this.players[j].cell===index && !['bowman','swordsman','magician'].includes(this.players[j].type))
                {
                  this.gamePlay.setCursor(cursors.crosshair);
                  this.gamePlay.selectCell(index,'red');
                  this.selectedRed = index;
                  return;
                }
                else if(this.players[j].cell===index)
                {
                  return;
                }
              }
              
              this.gamePlay.setCursor(cursors.pointer);
              this.gamePlay.selectCell(index,'green');
              this.selectedGreen = index;
            }
            // Курсор по диагонали
            else if(Math.abs(playerCell[1] - cursorCell[1])===Math.abs(playerCell[0] - cursorCell[0]) && Math.abs(playerCell[1] - cursorCell[1])<=this.players[i].range && JSON.stringify(playerCell) != JSON.stringify(cursorCell))
            {
              for(let j = 0; j< this.players.length; j++)
              { 
                if(this.players[j].cell===index && !['bowman','swordsman','magician'].includes(this.players[j].type))
                {
                  this.gamePlay.setCursor(cursors.crosshair);
                  this.gamePlay.selectCell(index,'red');
                  this.selectedRed = index;
                  return;
                }
                else if(this.players[j].cell===index)
                {
                  return;
                }
              }
              
              this.gamePlay.setCursor(cursors.pointer);
              this.gamePlay.selectCell(index,'green');
              this.selectedGreen = index;
            }
             else {
               this.gamePlay.setCursor(cursors.notallowed);
             }
  }
}
}

  onCellLeave(index) {
    this.gamePlay.setCursor(cursors.auto);
    this.gamePlay.hideCellTooltip(index);
    if(this.selectedGreen===index && this.selectedGreen!=this.selectedYellow)
    {
      this.gamePlay.deselectCell(index);
    }
    if(this.selectedRed === index)
    {
      this.gamePlay.deselectCell(index);
    }
  }

  clearCells() {
    if(this.selectedYellow>=0)
    {
      for (let i=0;i<Math.pow(this.gamePlay.boardSize,2);i++)
      {
        this.gamePlay.deselectCell(i);
      }
    }
  }

  onNewgame() {
    this.clearCells();
    this.players = [];
    this.pc = [];
    this.players = generateTeam([0,1],2,1);
    this.players.forEach((v) => {this.pc.push(new PositionedCharacter(v,v.cell))}); 
    this.gamePlay.redrawPositions(this.pc);
  }
}
