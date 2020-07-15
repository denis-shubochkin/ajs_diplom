import Character from '../Character.js';
import Bowman from '../Bowman.js'

test('return Character - error', () =>
  {
    expect(() => {const c = new Character(0)}).toThrow();
  });

  test('return Bowman', () =>
  {
    const b = new Bowman(0);
    expect(b).toEqual({
      level : 0,
      type : 'bowman',
      attack : 2500,
      defence : 25,
      health : 100,
      side : 'good',
      range : 2,
      attackRange : 2,
      cells : [0,8,16,24,32,40,48,56,1,9,17,25,33,41,49,57]
    });
  });


  