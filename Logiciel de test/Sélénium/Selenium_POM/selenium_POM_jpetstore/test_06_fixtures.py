# import pytest
# from selenium import webdriver

# from selenium.webdriver.common.by import By
# from selenium.webdriver.support.wait import WebDriverWait
# from selenium.webdriver.support import expected_conditions as EC
# from selenium.webdriver.common.keys import Keys
# from selenium.common.exceptions import NoSuchElementException

# #Fixture pour initialiser le Driver
# @pytest.fixture
# def driver():
    
#     """
#     Définir des options pour le driver. Pour chrome, garder
#     le navigateur ouvert si driver.quit() n'est pas appelée
#     """
#     options = webdriver.ChromeOptions()
#     options.add_experimental_option("detach", True)

#     #  Instancier le navigateur Chrome avec les options
#     driver = webdriver.Chrome(options)
    
#     # Instancier un wait explicit de 10 secondes
#     wait = WebDriverWait(driver, 10)
    
#     # Ouvrir en plein écran
#     driver.maximize_window()

#     # Naviguer vers le site de décathlon
#     driver.get("https://www.decathlon.fr/")
    
#     # Continuer sans accepter les cookies
#     try:
#         wait.until(
#                 EC.element_to_be_clickable((By.CLASS_NAME, "didomi-continue-without-agreeing"))
#             ).click()
#     except NoSuchElementException:
#         print("Cookies pop-up is not present")
    
#     yield driver
    
#     # Fermer le navigateur
#     driver.quit()
    

# def test_product(driver):
    
#     # Instancier un wait explicit de 10 secondes
#     wait = WebDriverWait(driver, 10)

#     # Récupérer le champ de recherche en utilisant le xpath
#     search_box = wait.until(
#             EC.element_to_be_clickable((By.XPATH, "//input[@type='search']"))
#         )

#     # Ecrire Vélo dans le champ de recherche et simuler le bouton Entrée
#     search_box.clear()
#     search_box.send_keys("Vélo")
#     search_box.send_keys(Keys.RETURN)

#     # Vérifier que nous sommes sur la page des vélos
#     resultatRecherche = wait.until(
#             EC.visibility_of_element_located((By.TAG_NAME, "h1"))
#         )
#     assert resultatRecherche.text == "Vélos"

#     #  Vérifier qu'il y a au moins un produit affiché
#     product_list = driver.find_element(By.CLASS_NAME, 'product-list')
#     assert product_list.is_displayed(), "Products should be visible"

# def test_cart_access(driver):
    
#      # Instancier un wait explicit de 10 secondes
#     wait = WebDriverWait(driver, 10)
    
#     # Naviguer vers le site de décathlon
#     driver.get("https://www.decathlon.fr/")
    
#     wait.until(
#         EC.element_to_be_clickable(
#             (By.CSS_SELECTOR , 'a[href="/checkout/cart"]')
#         )
#     ).click()
    
#     assert wait.until(
#         EC.element_to_be_clickable(
#             (By.CLASS_NAME , 'checkout-layout')
#         )
#     ).is_displayed


import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException

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


def test_recherche(driver):

    # Instancier un wait explicit
    wait = WebDriverWait(driver, 10)

    # Vérifier que le titre de la page est correct
    assert driver.title == 'DECATHLON | Magasin de Sport'

    # Continuer sans accepter les cookies
    try:
        wait.until(
                EC.element_to_be_clickable((By.CLASS_NAME, "didomi-continue-without-agreeing"))
            ).click()
    except NoSuchElementException:
        print("Cookies pop-up is not present")

    # Récupérer le champ de recherche en utilisant le xpath
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


def test_panier(driver):

    # Instancier un wait explicit
    wait = WebDriverWait(driver, 10)

    # Continuer sans accepter les cookies
    wait.until(
            EC.element_to_be_clickable((By.CLASS_NAME, "didomi-continue-without-agreeing"))
        ).click()

    # Cliquer sur panier
    wait.until(
            EC.element_to_be_clickable((By.LINK_TEXT, "Mon panier"))
        ).click()
    
    # Vérifier que nous sommes sur la page du panier
    header_text = wait.until(EC.visibility_of_element_located((By.TAG_NAME, 'h1'))).text
    assert header_text == "Panier"
    
    
# Rapport HTML pytest possible :
# commande à saisir : pytest NOM_FICHIER_TEST --html=NOM_RAPPORT.html --self-contained-html