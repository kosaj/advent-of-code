import { readFileSync } from 'fs';
import { join } from 'path';
import { FileInput } from '../helpers/advent-of-code';

export function getElvesWithCalories(filename: FileInput): number[][] {
  const content = readFileSync(join(__dirname, `./data/${filename}`), 'utf-8');
  return content
    .replace(/\r\n/g, '\n')
    .split('\n\n')
    .map((row: string) => row.split('\n').map(Number));
}

export function getMostCaloriesOfTopElves(
  elves: number[][],
  numOfElves: number
): number {
  return elves
    .map((calories) => calories.reduce((a, b) => a + b))
    .sort((a, b) => b - a)
    .slice(0, numOfElves)
    .reduce((a, b) => a + b);
}
