import json, os

path = "demo_json/data.json"



if os.path.exists(path):
    with open(path,'r',encoding="utf8") as fichier:
        # Pour charger un fichier il nout faut la méthode .load()
        data = json.load(fichier)
        print(data)
else:
    with open(path,'w',encoding="utf8") as fichier:
        json.dump({"prénom": "Toto","nom": "tata"},fichier,indent=4,ensure_ascii=False)
        
        


# Pour obtenir un dict en format str on utilise dumps()

mon_dict_str = json.dumps(data,indent=4,ensure_ascii=False)
print("Je recupere mes data avec dumps j'obtiens une chaine de caracteres")
print(type(mon_dict_str))
print(mon_dict_str)

data_dict = json.loads(mon_dict_str)
print("A partir de cette chaine de caractere j'obtien un dictionnaire avec loads")
print(type(data_dict)) 
print(data_dict)