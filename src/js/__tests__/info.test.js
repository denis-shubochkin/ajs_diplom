import Bowman from '../Bowman.js'


  test('info Bowman', () =>
  {
    const b = new Bowman(0);
    const info = `${String.fromCodePoint(0x1F396)}${b.level} ${String.fromCodePoint(0x2694)}${b.attack} ${String.fromCodePoint(0x1F6E1)}${b.defence} ${String.fromCodePoint(0x2764)}${b.health}`;    
    expect(info).toEqual(`🎖0 ⚔2500 🛡25 ❤100`);
  });


  