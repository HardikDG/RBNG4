import { ReceipeBookPage } from './app.po';

describe('receipe-book App', () => {
  let page: ReceipeBookPage;

  beforeEach(() => {
    page = new ReceipeBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
