import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException

from selenium.webdriver.support.ui import Select

@pytest.fixture
def driver():

    # Instancier le driver Chrome avec ses options
    browser = webdriver.Chrome()
    
    # Aller sur la page de Décathlon
    browser.get("https://www.decathlon.fr/")

    # Maximiser la fenêtre
    browser.maximize_window()
    
    yield browser  # Provide the driver to the test
    
    browser.quit()  # Cleanup after test


@pytest.fixture
def wait(driver):
    # Instantiating explicit wait for the given driver
    return WebDriverWait(driver, 10)

# Exercice 07 :
# 1. Naviguer sur la page décathlon
# 2. Effectuer la recherche d'un produit de votre choix
# 3. Vérifier que les produits sont initialements triés selon le filtre "meilleurs ventes"
# 4. Changer le tri en sélectionnant une option en se basant sur sa valeur
# 5. Changer le tri en sélectionnant une option en se basant sur sa texte
# 6. Changer le tri en sélectionnant une option en se basant sur sa place dans la liste

def test_default_sort(driver, wait):
    
     # Continuer sans accepter les cookies
    try:
        wait.until(
                EC.element_to_be_clickable((By.CLASS_NAME, "didomi-continue-without-agreeing"))
            ).click()
    except NoSuchElementException:
        print("Cookies pop-up is not present")
    
    search_box = wait.until(
                    EC.element_to_be_clickable((By.XPATH, "//input[@type='search']"))
                )
        
    # Ecrire Vélo dans le champ de recherche et simuler le bouton Entrée
    search_box.clear()
    search_box.send_keys("Vélo")
    search_box.send_keys(Keys.RETURN)

    # Vérifier que nous sommes sur la page des vélos
    resultatRecherche = wait.until(
            EC.visibility_of_element_located((By.TAG_NAME, "h1"))
        )
    assert resultatRecherche.text == "Vélos"

    # Vérifier qu'il y a au moins un produit affiché
    product_list = driver.find_element(By.CLASS_NAME, 'product-list')
    assert product_list.is_displayed(), "Products should be visible"
    
    sort_select = Select(
        wait.until(
            EC.element_to_be_clickable(
                (By.ID , "list-sort-select")
            )
        )
    )
    
    # Valeur par défaut
    assert sort_select.first_selected_option.text == "Meilleures ventes"
    # Value
    sort_select.select_by_value("1")
    assert sort_select.first_selected_option.text == "Prix croissants"
    # Texte
    sort_select.select_by_visible_text("Prix décroissants")
    assert sort_select.first_selected_option.text == "Prix décroissants"
    # Position
    sort_select.select_by_index(4)
    assert sort_select.first_selected_option.text == "Note des clients"