import { getHomonyms } from "./index";
import ApiService from "./apiService";

describe("getHomonyms", () => {
  let homonymsForWiggle;
  let homonymsForSmile;
  let homonymsForBold;
  let homonymsForSimple;
  let apiService;

  beforeAll(() => {
    global.fetch = jest.fn();
    apiService = new ApiService("https://api.datamuse.com");

    homonymsForWiggle = [
      {
        word: "wiggle",
        score: 100,
        numSyllables: 2,
      },
      {
        word: "waggle",
        score: 95,
        numSyllables: 2,
      },
      {
        word: "woggle",
        score: 95,
        numSyllables: 2,
      },
    ];

    homonymsForSmile = [
      {
        word: "smile",
        score: 100,
        numSyllables: 1,
      },
      {
        word: "small",
        score: 95,
        numSyllables: 1,
      },
      {
        word: "smell",
        score: 95,
        numSyllables: 1,
      },
    ];

    homonymsForBold = [
      {
        word: "bold",
        score: 100,
        numSyllables: 1,
      },
      {
        word: "bolde",
        score: 100,
        numSyllables: 1,
      },
      {
        word: "bolled",
        score: 100,
        numSyllables: 1,
      },
    ];

    homonymsForSimple = [
      {
        word: "simple",
        score: 100,
        numSyllables: 2,
      },
      {
        word: "simpl",
        score: 100,
        numSyllables: 2,
      },
      {
        word: "simpel",
        score: 100,
        numSyllables: 2,
      },
    ];
  });

  test("wiggle", async () => {
    jest.spyOn(ApiService.prototype, "query"); // important to have a prototype

    global.fetch.mockReturnValue({ json: () => homonymsForWiggle });

    const homonyms = await getHomonyms("wiggle", 3);

    expect(apiService.query.mock.calls.length).toBeGreaterThanOrEqual(1);
    expect(homonyms).toEqual(homonymsForWiggle);
  });

  test("smile", async () => {
    jest.spyOn(ApiService.prototype, "query");

    global.fetch.mockImplementation(() => ({ json: () => homonymsForSmile }));

    const homonyms = await getHomonyms("smile", 3);

    expect(apiService.query.mock.calls.length).toBeGreaterThanOrEqual(1);
    expect(homonyms).toEqual(homonymsForSmile);
  });

  test("bold & simple", async () => {
    let homonyms;

    jest.spyOn(ApiService.prototype, "query");

    // bold
    global.fetch
      .mockReturnValueOnce({ json: () => homonymsForBold })
      .mockReturnValueOnce({ json: () => homonymsForSimple });

    homonyms = await getHomonyms("bold", 3);

    expect(apiService.query.mock.calls.length).toBeGreaterThanOrEqual(1);
    expect(homonyms).toEqual(homonymsForBold);

    // simple
    homonyms = await getHomonyms("simple", 3);

    expect(apiService.query.mock.calls.length).toBeGreaterThanOrEqual(1);
    expect(homonyms).toEqual(homonymsForSimple);
  });
});
