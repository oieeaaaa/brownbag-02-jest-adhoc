export const getRemainderSlicesOfPizza = (totalSlices, divisor) => totalSlices % divisor;

export const addContactAgeInContactGroups = contactGroups => {
  const currentYear = (new Date()).getUTCFullYear();

  return contactGroups.map(contactGroup => contactGroup.map(contact => ({
    ...contact,
    age: currentYear - contact.birthYear
  })));
};

export const checkIfValidPhoneNumber = (phoneNumber) => (/\+639\d{9}/).test(phoneNumber);
