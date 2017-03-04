import { DoubanMoviePage } from './app.po';

describe('douban-movie App', () => {
  let page: DoubanMoviePage;

  beforeEach(() => {
    page = new DoubanMoviePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
