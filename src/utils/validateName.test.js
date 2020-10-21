import { validateName } from './validateName';

describe('validateName', () => {
  it('takes in a name, and makes sure it is longer than 1 characters, but not longer than 25', () => {
   expect(validateName('tater')).toBeTruthy();
   expect(validateName('')).toBeFalsy();
   expect(validateName('asdfghjklqwertyuiopzxcvbn')).toBeFalsy();
  });

  it('takes in a name, and makes sure has no special characters', () => {
   expect(validateName('tater')).toBeTruthy();
   expect(validateName('tater!@!@')).toBeFalsy();
   expect(validateName('1234')).toBeFalsy();
  });
});