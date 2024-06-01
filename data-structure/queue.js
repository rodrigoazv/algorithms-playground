class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue{
    constructor(){
        this.first = null
        this.last = null
        this.length = 0
    }

    peek(){
        this.first
    }

    enqueue(value){
        const node = new Node(value)
        if(this.length == 0 ){
            this.last = node 
            this.first = node
        }else{
            this.last.next = node
            this.last = node
        }
        this.length++
        return this
    }

    dequeue(){
        if(!this.first){
            return null;
        }
        if(this.last == this.first){
            this.last = null
        }
        const pointer = this.first
        this.first = this.first.next
        this.length--
        return pointer.value
    }
}

const queue = new Queue()
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(0)
queue.enqueue(5)
queue.dequeue()
console.log(queue)