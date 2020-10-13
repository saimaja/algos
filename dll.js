class Node { 
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DLL {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        let poppedTail = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedTail.prev;
            this.tail.next = null;
            poppedTail.prev = null;
        }
        this.length--
        return poppedTail;
    }
    shift(){
        if(!this.head) return undefined;
        let oldHead = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(val) {
        let newNode = new Node(val)
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
}

let dll = new DLL();
dll.push(13)
dll.push(14)
dll.push(15)
dll.push(16)
dll.unshift(12)
console.log(dll)