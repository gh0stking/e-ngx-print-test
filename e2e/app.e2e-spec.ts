import { ENgxPrintTestPage } from './app.po';

describe('e-ngx-print-test App', () => {
  let page: ENgxPrintTestPage;

  beforeEach(() => {
    page = new ENgxPrintTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
