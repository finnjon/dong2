import { Dong2Page } from './app.po';

describe('dong2 App', function() {
  let page: Dong2Page;

  beforeEach(() => {
    page = new Dong2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
