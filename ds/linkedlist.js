// node stores piece of data - val
//reference to next node - next

class Node{
    constructor(val){
        this.val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = this.head
        }else{
            this.tail.next = newNode
            this.tail = newNode 
        }
        this.length += 1
        return this
    }



}



var list = new SinglyLinkedList()
list.push("Hello")
list.push("Goodbye")

// var first = new Node('Hi')
// first.next = new Node('there')

console.log(list.val)