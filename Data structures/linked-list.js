function CreateNode(value) {
  let val = value;
  let next = null;
  let prev = null;

  return { val, next, prev };
}

function LinkedList(...values) {
  let size = 0;
  let head = null;
  let tail = null;

  function construct() {
    values.forEach((value) => {
      if (head === null) {
        head = CreateNode(value);
        tail = head;
        size += 1;
      } else {
        append(value);
      }
    });
  }

  construct();

  function append(value) {
    const node = CreateNode(value);
    node.prev = tail;
    tail.next = node;
    tail = tail.next;

    size += 1;
  }

  function prepend(value) {
    const node = CreateNode(value);
    head.prev = node;
    node.next = head;
    head = node;

    size += 1;
  }

  function at(index) {
    let currentNode = head;
    for(let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  function pop() {
    tail = tail.prev;
    tail.next = null;
    size -= 1;
  }

  function contains(value) {
    let currentNode = head;
    for(let i = 0; i < size; i++) {
        if(currentNode.val === value) {
            return true
        }
        currentNode = currentNode.next;
    }
    return false;
  }

  function find(value) {
    let currentNode = head;
    for(let i = 0; i < size; i++) {
        if(currentNode.val === value) {
            return i
        }
        currentNode = currentNode.next;
    }
    return null;
  }

  function toString() {
    let str = "";
    let currentNode = head;
    for(let i = 0; i < size; i++) {
      str += currentNode.val + ", ";
      currentNode = currentNode.next;
    }
    return str;
  }

  function insertAt(value, index) {
    let newNode = CreateNode(value);
    let currentNode = head;
    
    if(index > 0) {
        for(let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        newNode.prev = currentNode.prev;
        newNode.next = currentNode;
        currentNode.prev.next = newNode;
        currentNode.prev = newNode;
    } else if(index === 0) {
        head = newNode;
        currentNode.prev = newNode;
        newNode.next = currentNode;
    } else {
        tail.prev = newNode;
        tail.prev.next = newNode;
        newNode.prev = tail.prev;
        newNode.next = tail;
    }

    size += 1;
  }

  function removeAt(index) {
    let currentNode = head;

    if(index > 0) {
        for(let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        currentNode.prev.next = currentNode.next;
        currentNode.next.prev = currentNode.prev;
    } else if(index === 0) {
        head = head.next;
        head.prev = null;
    } else {
        currentNode = tail;
        tail = tail.prev;
        tail.next = null;
    }
    currentNode.next = null;
    currentNode.prev = null;
    size -= 1;
  }

  return {
    append,
    prepend,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
    size,
    head,
    tail
  };
}

export default LinkedList;
