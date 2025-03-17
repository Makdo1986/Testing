class LoginPage { // LoginPage
    
    constructor() { // On contuit les locators utiles
        this.userIdInput = '#userId';
        this.passwordInput = '#password';
        this.loginButton = '#loginButton';
        this.errorMessage = '#errorMessage';
    }

    visit() { // Naviguer vers le site
        cy.visit('/login');
    }

    enterUserId(userId) { // on entre l'id user
        cy.get(this.userIdInput).type(userId);
    }

    enterPassword(password) { // on entre le mot de passe
        cy.get(this.passwordInput).type(password);
    }

    clickLogin() { // on clique sur le bouton "se connecter
        cy.get(this.loginButton).click();
    }

    checkLoginSuccess() { // cas passant : on vérifie que l'url contient "/dashboard"
        cy.url().should('include', '/dashboard');
    }

    checkLoginFailure() { // cas non passant : un message d'erreur doit être visible
        cy.get(this.errorMessage).should('be.visible');
    }
}

export default LoginPage; // Comme on définit une classe, il faut indiquer laquelle on exporte par défaut.