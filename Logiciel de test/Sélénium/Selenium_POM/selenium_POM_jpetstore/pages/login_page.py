from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC

class LoginPage:
    def __init__(self, driver, wait):
        
        # | ENVIRONNEMENT
        # |
        # v Ici, on met le driver et le wait

        self.driver = driver
        self.wait = wait

        # | LOCATORS
        # |
        # v Ici, vous pouvez mettre les locators

        self.input_username = (By.NAME, "username")
        self.input_password = (By.NAME, "password")
        self.bouton_login = (By.NAME, "signon")


    # | FONCTIONS
    # | Ici, vous pouvez définir les fonctions pour interagir avec les éléments,
    # v et effectuer des actions utilisateurs

    def se_connecter(self, username, password):
        element_user = self.wait.until(EC.element_to_be_clickable(self.input_username))
        element_user.send_keys(username)

        element_password = self.wait.until(EC.element_to_be_clickable(self.input_password))
        element_password.clear()
        element_password.send_keys(password)

        self.wait.until(EC.element_to_be_clickable(self.bouton_login)).click()
