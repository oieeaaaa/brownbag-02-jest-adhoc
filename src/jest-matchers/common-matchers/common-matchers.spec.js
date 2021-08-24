import {
  getRemainderSlicesOfPizza,
  addContactAgeInContactGroups,
  checkIfValidPhoneNumber
} from './index';

test('getRemainderSlicesOfPizza', () => {
  const slicesLeft = getRemainderSlicesOfPizza(10, 4);

  expect(slicesLeft).toBe(2);
})

test('addContactAgeInContactGroups', () => {
  const contactGroups = [
    [
      {
        name: 'Mary Poppins',
        phoneNumber: '+639123456789',
        birthYear: 1995
      },
      {
        name: 'John Doe',
        phoneNumber: '+639123456780',
        birthYear: 2000
      }
    ]
  ];

  const contactsInGroupsWithAge = addContactAgeInContactGroups(contactGroups);

  expect(contactsInGroupsWithAge).toEqual([
    [
      {
        name: 'Mary Poppins',
        phoneNumber: '+639123456789',
        birthYear: 1995,
        age: 26,
      },
      {
        name: 'John Doe',
        phoneNumber: '+639123456780',
        birthYear: 2000,
        age: 21,
      }
    ]
  ]);
})

test('checkIfValidPhoneNumber', () => {
  const myPhoneNumber = '+639998536549';
  const isMyPhoneNumberValid = checkIfValidPhoneNumber(myPhoneNumber);

  expect(isMyPhoneNumberValid).not.toBe(expect.anything(Number));
  expect(isMyPhoneNumberValid).toBe(true);
})
