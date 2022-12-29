import {
  Code,
  getStrategies,
  getTotalScore,
  Hand,
  Result,
  toHand,
  toResult
} from './day2';

describe("'toHand' utility", () => {
  const cases: (Code | number)[][] = [
    ['A', 1],
    ['B', 2],
    ['C', 3],
    ['X', 1],
    ['Y', 2],
    ['Z', 3]
  ];

  test.each(cases)(
    'given %p argument, returns %p',
    (firstArg: Code, expectedResult: number) => {
      const result = toHand(firstArg);
      expect(result).toBe(expectedResult);
    }
  );
});

describe("'toResult' utility", () => {
  describe("'toResult' utility for 'A' player", () => {
    const cases: (Hand | Result)[][] = [
      [Hand.ROCK, Hand.ROCK, Result.DRAW],
      [Hand.ROCK, Hand.PAPER, Result.LOSS],
      [Hand.ROCK, Hand.SCISSORS, Result.WIN],
      [Hand.PAPER, Hand.ROCK, Result.WIN],
      [Hand.PAPER, Hand.PAPER, Result.DRAW],
      [Hand.PAPER, Hand.SCISSORS, Result.LOSS],
      [Hand.SCISSORS, Hand.ROCK, Result.LOSS],
      [Hand.SCISSORS, Hand.PAPER, Result.WIN],
      [Hand.SCISSORS, Hand.SCISSORS, Result.DRAW]
    ];

    test.each(cases)(
      'given %p and %p as arguments, returns %p',
      (firstArg: Hand, secondArg: Hand, expectedResult: Result) => {
        const result = toResult(firstArg, secondArg, 'A');
        expect(result).toBe(expectedResult);
      }
    );
  });

  describe("'toResult' utility for 'B' player", () => {
    const cases: (Hand | Result)[][] = [
      [Hand.ROCK, Hand.ROCK, Result.DRAW],
      [Hand.ROCK, Hand.PAPER, Result.WIN],
      [Hand.ROCK, Hand.SCISSORS, Result.LOSS],
      [Hand.PAPER, Hand.ROCK, Result.LOSS],
      [Hand.PAPER, Hand.PAPER, Result.DRAW],
      [Hand.PAPER, Hand.SCISSORS, Result.WIN],
      [Hand.SCISSORS, Hand.ROCK, Result.WIN],
      [Hand.SCISSORS, Hand.PAPER, Result.LOSS],
      [Hand.SCISSORS, Hand.SCISSORS, Result.DRAW]
    ];

    test.each(cases)(
      'given %p and %p as arguments, returns %p',
      (firstArg: Hand, secondArg: Hand, expectedResult: Result) => {
        const result = toResult(firstArg, secondArg, 'B');
        expect(result).toBe(expectedResult);
      }
    );
  });
});

describe('Checks total score', () => {
  describe('PART 1', () => {
    it('check against demo-input.txt', () => {
      const elves = getStrategies('demo-input.txt');
      expect(getTotalScore(elves)).toBe(15);
    });
    it('check against input.txt', () => {
      const elves = getStrategies('input.txt');
      expect(getTotalScore(elves)).toBe(8890);
    });
  });
});
