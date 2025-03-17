from pages.homepage import HomePage
from pages.login_page import LoginPage

import pytest
from selenium import webdriver
from selenium.webdriver.support.wait import WebDriverWait

@pytest.fixture
def driver():

    # Tout ce qui vient avant le yield sera exécuté avant
    # le lancement des tests.

    # Instancier le driver Chrome avec ses options
    browser = webdriver.Chrome()
    
    # Aller sur la page de Décathlon
    browser.get("https://petstore.octoperf.com/actions/Catalog.action")

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


def test_login(driver, wait):

    # Instancier la page d'accueil
    homepage = HomePage(driver, wait)

    # Vérifier le titre de la page
    homepage.verifier_titre_homepage("JPetStore Demo")
    
    # Cliquer sur le bouton sign in
    homepage.cliquer_bouton_sign_in()

    # Instancier page login
    login_page = LoginPage(driver, wait)

    # Se connecter en tant qu'utilisateur
    login_page.se_connecter("j2ee", "j2ee")

    # Vérifier le message d'accueil de l'utilisateur
    homepage.verifier_message_accueil("Welcome ABC!")

