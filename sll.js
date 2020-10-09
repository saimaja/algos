class Node {
    constructor(val){
    this.val = val;
    this.next = null;
    }
}

class SLL{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val){
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
        newNode.next = this.head;
        this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index, value){
        if(!this.get(index)) return false;
        if(this.get(index)) {
            this.get(index).val = value;
        }
        return true;
    }
    insert(index, value){
        let newNode = new Node(value);
        if(index > this.length || index < 0) return false;
        if(index === this.length) return !!this.push(value);
        if (index === 0) return !!this.unshift(value);
        let previous = this.get(index - 1)
        let temp = previous.next
        previous.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
}

let list = new SLL()
list.push('hi')
list.push('!')
list.push('hey')
list.push('hello')

// list.shift()
console.log(list.insert(0, 'first'))
console.log(list)