# Singly Linked List

[View Full List of Data Structures](../README.md)

## Challenge
Create a linked list constructor with nodes that contain data and a pointer to the next node in the list.

## Approach & Efficiency
This list is a Javascript object with a reference to a node object in the head.  Node object's hold data and a reference to the next node in the node's `next`.

## Methods
* `.insert(data)` -- Create a new node with data and attach to the front of the list.  
* `.append(data)` -- Create a new node with data and attach to the end of the list.
* `.includes(value)` -- Traverses the list, checking the value against that nodes data.  Return `true` if found, return `false` if not.
* `print()` -- Traverses the list and appends the data of each node to a results string.  Return the string.
