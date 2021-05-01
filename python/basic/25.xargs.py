# args = js rest parameteres
# *args = ...args

def student(*args):
    print(args)
    print(args[1])

student(1,"john", 25)
