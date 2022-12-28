import { getMostCaloriesOfTopElves, getElvesWithCalories } from './day1';

describe('Checks for most calories that elf caries', () => {
  describe('PART 1', () => {
    it('check against demo-input.txt', () => {
      const elves = getElvesWithCalories('demo-input.txt');
      expect(getMostCaloriesOfTopElves(elves, 1)).toBe(24000);
    });
    it('check against input.txt', () => {
      const elves = getElvesWithCalories('input.txt');
      expect(getMostCaloriesOfTopElves(elves, 1)).toBe(73211);
    });
  });

  describe('PART 2', () => {
    it('check against demo-input.txt', () => {
      const elves = getElvesWithCalories('demo-input.txt');
      expect(getMostCaloriesOfTopElves(elves, 3)).toBe(45000);
    });
    it('check against input.txt', () => {
      const elves = getElvesWithCalories('input.txt');
      expect(getMostCaloriesOfTopElves(elves, 3)).toBe(213958);
    });
  });
});
