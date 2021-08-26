export const toCamelCaseFullName = fullName =>
  fullName
    .split(/\s/)
    .map(name => name[0].toUpperCase() + name.substr(1)).join(' ');
