import nodeFetch from 'node-fetch'
import { getTodo } from './index';

global.fetch = nodeFetch;

test("getTodo - passed", (done) => {
  const callback = (data) => {
    expect(data).toEqual({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    });

    done();
  };

  getTodo(1, callback);
});

test("getTodo - invalid id", (done) => {
  const callback = (data) => {
    expect(data).toEqual({});

    done();
  };

  getTodo(102938120938, callback);
});
