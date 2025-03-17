// Déclaration "beforeEach" permet de lancer les instructions définies à l'intérieur avant chaque "it()"
const { beforeEach } = require("mocha") 

// Describe permet de définir le nom d'une campagne de test.
describe('Test Suite', () => {

  // Définition de la fonction "beforeEach"
  beforeEach(() => {
    cy.log("-----log beforeEach()-----") // J'affiche un log "beforeEach()" pour montrer qu'elle s'exécute avant chaque it()
    cy.log("J'accède au site " + '/') // J'affiche le log "J'accède au site '/'" (défini dans ) 
    .visit('/') // Va sur l'URL du site indiqué dans cypress.config.js
  })

  // Cas de test "Test Site"
  it('Test Site', () => {

    // Inutile si on utilise le beforeEach()
    // cy.visit('/') // Va sur l'URL du site indiqué dans cypress.config.js

    //*[@id="cookieChoiceDismiss"] // Id => bouton "refuser les cookies"


    let firstname = "John" // firstname => text1 

    cy.get("#text1").should('be.visible') // Vérification que l'élément est 'visible'
      .get('#text1').type(firstname) // Saisie de la valeur 
      .get("#text1").should('have.value', firstname) // Vérification contenu = valeur

    let lastname = "Doe"  // firstname => text1

    cy.wait(15000) // Attente de 15 000 milisecondes
    // Car le champ devient disponible 15 sec après la saisie dans text1

    cy.get("#text2").should('be.visible') // Vérification de l'attribut 'visible'
      .get("#text2").type(lastname) // Saisie de la valeur
      .get("#text2").should('have.value', lastname) // Vérification contenu = valeur

    // Vérification saisie "Hidden"

    var element = "text3" // Mise en variable du "locator"
    var value = "hidden" // Valuer à saisir
    cy.get("#" + element).should('be.visible') // Vérification que l'élément est 'visible'
      .get("#" + element).type(value) // Saisie de la valeur 
      .get("#" + element).should('have.value', value) // Vérification contenu = valeur

    // Vérification invisibilité de "To hide"

    var element = "hidden2" // Mise en variable du "locator"
    var value = ""
    cy.get("#" + element).should('not.be.visible')  // Vérification que l'élément n'est pas 'visible'

  })

})