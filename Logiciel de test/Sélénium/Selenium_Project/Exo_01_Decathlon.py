# from selenium import webdriver

# driver = webdriver.Chrome() # (options="--start-maximized")

# driver.get("https://www.decathlon.fr/")
# # driver.fullscreen_window() # fullscreen cover
# driver.maximize_window()
# assert driver.title == 'DECATHLON | Magasin de Sport'
# assert driver.current_url == "https://www.decathlon.fr/"
# driver.close

from selenium import webdriver
from selenium.webdriver.common.by import By # find locator
 
# """
# Définir des options pour le driver. Pour chrome, garder
# le navigateur ouvert si driver.quit() n'est pas appelée
# """

options = webdriver.ChromeOptions()
options.add_experimental_option("detach", True)
 
#  Instancier le navigateur Chrome avec les options
driver = webdriver.Chrome(options)
 
# Ouvrir en plein écran
driver.maximize_window()
 
# Naviguer vers le site de décathlon
driver.get("https://www.decathlon.fr/")
 
# Vérifier que le titre de la page est correct
assert driver.title == 'DECATHLON | Magasin de Sport'
 
# Vérifier que le titre de la page est correct
assert driver.current_url == 'https://www.decathlon.fr/'
 
# récupérer un élément par sa balise
driver.find_elements(By.TAG_NAME, "h1")

# Récupérer un élément par son texte / texte partiel
driver.find_elements(By.LINK_TEXT, "Retour page accueil")
driver.find_elements(By.PARTIAL_LINK_TEXT, "page")

# Récupérer un élément par son Xpath
driver.find_elements(By.XPATH, "//p")

# Récupérer un élément par son Xpath
driver.find_elements(By.CSS_SELECTOR, ".btn-css-selector")


# Fermer le navigateur
driver.quit()