import { validateLogin } from './index';

let creds = {
  email: 'john.doe@gmail.com',
  password: '$johnDoe123!!',
}

test('validateLogin - passed', () => {
  const isValid = validateLogin(creds);

  expect(isValid).toBeTruthy();
});

test('validateLogin - missing email', () => {
  let newCreds = { ...creds, email: undefined };

  const isValid = validateLogin(newCreds);

  expect(newCreds.email).toBeUndefined();
  expect(isValid).toBeFalsy();
});

test('validateLogin - missing password', () => {
  let newCreds = { ...creds, password: null };

  console.log(newCreds);

  const isValid = validateLogin(newCreds);

  expect(newCreds.password).toBeNull();
  expect(isValid).toBeFalsy();
});

test('validateLogin - invalid email', () => {
  // Scenario 1: email with backslash
  let newCreds;
  let isValid;

  newCreds = { ...creds, email: 'john/\/\\doe@gmail.com' };
  isValid = validateLogin(newCreds);

  expect(isValid).toBeFalsy();

  // Scenario 2: email with double quote
  newCreds = { ...newCreds, email: 'john""doe@gmail.com' }
  isValid = validateLogin(newCreds);

  expect(isValid).toBeFalsy();

  // Scenario 3: email with spaces
  newCreds = { ...newCreds, email: 'johndoe@gmail com' }
  isValid = validateLogin(newCreds);

  expect(isValid).toBeFalsy();
});

test('validateLogin - invalid password', () => {
  // Scenario 1: password's length is < 8
  let newCreds;
  let isValid;

  newCreds = { ...creds, password: '1234567' };
  isValid = validateLogin(newCreds);

  expect(isValid).toBeFalsy();

  // Scenario 2: password doesn't contain a letter
  newCreds = { ...newCreds, password: '@(!*&#(!@*12345678' }
  isValid = validateLogin(newCreds);

  expect(isValid).toBeFalsy();

  // Scenario 3: password doesn't contain a number
  newCreds = { ...newCreds, password: '===Thequickbrownfoxjumpsoverthelazydog===' }
  isValid = validateLogin(newCreds);

  expect(isValid).toBeFalsy();

  // Scenario 4: password doesn't contain a symbol
  newCreds = { ...newCreds, password: 'asdasdIASJDOASIJ1029831092' }
  isValid = validateLogin(newCreds);

  expect(isValid).toBeFalsy();

  // Scenario 5: password doesn't contain an uppercase letter
  newCreds = { ...newCreds, password: 'asodij12312!@#!@' }
  isValid = validateLogin(newCreds);

  expect(isValid).toBeFalsy();
});
