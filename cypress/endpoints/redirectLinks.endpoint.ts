class RedirectLinksEndpoint {
  public url: string;

  public alias: string;

  constructor() {
    this.url = '/resources/articles/ai';
    this.alias = 'redirectLinkResponse';
  }

  public getResponse() {
    cy.request('GET', this.url).as(this.alias);
  }

  public testStatusCode() {
    cy.get(`@${this.alias}`).its('status').should('equal', 200);
  }

  public testBody() {
    cy.get(`@${this.alias}`).its('body').should('have.length', 4);
    cy.get(`@${this.alias}`)
      .its('body')
      .each((value) => expect(value).to.have.all.keys('group', 'link_structure'));
  }
}

export default RedirectLinksEndpoint;
