import hpLevel from '../app';

const character1 = { name: 'Маг', health: 90 };
const character2 = { name: 'Маг', health: 45 };
const character3 = { name: 'Маг', health: 10 };

test.each([
  [character1, 'healthy'],
  [character2, 'wounded'],
  [character3, 'critical']])('should return $expected', (character, expected) => {
  expect(hpLevel(character)).toBe(expected);
});
