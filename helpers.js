const isEventSupported = (function() {
  const TAGNAMES = {
    'select':'input','change':'input',
    'submit':'form','reset':'form',
    'error':'img','load':'img','abort':'img',
    'beforeunload':'window','unload':'window'
  };
  function isEventSupported(eventName) {
    let el = document.createElement(TAGNAMES[eventName] || 'div');
    eventName = 'on' + eventName;
    let isSupported = (eventName in el);
    if(!isSupported) {
      el.setAttribute(eventName, 'return;');
      isSupported = typeof el[eventName] === 'function';
    }
    el = null;
    return isSupported;
  }
  return isEventSupported;
})();


const inOutQuad = (n) => {
  n *= 2;
  if (n < 1) return 0.5 * n * n;
  return - 0.5 * (--n * (n - 2) - 1);
}

class Node {
  element;
  next;
  toString;
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  head;
  size;
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    let node = new Node(element);
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

  insertAt(element, index) {
    if(index > 0 && index > this.size) return false;
    else {
      let node = new Node(element);
      let curr, prev;

      curr = this.head;

      if(index == 0) {
        node.next = head;
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

  removeFrom(index) {
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

  removeElement(element) {
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
      prev = current;
      current = current.next;
    }
    return -1;
  }

  indexOf(element) {
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
