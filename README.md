# FizzBuzzWhizz Kata

TypeScript solution to the **FizzBuzz** kata from [JuanPa90Cap/Katas](https://github.com/JuanPa90Cap/Katas), built with **Test Driven Development** and **Jest**.

## Rules

For a natural number greater than zero, `game(n)` returns:

- `"Fizz"` when the number is divisible by 3
- `"Buzz"` when the number is divisible by 5
- `"Whizz"` when the number is prime (bonus rule)
- The words are combined when more than one rule applies (for example `3 → "FizzWhizz"`, `15 → "FizzBuzz"`)
- The number itself when no rule applies

## How it works

All the logic lives in [`src/fizzBuzzWhizz.ts`](src/fizzBuzzWhizz.ts):

- **`isPrime(num)`** checks divisors only up to the square root of the number, which is enough to know whether it is prime.
- **`game(input)`** starts with an empty string and appends `Fizz`, `Buzz` and `Whizz` according to each rule. If the string is still empty, it returns the number.
- **`playUntil(limit)`** builds the list of results from 1 to `limit` with `Array.from`. For example, `playUntil(5)` returns `[1, "Whizz", "FizzWhizz", 4, "BuzzWhizz"]`.

## Tests

The tests are in [`src/fizzBuzzWhizz.spec.ts`](src/fizzBuzzWhizz.spec.ts) and use `test.each`:

| Suite | What it checks | Tests |
|-------|----------------|-------|
| Full Table | Every number from the exercise tables | 12 |
| Range from 1 to LIMIT | Each number from 1 to `LIMIT = 10`, plus `playUntil` with the full range, its length, and a limit of 0 | 13 |
| Any number | Numbers outside the tables (97, 99, 100, 225, 1000) | 5 |
| **Total** | | **30** |

## Running the project

```
git clone https://github.com/4ndr3y0001/Katas.git
cd Katas
npm install
npm test
```
