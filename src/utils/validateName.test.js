import { validateName } from './validateName';

describe('validateName', () => {
  it('takes in a name, and makes sure it is longer than 3 characters, with no special characters', () => {
   expect(validateName('tater')).toBeTruthy();
  });
});