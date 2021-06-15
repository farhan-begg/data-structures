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
    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail
        this.tail.next = null
        this.length -= 1;
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return current
    }

    shift(){
        if(!this.head) return undefined
        let currentHead = this.head
        this.head = currentHead.next
        this.length--;
        if(this.length === 0){
            this.tail = null
        }
        return currentHead
    }

    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head
        } else {
            newNode.next = this.head;
            this.head = newNode
        }
        this.length += 1;
        return this
    }

    get(index){
        if( index < 0 || index >= this.length) return null
        let counter = 0;
        let current = this.head;
        while(counter !== index){
            current = current.next
         
            counter += 1
        }
        return current 

    }
    set(index, val){
        let foundNode = this.get(index)
        if(foundNode){
            foundNode.val = val;
            return true 
        }
        return false 
    }
  

}



var list = new SinglyLinkedList()
list.push("Hello")
list.push("Goodbye")
// list.push("Hello")
list.push("Goodbye")
// list.push("Hello")
list.push("Goodbye")// list.push("Hello")
list.push("Goodbye")
// list.pop()
list.get(0)

// var first = new Node('Hi')
// first.next = new Node('there')

console.log(list)
console.log(list.get(0))