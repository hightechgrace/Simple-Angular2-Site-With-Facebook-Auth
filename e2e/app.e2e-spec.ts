import { SocialTimerPrPage } from './app.po';

describe('social-timer-pr App', function() {
  let page: SocialTimerPrPage;

  beforeEach(() => {
    page = new SocialTimerPrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
