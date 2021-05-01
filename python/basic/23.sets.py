# 2 ways
# curly brackets
# set functions


num = {1,2,3,4,5,6}
print(num)
num2 = set([1,2,3,4,5])
print(num2)

num2.add(6)
print(num2)

num2.remove(6)
print(num2)

print(1 in num2)
print(100 in num2)
print(100 not in num2)

print(num | num2)
print(num & num2)
print(num - num2)
