# Hashmap

[View Full List of Data Structures](../README.md)

## Challenge
Create my own implementation of a hashmap using linked lists to handle collisions.

## Methods
`.hash(key)` - Creates a code by adding each character's ASCII code multiplied by a prime number, then returns the modulus of the code with the length of the table's array to generate an index.

`.add(key, value)` - Runs the key through the hash method to get an index, then checks if that index is undefined.  If it is, a new linked list is created and the key and value stored as the head node.  If there is already a list there, the key and value are inserted to the end of the linked list already present.

`.contains(key)` - Runs the key through the hash method to get an index, then loops through the linked list at that index.  If the key is found, returns true.  If not, returns false.

`.get(key)` - Runs the key through the hash method to get an index, then loops through the linked list at that index.  If the key is found, the value to that key is returned.  If not, returns null.

## Efficiency
After an index is created, each method operates on an O(1) time to find the bucket that key is located in, however the method to hash the key and looping through the linked lists occur at an O(n) time.