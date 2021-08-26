import { extractMergeTags } from './index';

let message = `
  lorem ipsum dolor sit amet consectetur asdipisir #firstname#
  this is a test then a #lastname#
`;

test('extractMergeTags - passed', () => {
  const tags = extractMergeTags(message);

  expect(tags).toContain('#firstname#', '#lastname#');
});
