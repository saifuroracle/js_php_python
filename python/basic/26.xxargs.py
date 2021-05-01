# works as dictionary = js object

def student(**details):
    print(details)
    print(details["name"])

student(id=1, name="john")
    