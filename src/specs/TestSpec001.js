//import LoginPage from '../pages/Login';
//import { expect } from 'chai';

describe('Login', () => {
  it('should login successfully', () => {
    browser.url('https://www.google.com');
    var title = browser.getTitle();
    console.log(title);
  });
});
