# Queue

[View Full List of Data Structures](../README.md)

## Challenge
Using node objects, create a queue class object that has the functionality to add nodes and to return them.

## Approach & Efficiency
#### Nodes
Both stack and queue use node objects that contain an input value and a variable to hold a reference to the next node.

#### Queue
The Queue class creates instances that contain a length value and variables for referencing the front and rear of the queue.  

## API
* `enqueue(value)` -- A node joins the queue by assigning the rear node as it's next, the assigning the new node as the rear.  If there's no front node, then the new node is assigned as both the front and the rear, as it would be the only node in the queue.
* `dequeue()` -- To dequeue a node, a tracking reference variable is assigned to the node in the rear.  It will then traverse through the queue until it arrives right behind the front node.  A results variable is assigned to the current node's next node's value.  The next node is then removed from the queue, and the current node is set as the new front of the queue.
* `peek()` -- Returns the value of the front node, or null if it does not exist.