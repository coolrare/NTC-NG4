import { NTCNG4Page } from './app.po';

describe('ntc-ng4 App', () => {
  let page: NTCNG4Page;

  beforeEach(() => {
    page = new NTCNG4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
