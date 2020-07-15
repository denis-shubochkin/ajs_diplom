import calcTileType from '../utils.js';

test('return bottom', () =>
  {
    const res = calcTileType(60,8);
    expect(res).toEqual('bottom');
  });

  test('return top', () =>
  {
    const res = calcTileType(3,8);
    expect(res).toEqual('top');
  });

  test('return left', () =>
  {
    const res = calcTileType(8,8);
    expect(res).toEqual('left');
  });

  test('return right', () =>
  {
    const res = calcTileType(15,8);
    expect(res).toEqual('right');
  });

  test('return top-left', () =>
  {
    const res = calcTileType(0,8);
    expect(res).toEqual('top-left');
  });

  test('return top-right', () =>
  {
    const res = calcTileType(7,8);
    expect(res).toEqual('top-right');
  });

  test('return bottom-left', () =>
  {
    const res = calcTileType(56,8);
    expect(res).toEqual('bottom-left');
  });

  test('return bottom-right', () =>
  {
    const res = calcTileType(63,8);
    expect(res).toEqual('bottom-right');
  });