from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC

class ProductListPage:
    def __init__(self, driver, wait):
        
        # | ENVIRONNEMENT
        # |
        # v Ici, on met le driver et le wait

        self.driver = driver
        self.wait = wait

        # | LOCATORS
        # |
        # v Ici, vous pouvez mettre les locators

        self.search_result_title = (By.TAG_NAME, "h1")
        self.search_result_list = (By.CLASS_NAME, 'product-list')

    # | FONCTIONS
    # | Ici, vous pouvez définir les fonctions pour interagir avec les éléments,
    # v et effectuer des actions utilisateurs
        
    # Vérifier que nous sommes sur la page des vélos
    def check_product_list_title(self, wait, productName):
        resultatRecherche = wait.until(
                EC.visibility_of_element_located(self.search_result_title)
            )
        assert resultatRecherche.text == productName # "Vélos"

    def check_product_list_visibility(self, driver):
        #  Vérifier qu'il y a au moins un produit affiché
        product_list = driver.find_element(self.search_result_list)
        assert product_list.is_displayed(), "Products should be visible"
