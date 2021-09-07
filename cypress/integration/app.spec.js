describe('redirect', () => {
    it('should redirect to the overview page', () => {
        cy.visit('/')
        cy.url().should('include', '/me')
        cy.get("a").contains("@tsubaki_dev");
    })
})

describe('profile', () => {
    it('displays profile', () => {
        cy.visit('/')
        cy.url().should('include', '/me')

        cy.get("h2").contains("itsubaki")
        cy.get("p").contains("followers")
        cy.get("p").contains("following")
        cy.get("p").contains("Tokyo, Japan");
        cy.get("a").contains("@tsubaki_dev");
    })
})
