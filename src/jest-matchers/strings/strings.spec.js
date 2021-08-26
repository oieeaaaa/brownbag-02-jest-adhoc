import { toCamelCaseFullName } from './index';

const fullName = 'john smith doe';

test('toCamelCaseFullName - passed', () => {
  const camelCasedFullName = toCamelCaseFullName(fullName);

  expect(camelCasedFullName).toMatch('John Smith Doe')
});
