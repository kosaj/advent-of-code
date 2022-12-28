import { getElfMostCalories, getElvesWithCalories } from './day1';

describe('Checks for most calories that elf caries', () => {
  it('check against demo-input.txt', () => {
    const elves = getElvesWithCalories('demo-input.txt');
    expect(getElfMostCalories(elves)).toBe(24000);
  });
  it('check against input.txt', () => {
    const elves = getElvesWithCalories('input.txt');
    expect(getElfMostCalories(elves)).toBe(73211);
  });
});
