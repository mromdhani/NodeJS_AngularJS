import { Projet11NgHelloPage } from './app.po';

describe('projet11-ng-hello App', () => {
  let page: Projet11NgHelloPage;

  beforeEach(() => {
    page = new Projet11NgHelloPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
