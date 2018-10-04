import { DeteccionDelCambioNikito22Page } from './app.po';

describe('deteccion-del-cambio-nikito22 App', function() {
  let page: DeteccionDelCambioNikito22Page;

  beforeEach(() => {
    page = new DeteccionDelCambioNikito22Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
