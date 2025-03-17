const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : "https://only-testing-blog.blogspot.com/2014/01/textbox.html?",
    defaultCommandTimeout : 16000,  // Permet de définir un temps en milisecondes durant lequel le programme relance une instruction qui a échoué.
                                    // Cypress va chercher l’élément jusqu'à 16 secondes avant d’échouer s’il n’est pas trouvé ou pas visible.
    specPattern: [
      "cypress/e2e/**/*.spec.js", // pour inclure les fichiers .spec.js
      "cypress/e2e/**/*.cy.js",   // pour inclure les fichiers .cy.js
      "cypress/e2e/**/*.js"       // pour inclure tous les fichiers .js
    ],

  },
});
