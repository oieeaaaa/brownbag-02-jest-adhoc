import { getSpelledLike } from "./index";

describe("getSpelledLike", () => {
  let spelledLikeMango;
  let spelledLikePapaya;

  beforeAll(() => {
    spelledLikeMango = [
      {
        word: "mango",
        score: 65660,
      },
      {
        word: "manga",
        score: 650,
      },
      {
        word: "tango",
        score: 616,
      },
      {
        word: "mange",
        score: 589,
      },
    ];

    spelledLikePapaya = [
      {
        word: "papaya",
        score: 65308,
      },
      {
        word: "papaia",
        score: 64,
      },
      {
        word: "papay",
        score: 5,
      },
      {
        word: "papara",
        score: 3,
      },
    ];
  });

  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    global.fetch = null;
  });

  test("mango", async () => {
    global.fetch.mockImplementation(() =>
      Promise.resolve({ json: () => Promise.resolve(spelledLikeMango) })
    );

    const spellings = await getSpelledLike("mango", 3);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.datamuse.com/words?sp=mango&max=3"
    );
    expect(spellings).toEqual(spelledLikeMango);
  });

  test("papaya", async () => {
    global.fetch.mockImplementation(() =>
      Promise.resolve({ json: () => Promise.resolve(spelledLikePapaya) })
    );

    const spellings = await getSpelledLike("papaya", 3);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenNthCalledWith(
      1,
      "https://api.datamuse.com/words?sp=papaya&max=3"
    );
    expect(spellings).toEqual(spelledLikePapaya);
  });
});

