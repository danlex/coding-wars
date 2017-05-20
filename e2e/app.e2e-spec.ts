import { CodingWarsPage } from './app.po';

describe('coding-wars App', () => {
  let page: CodingWarsPage;

  beforeEach(() => {
    page = new CodingWarsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
