describe('Teste de Login', () => {
  it('Login com sucesso', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('xxxxxxxxxxxxxxx')
    cy.get('[data-testid="senha"]').type('xxxxxx')
    cy.get('[data-testid="entrar"]').click() 
  })
})
