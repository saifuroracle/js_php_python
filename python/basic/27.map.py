# The map() function executes a specified function for each item in an iterable. The item is sent to the function as a parameter.

# map(function, iterables)
# function	Required. The function to execute for each item
# iterable	Required. A sequence, collection or an iterator object. You can send as many iterables as you like, just make sure the function has one parameter for each iterable.

x = [1,2,3,4,5,6]

def square(x):
    return x*x


print(list(map(square, x)))

    
