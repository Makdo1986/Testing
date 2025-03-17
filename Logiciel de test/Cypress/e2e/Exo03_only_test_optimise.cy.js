const { beforeEach } = require("mocha")

describe('Test Suite', () => {

  beforeEach(() => {
    cy.log("-----log beforeEach()-----")
  })

  it('Test Site', () => {

    var element = "", value = ""

    cy  
        .log("J'accède au site")
        .visit('/') // Va sur l'URL du site indiqué dans cypress.config.js

        .log("Je ferme la popup cookie") // Je log le fait que je ferme la popup cookie
        .get("#cookieChoiceDismiss").click() // Je clique sur le bouton "refuser les cookies"

    // firstname => text1
    element = "text1", value = "John"

    // Pour chaque élément, je vérifie :
    //  qu'il est visible, 
    //  je saisie la valeur
    //  je vérifie que la valeur saisie est bien celle attendue

    cy
        .log("Je vérifie \"" + element + "\"")
        .get("#" + element)
            .should('be.visible') // Vérification de l'attribut 'visible'
            .type(value) // Saisie de la valeur 
            .should('have.value', value) // Vérification contenu = valeur

        .log("La même chose mais en 1 seule ligne :)")
        .get("#" + element).should('be.visible').type(value).should('have.value', value + value)

    // N'est plus utile si on indique une "defaultCommandTimeout : 16000," dans le "cypress.config.js"
    // cy.wait(15000) // Attente de 15 000 milisecondes 
    // Car le champ devient disponible 15 sec après la saisie dans text1

    element = "text2", value = "Doe"

    cy
        .log("Je vérifie \"" + element + "\"")
        .get("#" + element)
            .should('be.visible')
            .type(value) 
            .should('have.value', value)

    // Vérification saisie "Hidden"

    element = "text3", value = "hidden"
    
    cy
        .log("Je vérifie \"" + element + "\"")
        .get("#" + element)
            .should('be.visible')
            .type(value) 
            .should('have.value', value)

    // Vérification invisibilité de "To hide"

    element = "hidden2", value = ""
    
    cy
        .log("Je vérifie \"" + element + "\"")
        .get("#" + element).should('not.be.visible')


    // Vérification des checkboxs 1 bike, 2 car et 3 boat

    var i = 0
    
    i += 1, element = "check" + i
    cy
        .log("Je coche \"" + element + "\"")
        .get("#" + element)
            .should('be.visible')
            .check() // Je coche la checkbox associée
            
    i += 1, element = "check" + i
    cy
        .log("Je décoche \"" + element + "\"")
        .get("#" + element)
            .should('be.visible')
            .uncheck() // Je décoche la checkbox associée
            
    i += 1, element = "check" + i
    cy
        .log("Je coche \"" + element + "\"")
        .get("#" + element)
            .should('be.visible')
            .check() // Je coche la checkbox associée
    
    // Vérification des radios 1 homme, 2 femme

    element = "radio"
    
    cy
        .log
        ("Je vérifie la non sélection des 2 radios")
        .get("#" + element + "1").should('not.be.checked')
        .get("#" + element + "2").should('not.be.checked')
    
    
    var i = 0
    i += 1, element = "radio" + i
    
    cy
        .log("Je sélectionne \"" + element + "\"")
        .get("#" + element)
            .should('be.visible')
            .check()
            .should('be.checked')
    
    i += 1, element = "radio" + i

    cy
        .log("Je sélectionne \"" + element + "\"")
        .get("#" + element)
            .should('be.visible')
            .check()
            .should('be.checked')

    // A voir pour le passage en fonction : paramètre la radio à cocher
    
    // J'uploade un fichier contenu dans "fixtures"
    let ficname = "Fichier à uploader.txt"
    cy
        .log('J\'uploade  "' + ficname + '"')
        .get("input[type='file']")
            .should('be.visible')
            .attachFile("../fixtures/" + ficname);

    // Je sélectionne des données dans une liste
    cy.log("Je sélectionne des données dans une liste")
    
    element = "#Carlist"
    cy.get(element).should('be.visible')

    value = "BMW"
    cy.log("Je sélectionne \"" + value + "\"")
    cy.get(element).should('be.visible').select(value).should('have.value', value + " Car") // la liste retourne un autre élément que celui indiqué (clé, valeur ?)
    cy.wait(1000)
    value = "Opel"
    cy.log("Je sélectionne \"" + value + "\"")
    cy.get(element).should('be.visible').select(value).should('have.value', value + " Car") // la liste retourne un autre élément que celui indiqué (clé, valeur ?)
    cy.wait(1000)
    value = "Audi"
    cy.log("Je sélectionne \"" + value + "\"")
    cy.get(element).should('be.visible').select(value).should('have.value', value + " Car") // la liste retourne un autre élément que celui indiqué (clé, valeur ?)
    cy.wait(1000)
    value = "Toyota"
    cy.log("Je sélectionne \"" + value + "\"")
    cy.get(element).should('be.visible').select(value).should('have.value', value + " Car") // la liste retourne un autre élément que celui indiqué (clé, valeur ?)
    cy.wait(1000)
    value = "Renault"
    cy.log("Je sélectionne \"" + value + "\"")
    cy.get(element).should('be.visible').select(value).should('have.value', value + " Car") // la liste retourne un autre élément que celui indiqué (clé, valeur ?)
    cy.wait(1000)
    value = "Maruti Car"
    cy.log("Je sélectionne \"" + value + "\"")
    cy.get(element).should('be.visible').select(value).should('have.value', value) // la liste retourne un autre élément que celui indiqué (clé, valeur ?)
    cy.wait(1000)
    value = "Volvo"
    cy.log("Je sélectionne \"" + value + "\"")
    cy.get(element).should('be.visible').select(value).should('have.value', value + " Car") // la liste retourne un autre élément que celui indiqué (clé, valeur ?)

    // Bout de code pour sélectionner le dernier élément // ChatGPT
    cy
        .log("Je sélectionne \"le dernier de la liste\"")
        .get("#Carlist")
            .find('option')
            .its('length')
            .then((len) => {
                cy.get("#Carlist").select(len - 1)
            })

    // Gestion d'une liste multiple

    cy.get("select[name='FromLB']") // Dans la 1ère liste
        .select([1, 3, 5]) // Je sélectionne la 2ème, 4ème et 6ème valeur
        .invoke('val') // Je récupère la liste des valeurs associées
        .should('deep.equal', ['Russia', 'Japan', 'India']) // Je fais une assertion sur les valeurs attendues
    
    // Je transfère les valeurs de la liste "FromLB" vers "ToLB"
    cy.get("input[onclick='move(this.form.FromLB,this.form.ToLB)']").click() 

    cy.get("select[name='ToLB']") // Dans la 2ème liste
        .select([1]) // Je sélectionne la 2ème valeur
        .invoke('val') // Je récupère la liste associée
        .should('deep.equal', ['Japan']) // Je vérifie qu'elle contient "Japan"

    // Je transfère les valeurs de la liste "ToLB" vers "FromLB"
    cy.get("input[onclick='move(this.form.ToLB,this.form.FromLB)']").click()

  })
    
})