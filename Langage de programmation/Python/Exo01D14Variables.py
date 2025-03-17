ma_var_num = 12
ma_var_num = 13

ma_var_str = "hello World!"

var1 = 12
var1 = "Test"

ma_var_bool = True

ma_var_None = None

ma_var_float = 0.5

print(ma_var_num, ma_var_str, var1, ma_var_str, ma_var_None, ma_var_float)

# Exercis'me

a=1
b=2

# c=a
# a=b
# b=c

a, b = b, a

print("a = " + str(a) + " / b = " + str(b))

# Récupération du type de variable
print(type(None)) # None
print(type(24)) # int
print(type(24.04)) # float
print(type("24")) # str
print(type(True)) # bool
print(type([1,2,3,4])) # list

# Astuce Cast => Truly value (<> de valeur None, 0, 0.0, False)
