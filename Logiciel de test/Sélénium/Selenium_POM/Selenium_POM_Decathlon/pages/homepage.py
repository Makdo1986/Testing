from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as EC
# from pages.productlist_page import LoginPage

from selenium.common.exceptions import NoSuchElementException

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

        self.reject_button_cookie = (By.CLASS_NAME, "didomi-continue-without-agreeing")
        self.search_box = (By.XPATH, "//input[@type='search']")


    # | FONCTIONS
    # | Ici, vous pouvez définir les fonctions pour interagir avec les éléments,
    # v et effectuer des actions utilisateurs

    def verifier_titre_homepage(self, titre):
        actual_title = self.driver.title
        assert actual_title == titre, f"Le titre attendu devrait être '{titre}', mais le résultat est '{actual_title}'"
    
    def dismiss_cookie(self, wait):
        # Continuer sans accepter les cookies
        try:
            wait.until(EC.element_to_be_clickable(self.reject_button_cookie)).click()
        except NoSuchElementException:
            print("Cookies pop-up is not present")
    
    def seek_and_load(self, wait, productName):
         # Récupérer le champ de recherche en utilisant le xpath
        sb = wait.until(
            EC.element_to_be_clickable(self.search_box)
        )

        # Ecrire Vélo dans le champ de recherche et simuler le bouton Entrée
        sb.clear()
        sb.send_keys(productName) # "Vélo"
        sb.send_keys(Keys.RETURN)
