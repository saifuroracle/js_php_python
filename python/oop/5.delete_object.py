class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def personinfo(self):
        print("name = ",self.name,", age=",self.age)
        
        
p1 = Person("John", 25)
del(p1)
p1.personinfo()