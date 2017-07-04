import { AgendaAppPage } from './app.po';

describe('agenda-app App', () => {
  let page: AgendaAppPage;

  beforeEach(() => {
    page = new AgendaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
