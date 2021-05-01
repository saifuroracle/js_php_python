list = [1,2,3,4,5,6]

print(len(list))

list.append(100)
print(list)

list.insert(1, 200)
print(list)

list.remove(200)
print(list)


list = [4,5,1,2,8,7,9,2,4,56]
list.sort()
print(list)

list.reverse()
print(list)

list.pop()
print(list)

list.clear()
print(list)

list = [1,2,3,4,4,4,5]
list2 = list.copy()
print(list2)

print(list2.index(2))

print(list2.count(4))