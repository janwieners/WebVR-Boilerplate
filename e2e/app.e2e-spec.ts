import { WebVRBoilerplatePage } from './app.po';

describe('web-vr-boilerplate App', () => {
  let page: WebVRBoilerplatePage;

  beforeEach(() => {
    page = new WebVRBoilerplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
