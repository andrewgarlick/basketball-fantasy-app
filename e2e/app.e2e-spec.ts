import { BasketballFantasyAppPage } from './app.po';

describe('basketball-fantasy-app App', function() {
  let page: BasketballFantasyAppPage;

  beforeEach(() => {
    page = new BasketballFantasyAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
