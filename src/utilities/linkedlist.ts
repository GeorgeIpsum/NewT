export class LLNode {
  element: any;
  next: LLNode | null;
  toString: () => string;

  constructor(element: any, toString: () => string) {
    this.element = element;
    this.next = null;

    this.toString = toString;
  }
}

export class LinkedList {
  head: LLNode | null;
  size: number;
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element: any) {
    let node = new LLNode(element.el, element.toString);
    let current;
    if(this.head == null)  this.head = node;
    else {
      current = this.head;

      while(current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  insertAt(element: any, index: number) {
    if(index > 0 && index > this.size) return false;
    else {
      let node = new LLNode(element.el, element.toString);
      let curr, prev;

      curr = this.head;

      if(index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        curr = this.head;
        let it = 0;

        while(it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        node.next = curr;
        prev.next = node;
      }
      this.size++;
      return true;
    }
  }

  removeFrom(index: number) {
    if(index > 0 && index > this.size) return -1;
    else {
      let curr, prev, it = 0;
      curr = this.head;
      prev = curr;

      if(index == 0) {
        this.head = curr.next;
      } else {
        while(it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        prev.next = curr.next;
      }
      this.size--;
      return curr.element;
    }
  }

  removeElement(element: any) {
    let curr = this.head;
    let prev = null;

    while(curr !== null) {
      if(curr.element === element) {
        if(prev == null) {
          this.head = curr.next;
        } else {
          prev.next = curr.next;
        }
        this.size--;
        return curr.element;
      }
      prev = curr;
      curr = curr.next;
    }
    return -1;
  }

  indexOf(element: any) {
    let count = 0;
    let curr = this.head;

    while(curr !== null) {
      if(curr.element === element) return count;
      count++;
      curr = curr.next;
    } return -1;
  }

  isEmpty() {
    return this.size === 0;
  }

  get listSize() {
    return this.size;
  }
}
