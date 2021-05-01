list  = input("please enter a list of numbers = ")  # 1 2 3 4 5 6
print(list)

list = list.split()
print(list)

sum=0
for item in list:
    sum = sum + int(item)

print( sum)
