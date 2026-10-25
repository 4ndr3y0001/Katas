import { game } from "./fizzBuzzWhizz";

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