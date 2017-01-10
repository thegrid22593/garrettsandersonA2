import { GarrettsandersonPage } from './app.po';

describe('garrettsanderson App', function() {
  let page: GarrettsandersonPage;

  beforeEach(() => {
    page = new GarrettsandersonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
