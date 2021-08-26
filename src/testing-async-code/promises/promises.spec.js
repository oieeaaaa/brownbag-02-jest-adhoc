import nodeFetch from 'node-fetch';
import { getUser, getPhoto } from './index';

global.fetch = nodeFetch;

test("getUser - passed", () => {
  return getUser(1).then((user) =>
    expect(user).toEqual({
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    })
  );
});

test("getUser - invalid id", () => {
  return getUser(112039123).catch((user) => expect(user).toEqual({}));
});

test("getPhoto - passed", () => {
  return expect(getPhoto(1)).resolves.toEqual({
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  });
});

test("getPhoto - failed", () => {
  return expect(getPhoto()).rejects.toMatch('Error!');
});
