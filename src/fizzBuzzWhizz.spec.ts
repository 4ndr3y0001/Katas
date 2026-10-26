import { game, playUntil } from "./fizzBuzzWhizz";

describe("FizzBuzzWhizz Game - Full Table", () => {
  test.each([
    [1, 1],
    [2, "Whizz"],         
    [3, "FizzWhizz"],     
    [4, 4],
    [5, "BuzzWhizz"],    
    [6, "Fizz"],         
    [9, "Fizz"],       
    [10, "Buzz"],         
    [15, "FizzBuzz"],     
    [20, "Buzz"],         
    [30, "FizzBuzz"],     
    [75, "FizzBuzz"],     
  ])(" %i     %p", (input, expected) => {
    expect(game(input)).toEqual(expected);
  });
});

describe("FizzBuzzWhizz Game - Range from 1 to LIMIT", () => {
  const LIMIT = 10;
  const expectedUntilLimit: (number | string)[] = [
    1, "Whizz", "FizzWhizz", 4, "BuzzWhizz", "Fizz", "Whizz", 8, "Fizz", "Buzz",
  ];

  const rangeCases = expectedUntilLimit.map((expected, index) => [index + 1, expected]);

  test.each(rangeCases)(" %i     %p", (input, expected) => {
    expect(game(input as number)).toEqual(expected);
  });

  test("playUntil returns the whole range", () => {
    expect(playUntil(LIMIT)).toEqual(expectedUntilLimit);
  });

  test("playUntil returns exactly LIMIT results", () => {
    expect(playUntil(LIMIT)).toHaveLength(LIMIT);
  });

  test("playUntil returns an empty list when the limit is 0", () => {
    expect(playUntil(0)).toEqual([]);
  });
});

describe("FizzBuzzWhizz Game - Any number", () => {
  test.each([
    [97, "Whizz"],
    [99, "Fizz"],
    [100, "Buzz"],
    [225, "FizzBuzz"],
    [1000, "Buzz"],
  ])(" %i     %p", (input, expected) => {
    expect(game(input)).toEqual(expected);
  });
});
