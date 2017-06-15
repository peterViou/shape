import { ShapeAngularPage } from './app.po';

describe('shape-angular App', () => {
  let page: ShapeAngularPage;

  beforeEach(() => {
    page = new ShapeAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
