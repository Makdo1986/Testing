from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as EC
from pages.login_page import LoginPage

class HomePage:
    def __init__(self, driver, wait):
        
        # | ENVIRONNEMENT
        # |
        # v Ici, on met le driver et le wait

        self.driver = driver
        self.wait = wait

        # | LOCATORS
        # |
        # v Ici, vous pouvez mettre les locators

        self.bouton_sign_in = (By.LINK_TEXT, "Sign In")
        self.welcome_message = (By.ID, "WelcomeContent")


    # | FONCTIONS
    # | Ici, vous pouvez définir les fonctions pour interagir avec les éléments,
    # v et effectuer des actions utilisateurs

    def verifier_titre_homepage(self, titre):
        actual_title = self.driver.title
        assert actual_title == titre, f"Le titre attendu devrait être '{titre}', mais le résultat est '{actual_title}'"
    

    def cliquer_bouton_sign_in(self):
        self.wait.until(EC.element_to_be_clickable(self.bouton_sign_in)).click()


    def verifier_message_accueil(self, message):
        messageObtenu = self.wait.until(EC.visibility_of_element_located(self.welcome_message)).text
        assert messageObtenu == message, f"Le message d'accueil attendu devrait être '{message}', mais le résultat est '{messageObtenu}'"
