# pyhon dictionary  = js object

student = {
    "id": 1,
    "name": 'John',
}

print(student)

print(student["id"])
print(student["name"])

print(student.get("name"))
print(student.get("age", "Invalid key"))