import { validateEmail } from './validateEmail';

describe('validateEmail', () => {
  it('takes in an email and makes sure its good yo', () => {
   expect(validateEmail('tater')).toBeFalsy();
   expect(validateEmail('tater@')).toBeFalsy();
   expect(validateEmail('tater@whatever.com')).toBeTruthy();
   expect(validateEmail('tater.adsfd.dsafas@whatever.com')).toBeTruthy();
   expect(validateEmail('tater.ad_sfd.dsafas@whatever.com')).toBeTruthy();
  });

});