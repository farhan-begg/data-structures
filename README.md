# What is a Linked List?
- A Data Structure that contains a head, tail and length property
- Linked Lists consist of nodes, and each node has a value and a pointer to another node or null


# Pushing method pseudocode
- function should accept a value
- Create a new node using the value passed to the function
- if there is no head property on the list, set the head and tail to newly created node
- otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
- increment length by one
- return linked list

# Poppinng pseudocode
- if there are no nodes in the list, return undefined
- Loop through the list until you reach the tail
- set the next property of the 2nd to last node to be null
- set the tail to be the 2nd to last node
- decrement the length of the list by 1
- return the value of the node removed


# Shifting 
- if there are no nodes, return undefined
- Store the current head property in a variable
- Set the head property to be the current head's next property
- Decrment the length by 1
- Return the value of the node removed