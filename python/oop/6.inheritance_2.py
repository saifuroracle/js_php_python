# Python Inheritance
# Inheritance allows us to define a class that inherits all the methods and properties from another class.

# Parent class is the class being inherited from, also called base class.

# Child class is the class that inherits from another class, also called derived class.

# Note: Use the pass keyword when you do not want to add any other properties or methods to the class. in child class


class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def personinfo(self):
        print("name = ",self.name,", age=",self.age)
        
class Student(Person):
    pass

obj = Student("John", 25)
obj.personinfo()