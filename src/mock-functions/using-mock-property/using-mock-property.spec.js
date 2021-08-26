import { whatsTheWords } from './index';

test("get the words for - rock the boat", async () => {
  const rockTheBoatWords = [
    {
      word: "stir",
      score: 48019,
      tags: ["syn", "v"],
    },
    {
      word: "steer",
      score: 47953,
      tags: ["syn", "v"],
    },
    {
      word: "rocks",
      score: 28044,
      tags: ["n"],
    },
  ];

  global.fetch = jest.fn(
    () => new Promise((resolve) => resolve({ json: () => rockTheBoatWords }))
  );

  const words = await whatsTheWords("rock the boat", 3);

  // console.log(global.fetch.mock);

  expect(words).toEqual(rockTheBoatWords);
});
