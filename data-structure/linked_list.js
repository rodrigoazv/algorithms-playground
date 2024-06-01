class ListNode {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList{
    constructor(head = null){
        this.head = head
    }

    size(){
        let count = 0
        let node = this.head
        while(node){
            count++
            node = node.next
        }
        return count
    }

    clear(){
        this.head = null
    }

    first(){
        return this.head
    }

    last(){
        let lastItem = this.head
        while(lastItem.next){
            lastItem = lastItem.next
        }
        return lastItem
    }
}


const x = new ListNode('OI')
const y = new ListNode('OLA')
x.next = y

const linked_list = new LinkedList(x)

console.log(linked_list.size(), linked_list.first(), linked_list.last())