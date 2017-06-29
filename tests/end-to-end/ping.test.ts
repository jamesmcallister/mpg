import { expect } from 'chai'


describe("ping and pong", () => {

  it("it gets ping", () => {
    const frontendUrlPrefix = require('./config').frontendUrlPrefix
    console.log("Before ping")
    browser.url(`${frontendUrlPrefix}/ping`)
    const text = browser.getText('//body')
    console.log(text)
    expect(text.toLocaleLowerCase()).to.include('pong')
  });
});
