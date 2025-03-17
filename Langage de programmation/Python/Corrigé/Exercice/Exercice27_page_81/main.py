import csv

titre = input("Titre du produit : ")
prix = input("Prix du produit : ")
stock = input("Stock du produit : ")

# print(titre)
# print(prix)
# print(stock)

data = [titre,prix,stock]

with open("Exercice/Exercice27_page_81/produit.csv",mode='a',newline="") as fichier:
    writer = csv.writer(fichier,delimiter=";")
    writer.writerow(data)