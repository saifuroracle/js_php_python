# The filter() function returns an iterator were the items are filtered through a function to test if the item is accepted or not.

# filter(function, iterable)
# function	A Function to be run for each item in the iterable
# iterable	The iterable to be filtered

ages = [5,17,18,20]

def adultCheck(age):
    if age>=18:
        return True
    else:
        return False

adults = filter(adultCheck, ages)

for item in adults:
    print(item)
