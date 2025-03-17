from selenium import webdriver
from selenium.webdriver.common.by import By # find locator

options = webdriver.ChromeOptions()
options.add_experimental_option("detach", True)
 
#  Instancier le navigateur Chrome avec les options
driver = webdriver.Chrome(options)
 
# Ouvrir en plein écran
driver.maximize_window()
 
# Naviguer vers le site de décathlon
driver.get("https://www.decathlon.fr/")

# Je valide les cookies
cookie_button = driver.find_element(By.ID, "didomi-notice-agree-button")
try:
    cookie_button.is_displayed
    cookie_button.click()
except:
    print("Cookies popup not present!")

# Je saisie dans la barre de recherche "Ballon football"
search_bar = driver.find_element(By.CSS_SELECTOR, 'input[data-anly="global-search-input"]')
assert search_bar.is_displayed
search_bar.send_keys("Ballon football")

# Je valide ma recherche (via la loupe)
search_submit = driver.find_element(By.CSS_SELECTOR, '.vtmn-search_buttons > button[type="submit"]')
assert search_submit.is_displayed
search_submit.click()

# Je vérifie que le résultat est une liste d'éléments
assert driver.find_element(By.CSS_SELECTOR, '.product-list[role="list"]').is_displayed
# list_result = driver.find_elements(By.CSS_SELECTOR, '.product-list[role="list"] div[role="listitem"]')
# print(list_result.count())

# Je ferme l'explorateur chrome
driver.close()