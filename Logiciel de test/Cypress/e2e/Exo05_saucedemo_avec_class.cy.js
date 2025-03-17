import { Login , Product, Cart, Info, Final } from "./PageObject/SauceDemo"  

describe("Cypress POM Test Suite", function() {
    it("Login avec un id et un mot de passe valide", function() {

        const longinpage = new Login()
        const productpage = new Product()
        const cartpage = new Cart()
        const infopage = new Info()
        const finalpage = new Final()

        cy.log('Accès au site')
        longinpage.navigate()

        cy.log('Connexion KO')
        longinpage.id('locked_out_user')
        longinpage.password('secret_sauce')
        longinpage.submit_KO()

        cy.log('Connexion OK => produit')
        longinpage.id('standard_user')
        longinpage.password('secret_sauce')
        longinpage.submit_OK()
        longinpage.check_OK()

        cy.log('Sélection produit => cart')
        productpage.sort()
        productpage.choice(1)
        productpage.choice(2)
        productpage.submit()
        productpage.check_OK()

        cy.log('Contenu cart => info')
        cartpage.submit()
        cartpage.check_OK()

        cy.log('Données info => final')
        infopage.data("Prénom", "Nom", "Code postal")
        infopage.submit()
        infopage.check_OK()

        cy.log('Final')
        finalpage.submit()
        finalpage.check_OK()

    })
})