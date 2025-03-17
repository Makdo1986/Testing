import os

path = "demos_fichier/fichier.txt"

# Verifier si le fichier existe
# if not os.path.exists(path):
#     fichier = open(path,"w")
#     fichier.write("test")
#     fichier.close()
# else:
#     fichier = open(path,'r')
#     contenu = fichier.read()
#     print(f"Contenu du fichier : {contenu}")
#     fichier.close()

if not os.path.exists(path):
    with open(path,"w") as fichier:
        fichier.write("toto")
else:
    with open(path,'r') as fichier:
        contenu = fichier.read()
        print(f"Contenu du fichier : {contenu}")