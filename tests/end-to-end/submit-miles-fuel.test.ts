import { expect } from 'chai'
import { frontendUrlPrefix } from './config'


describe('submits miles and fuel', () => {
  it('for 0 miles and 0 litres', () => {
    const frontendUrlPrefix = require('./config').frontendUrlPrefix
    console.log("Before ping")
    browser.url(`${frontendUrlPrefix}/mpg-form`)

    browser.setValue('[data-miles]', '0')
    browser.setValue('[data-litres]', '0')
    browser.submitForm('[data-mpg-form]')
    const mpg = browser.getText('[data-mpg]')
    expect(parseInt(mpg)).to.equals(0)
  });
});