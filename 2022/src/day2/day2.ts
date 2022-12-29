import { readFileSync } from 'fs';
import { join } from 'path';
import { FileInput } from '../helpers/advent-of-code';

export enum Hand {
  ROCK = 1,
  PAPER = 2,
  SCISSORS = 3
}

export enum Result {
  LOSS = 0,
  DRAW = 3,
  WIN = 6
}

export type Code = 'X' | 'Y' | 'Z' | 'A' | 'B' | 'C';

export function toHand(code: Code): Hand {
  switch (code) {
    case 'A':
    case 'X':
      return Hand.ROCK;
    case 'B':
    case 'Y':
      return Hand.PAPER;
    case 'C':
    case 'Z':
      return Hand.SCISSORS;
  }
}

/**
 * Checks who won
 * @param playerA
 * @param playerB
 * @param checkAgainstPlayer check against A or B
 * @returns returns 0 for loss, 3 for draw and 6 for win
 */
export function toResult(
  playerA: Hand,
  playerB: Hand,
  checkAgainstPlayer: 'A' | 'B'
): number {
  if (playerA % 3 === playerB - 1) {
    return checkAgainstPlayer === 'B' ? Result.WIN : Result.LOSS;
  } else if (playerA === playerB) {
    return Result.DRAW;
  }

  return checkAgainstPlayer === 'B' ? Result.LOSS : Result.WIN;
}

export function getStrategies(filename: FileInput): string[][] {
  const content = readFileSync(join(__dirname, `./data/${filename}`), 'utf-8');
  return content
    .replace(/\r\n/g, '\n\n')
    .split('\n\n')
    .map((row: string) => row.split(' '));
}

export function getTotalScore(strategies: string[][]): number {
  return strategies
    .map((strategy: string[]) =>
      strategy
        .map((code: Code) => toHand(code))
        .reduce(
          (handA: Hand, handB: Hand) => handB + toResult(handA, handB, 'B')
        )
    )
    .reduce((prev: number, current: number) => prev + current);
}
