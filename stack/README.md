# Stacks and Queues

[View Full List of Data Structures](../README.md)

## Challenge
Using node objects, create a stack class object that has the functionality to add nodes and to return them.

## Approach & Efficiency
#### Nodes
Both stack and queue use node objects that contain an input value and a variable to hold a reference to the next node.
#### Stack
The Stack class creates instances that contain a length value and a variable for referencing the top node in the stack.    

## Methods
* `push(value)` -- A node can be pushed onto the stack by setting the new node's next to the top, then assigning the top as the new node.
* `pop()` -- A pop is performed by retreiving the top nodes value into a new variable, then assigning the top to be the next node.  The variable holding the old top node is then returned.
* `peek()` -- Returns the value of the top node, or null if it does not exist.
