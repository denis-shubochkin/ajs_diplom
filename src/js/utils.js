export  function calcTileType(index, boardSize) {

  function isInteger(num) {
    return (num ^ 0) === num;
  }


  if(index > (Math.pow(boardSize,2))-boardSize && index < Math.pow(boardSize,2)-1)
  {
    return 'bottom';
  }
  else if (index > 0 && index < boardSize-1)
  {
    return 'top';
  }
  else if (isInteger(index/boardSize) && index!=0 && index !=(Math.pow(boardSize,2))-boardSize)
  {
    return 'left';
  }
  else if (isInteger((index+1)/boardSize) && index!=(boardSize-1) && index !=(Math.pow(boardSize,2)-1))
  {
    return 'right';
  }
  else if (index===0)
  {
    return 'top-left';
  }
  else if (index===(boardSize-1))
  {
    return 'top-right';
  }
  else if (index===(Math.pow(boardSize,2)-1))
  {
    return 'bottom-right';
  }
  else if (index===(Math.pow(boardSize,2)-boardSize))
  {
    return 'bottom-left';
  }
  else 
  {
    return 'center';
  }
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}
