// Ci-dessous : Une classe par "page"

class Login{ // Partie "Login"
    
    // On accède au site 
    navigate() {
        cy.visit('https://www.saucedemo.com/v1/')
    }
    
    // Permet de saisir "id_value" dans le champ "user-name"
    id(id_value) {
        cy.get('#user-name')
            .should('be.visible')
            .clear()
            .type(id_value)
        //return this
    }
    
    // Permet de saisir "password_value" dans le champ "password"
    password(password_value) {
        cy.get('#password')
            .should('be.visible')
            .clear()
            .type(password_value)
    }
    
    // Permet de valider l'envoi du formulaire
    submit() {
        cy.get('#login-button').click()
    }
    
    //
    check_OK(OK = true) {
        if (OK) {
            cy.url().should('be.equal', 'https://www.saucedemo.com/v1/inventory.html')
        } else {
            cy.url().should('be.equal', 'https://www.saucedemo.com/v1/')
        }
    }
    
}

class Product {

    sort() {
        cy.get('select[class="product_sort_container"]').select("Price (high to low)")
    }

    choice(nb) {
        cy.get('.inventory_item:nth-child(' + nb + ') .btn_inventory').click().should('have.text', 'REMOVE')
        cy.get('.app_logo').scrollIntoView().should('be.visible')
    }

    submit() {
        cy.get('#shopping_cart_container').click()
    }

    check_OK() {
        cy.url().should('eq', 'https://www.saucedemo.com/v1/cart.html')
    }

}

class Cart {
    submit() {
        cy.get('.btn_action').click()
    }
    check_OK() {
        cy.url().should('eq', 'https://www.saucedemo.com/v1/checkout-step-one.html')
    }
}

class Info {

    data(firstname, lastname, zipcode) {
        cy.log('-----Je saisie les informations demandées : Nom, Prénom, Zip Code-----')
                let i = 0
                i += 1; cy.get('.checkout_info .form_input:nth-child(' + i + ')').should('be.visible').type(firstname)
                i += 1; cy.get('.checkout_info .form_input:nth-child(' + i + ')').should('be.visible').type(lastname)
                i += 1; cy.get('.checkout_info .form_input:nth-child(' + i + ')').should('be.visible').type(zipcode)
        // Permet de mettre scroller jusqu'à l'élément
        cy.get('.app_logo').scrollIntoView().should('be.visible')
    }

    submit() {
        cy.get('.btn_primary').click()
    }

    check_OK() {
        cy.url().should('eq', 'https://www.saucedemo.com/v1/checkout-step-two.html') // Va sur l'URL du site indiqué
    
    }
}

class Final {
    submit() {
        cy.get('a.btn_action.cart_button[href="./checkout-complete.html"]').click()
    }
    check_OK() {
        cy.url().should('eq', 'https://www.saucedemo.com/v1/checkout-complete.html') // Va sur l'URL du site indiqué
        cy.get('img.pony_express').should("be.visible") 
    }
}

export { Login, Product , Cart , Info , Final }

// export default Login
// export { Product , Cart , Info , Final }