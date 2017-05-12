import { Projet12NgEmployesIteration1Page } from './app.po';

describe('projet12-ng-employes-iteration1 App', () => {
  let page: Projet12NgEmployesIteration1Page;

  beforeEach(() => {
    page = new Projet12NgEmployesIteration1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
