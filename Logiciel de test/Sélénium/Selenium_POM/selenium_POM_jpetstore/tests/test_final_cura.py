from pages.homepage import HomePage
# from pages.login_page import LoginPage

import pytest
from selenium import webdriver
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import Select
 

@pytest.fixture
def driver():

    # Tout ce qui vient avant le yield sera exécuté avant
    # le lancement des tests.

    # Instancier le driver Chrome avec ses options
    browser = webdriver.Chrome()
    
    # 01. Naviguer sur le site de CURA Healthcare Service : https://katalon-demo-cura.herokuapp.com/
    browser.get("https://katalon-demo-cura.herokuapp.com/")

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


def test_cura(driver, wait):

    assert driver.title == 'CURA Healthcare Service' # Vérification du titre de la page

    wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, '#btn-make-appointment'))).click()  # 02. Cliquer sur « Make an appointment »
# 03. Se connecter sur le site en tant qu’utilisateur
    wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, '#txt-username'))).send_keys('John Doe')
    wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, '#txt-password'))).send_keys('ThisIsNotAPassword')
    wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, '#btn-login'))).click()

    
    # 04. Choisir une « Facility ». J’aimerais avoir une fonction qui permet de choisir la facility en fonction de la valeur qu’on lui donne.
    facility_select = Select(wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, '#combo_facility'))))
    assert facility_select.first_selected_option.text == 'Tokyo CURA Healthcare Center' # Vérifie que le 1er élément de la liste est bien 'Tokyo...'

    facility_select.select_by_value('Seoul CURA Healthcare Center') #Sélectionne l'élément 'Combo facility' stocké dans la variable et va choisir le choix 'Seoul...'
    assert facility_select.first_selected_option.text == 'Seoul CURA Healthcare Center' # Vérifie que le 1er élément de la liste est bien 'Tokyo...'

    # 05. Cocher la case « Apply for hospital readmission » et vérifier qu’elle est cochée
    selected_check = wait.until(EC.element_to_be_clickable((By.NAME, 'hospital_readmission'))) # Stocke l'élement 'Hospital...' dans la variable
    assert selected_check.is_selected() == False # Vérifie que la variable sélectionnée est à False
    selected_check.click()                 # On fait l'action de cliquer sur l'élément  
    assert selected_check.is_selected() == True     # Vérifie que la variable sélectionnée est à True



    # 06. Choisir un « Healthcare program ». J’aimerais avoir une fonction qui permet de choisir le Healthcare program en fonction de la valeur qu’on lui donne.
    selected_medicare = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, '#radio_program_medicare'))) # Stocke l'élement 'Hospital...' dans la variable
    selected_medicaid = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, '#radio_program_medicaid'))) # Stocke l'élement 'Hospital...' dans la variable
    selected_none= wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, '#radio_program_none'))) # Stocke l'élement 'Hospital...' dans la variable
    
    assert selected_none.is_selected() == False # Vérifie que la variable sélectionnée est à False
    selected_none.click()                 # On fait l'action de cliquer sur l'élément  
    assert selected_none.is_selected() == True  # Vérifie que la variable sélectionnée est à True
    
    assert selected_medicare.is_selected() == False # Vérifie que la variable sélectionnée est à False
    
    assert selected_medicaid.is_selected() == False # Vérifie que la variable sélectionnée est à False
        

    # 07. Saisir une date
    date = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, '[placeholder="dd/mm/yyyy"]'))) # Stocke l'élement 'Date...' avec le CCS Selector dans la variable
    date.send_keys('31/03/2025')

    # 08. Ecrire un commentaire dans le formulaire
    comment = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, '[placeholder="Comment"]'))) # Stocke l'élement 'Date...' avec le CCS Selector dans la variable
    comment.clear()
    comment.send_keys('Bonjour, \n Ceci est mon Commentaire')

    # 09. Cliquer sur le bouton « Book Appointment »
    wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, '#btn-book-appointment'))).click()

    # 10. Vérifier que le message « Appointment Confirmation » est affiché
    wait.until(EC.visibility_of_element_located((By.TAG_NAME, 'h2'))).is_displayed()

    
    # Bonus: Vérifier que les informations de synthèse suite de la confirmation du RDV sont correctes