describe('index.ts', () => {

  it('Should load index.ts', () => {
    cy.visit('/')
    cy.get('body').find('#indexPage')
  })
})

export {}
