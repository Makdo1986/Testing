// Exercice Cypress 
// séparer vos describe et vos it
// Faite des nomenclatures clair
// Essayer plusieurs méthode (doc page 36)
 
// Site : https://www.saucedemo.com/v1/
 
// On se connecte avec un locket out user, on s’assure du message d’erreur
// On se connecte normalement : 
// On tri les articles tu plus cher au moins cher
// On sélectionne les 2 plus cher
// On va sur le panier
// On clique sur checkout, on renseigne nos informations personnelles
// On finish l’achat, et vérifie que notre commande est passée 

const { beforeEach } = require("mocha")

describe('Test Suite', () => {
    
    let url_connexion = 'https://www.saucedemo.com/v1/'
    let url_connecte = 'https://www.saucedemo.com/v1/inventory.html'
    let url_panier = 'https://www.saucedemo.com/v1/cart.html'
    let url_checkout = 'https://www.saucedemo.com/v1/checkout-step-one.html'
    let url_checkout_step_2 = 'https://www.saucedemo.com/v1/checkout-step-two.html'
    let url_checkout_complete = 'https://www.saucedemo.com/v1/checkout-complete.html'

    let waiting_time = 4000
    
    beforeEach(() => {
        
    })

    it.skip('Test : connexion.', () => {

        cy

            .log('J\'accède au site "' + url_connexion + '"')
            .visit(url_connexion) // Va sur l'URL du site indiqué

            .log("-----saisie-user-locked-out-+-password-----")
            .get('h3[data-test="error"]').should('not.exist') // //!\\ différence entre not.exist et not.be.visible
            .get('#user-name').should('be.visible').type("locked_out_user")
            .get('#password').should('be.visible').type("secret_sauce")

            .log("-----clic-login-button-KO-----")
            .get('#login-button').click()

            .log("-----vérification-message-erreur-----")
            .get('h3[data-test="error"]').should('be.visible')

            .wait(waiting_time) // Attente de [waiting_time] secondes pour vérifier le formulaire

            .log("-----saisie-standard-user-+-password-----")
            .get('#user-name').should('be.visible')
                .clear()
                .type("standard_user")
            .get('#password').should('be.visible')
                .clear()
                .type("secret_sauce")

            .wait(waiting_time) // Attente de [waiting_time] secondes pour vérifier le formulaire

            .log("-----clic-login-button-OK-----")
            .get('#login-button').click()

            .log("-----Vérification de l'url attendue-----")
            .url()
            // cy.screenshot() pour prendre une screenshoot //!\\ ne fonctionne pas sans cy. devant   

            .wait(waiting_time) // Attente de [waiting_time] secondes pour vérifier le formulaire

    })

    it('Test : tri prix, sélection 2 articles, panier.', () => {

        cy

            .log('J\'accède au site "' + url_connecte + '"')
            .visit(url_connecte) // Va sur l'URL du site indiqué dans cypress.config.js

            .log("-----Tri-des-articles-par-prix-décroissant-----")
            

            .wait(waiting_time) // Attente de  secondes pour vérifier le formulaire

            .log("-----Ajout du premier et deuxième article dans le panier-----")
            .log("-----via bouton 'add to chart' qui passe 'remove' après ajout-----")
            // Sélectionne la liste des produits et clique sur le bouton "ADD TO CART" des deux premiers

            .log("-----Méthode :nth-child(n)-----")
            // première méthode possible avec ":nth-child(n) => n => n er/nd élément
            .get('.inventory_item:nth-child(1) .btn_inventory')
                .click().should('have.text', 'REMOVE')
                .click().should('have.text', 'ADD TO CART')
            .get('.inventory_item:nth-child(2) .btn_inventory')
                .click().should('have.text', 'REMOVE')
                .click().should('have.text', 'ADD TO CART')

            .log("-----Méthode .eq(index)-----")
            // deuxième écriture possible avec ".eq(index)"
            .get('.btn_inventory').eq(0)
                .click().should('have.text', 'REMOVE')
                .click().should('have.text', 'ADD TO CART')
            .get('.btn_inventory').eq(1)
                .click().should('have.text', 'REMOVE')
                .click().should('have.text', 'ADD TO CART')
            
            // deuxième écriture possible avec .first() .next() .find()
            .log("-----Méthode .first() .next() .find()-----")
            .get('.inventory_item').first().next().find('.btn_inventory')
                .click().should('have.text', 'REMOVE')
            .get('.inventory_item').first().find('.btn_inventory')
                .click().should('have.text', 'REMOVE')

            // Permet de mettre scroller jusqu'à l'élément
            .get('.app_logo').scrollIntoView().should('be.visible')
            
            .wait(waiting_time) // Attente de [waiting_time] secondes pour vérifier le formulaire

            .log("-----Accès au panier-----")
            .get('#shopping_cart_container').click()

            .log("-----Vérification de l'url attendue-----")
            .url().should('eq', url_panier)

            .wait(waiting_time) // Attente de [waiting_time] secondes pour vérifier le formulaire

            .log("-----Clique sur checkout-----")
            .get('.btn_action').click()

            .log('-----J\'accède au site "' + url_checkout + '"-----')
            .url().should('eq', url_panier)
            //.visit(url_checkout) // Va sur l'URL du site indiqué

            .wait(waiting_time) // Attente de [waiting_time] secondes pour vérifier le formulaire

            .log('-----Je saisie les informations demandées : Nom, Prénom, Zip Code-----')
            let i = 0
            i += 1; cy.get('.checkout_info .form_input:nth-child(' + i + ')').should('be.visible').type("Prénom")
            i += 1; cy.get('.checkout_info .form_input:nth-child(' + i + ')').should('be.visible').type("Nom")
            i += 1; cy.get('.checkout_info .form_input:nth-child(' + i + ')').should('be.visible').type("Code postal")

            // Permet de mettre scroller jusqu'à l'élément
            .get('.app_logo').scrollIntoView().should('be.visible')

            .wait(waiting_time) // Attente de [waiting_time] secondes pour vérifier le formulaire
        
            .log('-----Vérification de la commande-----')
            cy.get('.btn_primary').click()

            .wait(waiting_time) // Attente de [waiting_time] secondes pour vérifier le formulaire

            .log("-----Je vérifie l'url '" + url_checkout_step_2 + "'-----")
            .url().should('eq', url_checkout_step_2) // Va sur l'URL du site indiqué

            .wait(waiting_time) // Attente de [waiting_time] secondes pour vérifier le formulaire

            .log('-----Finaliation de la commande-----')
            .get('a.btn_action.cart_button[href="./checkout-complete.html"]').click()

            .log("-----Je vérifie l'url '" + url_checkout_complete + "'-----")
            .url().should('eq', url_checkout_complete) // Va sur l'URL du site indiqué
            
            .log('-----Je vérifie la présence de l\'image poney-----')
            // Les deux écritures sont bonnes
            .get('img.pony_express').should("be.visible") 
            .get('img[class="pony_express"]').should("be.visible")
            
    })


})
