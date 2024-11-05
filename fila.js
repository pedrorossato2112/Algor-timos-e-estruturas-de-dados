class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      return this.items.shift();
    }
  
    front() {
      return this.items[0];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  const fila = new Queue();
  fila.enqueue(1);
  fila.enqueue(2);
  console.log(fila.dequeue()); 
  