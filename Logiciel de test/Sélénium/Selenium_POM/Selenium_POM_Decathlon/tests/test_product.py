from pages.homepage import HomePage
from pages.productlist_page import ProductListPage

import pytest
from selenium import webdriver
from selenium.webdriver.support.wait import WebDriverWait

@pytest.fixture
def driver():

    # Tout ce qui vient avant le yield sera exécuté avant
    # le lancement des tests.

    options = webdriver.ChromeOptions()
    options.add_experimental_option("detach", True)
    
    # Instancier le driver Chrome avec ses options
    browser = webdriver.Chrome()
    
    # Aller sur la page de Décathlon
    browser.get("https://www.decathlon.fr/")

    # Maximiser la fenêtre
    browser.maximize_window()

    yield browser  # Provide the driver to the test

    # Tout ce qui vient après le yield sera exécuté
    # à la fin des tests
    browser.quit()  # Fermeture du navigateur


@pytest.fixture
def wait(driver):
    # Instancier le wait explicit pour le driver
    return WebDriverWait(driver, 10)


def test_product_search_result(driver, wait):

    productName = "Vélos"
    
    # Instancier la page d'accueil
    homepage = HomePage(driver, wait)

    # Vérifier le titre de la page
    homepage.verifier_titre_homepage("DECATHLON | Magasin de Sport")
    
    # Cliquer sur le bouton "rejeter les cookies"
    homepage.dismiss_cookie(wait)
    
    # Renseigner la barre de recherche et lancer la recherche
    homepage.seek_and_load(wait, productName)
    
    # Instancier page prodcutlist
    productlist = ProductListPage(driver, wait)
    
    # Vérifier le titre résultat recherche 
    productlist.check_product_list_title(wait, productName)

    # Vérifier que la liste de résultat s'affiche
    productlist.check_product_list_visibility(productName)

