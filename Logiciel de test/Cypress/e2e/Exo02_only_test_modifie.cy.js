const { beforeEach } = require("mocha")

describe('Test Suite', () => {

  beforeEach(() => {
    cy.log("-----log beforeEach()-----")
        .log("J'accède au site")
        .visit('/') // Va sur l'URL du site indiqué dans cypress.config.js
  })

  it('Test first name', () => {

    // Inutile avec si on utilise le beforeEach()
    // cy.visit('/') // Va sur l'URL du site indiqué dans cypress.config.js

    let firstname = "John" // firstname => text1

    cy.get("#text1").should('be.visible') // Vérification de l'attribut 'visible'
      .get('#text1').type(firstname) // Saisie de la valeur 
      .get("#text1").should('have.value', firstname) // Vérification contenu = valeur

  })

  it('Test last name', () => {

    let lastname = "Doe"  // firstname => text1

    cy.wait(15000) // Attente de 15 000 milisecondes
    // Car le champ devient disponible 15 sec après la saisie dans text1

    cy.get("#text2").should('be.visible')
      .get("#text2").type(lastname) 
      .get("#text2").should('have.value', lastname)

  })

  it('Test hidden', () => {

    // Vérification saisie "Hidden"

    var element = "text3" 
    var value = "hidden"
    cy.get("#" + element).should('be.visible')
      .get("#" + element).type(value) 
      .get("#" + element).should('have.value', value)

  })

  it('Test To hide', () => {

    // Vérification invisibilité de "To hide"

    var element = "hidden2"
    var value = ""
    cy.get("#" + element).should('not.be.visible')

  })

})