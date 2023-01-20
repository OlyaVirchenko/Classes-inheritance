import Bowman from '../bowman';
import Swordsman from '../shordsman';
import Magician from '../magician';
import Undead from '../undead';
import Zombie from '../zombie';
import Daemon from '../daemon';
import Character from '../character';

test('Проверка героя Bowman', () => {
  const result = new Bowman('Bombom');
  expect(result).toEqual({
    name: 'Bombom',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    deffence: 25,
  });
});

test('Проверка героя Swordsman', () => {
  const result = new Swordsman('Bombom');
  expect(result).toEqual({
    name: 'Bombom',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    deffence: 10,
  });
});

test('Проверка героя Magician', () => {
  const result = new Magician('Bombom');
  expect(result).toEqual({
    name: 'Bombom',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    deffence: 40,
  });
});

test('Проверка героя Undead', () => {
  const result = new Undead('Bombom');
  expect(result).toEqual({
    name: 'Bombom',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    deffence: 25,
  });
});

test('Проверка героя Zombie', () => {
  const result = new Zombie('Bombom');
  expect(result).toEqual({
    name: 'Bombom',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    deffence: 10,
  });
});

test('Проверка героя Daemon', () => {
  const result = new Daemon('Bombom');
  expect(result).toEqual({
    name: 'Bombom',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    deffence: 40,
  });
});

test('Проверка является ли имя строкой', () => {
  expect(() => {
    const result = new Undead(12356);
    result.name = 12356;
  }).toThrow('Ошибка! Имя должно быть строкой');
});

test('Проверка слишком маленькой длины имени', () => {
  expect(() => {
    const result = new Undead('B');
    result.name = 'B';
  }).toThrow('Ошибка! Имя слишком короткое/длинное');
});

test('Проверка слишком большой длины имени', () => {
  expect(() => {
    const result = new Undead('Bombombombombom');
    result.name = 'Bombombombombom';
  }).toThrow('Ошибка! Имя слишком короткое/длинное');
});

test('Проверка существования типа героя', () => {
  expect(() => {
    const result = new Character('Bombom');
    result.type = 'Undeady';
  }).toThrow('Ошибка! Такого персонажа не существует');
});
