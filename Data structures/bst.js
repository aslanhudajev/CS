import mergeSort from "../Recursion/merge-sort.js";

function CreateNode(value) {
  let data = value;
  let left = null;
  let right = null;

  return { data, left, right };
}

const CreateTree = function CreateBinarySearchTree(...values) {
  values = [...new Set(values)];
  values = mergeSort(values);
  let root = buildTree(values);

  function buildTree(arr) {
    const start = 0;
    const end = arr.length - 1;
    const mid = Math.floor((start + end) / 2);

    if (start > end) return null;

    let node = CreateNode(arr[mid]);
    node.left = buildTree(arr.slice(start, mid));
    node.right = buildTree(arr.slice(mid + 1, end + 1));

    return node;
  }

  function insert(value) {
    const node = insertRecursiveTraversal(root, value);

    if (value < node.data) {
      node.left = CreateNode(value);
    } else {
      node.right = CreateNode(value);
    }
  }

  function insertRecursiveTraversal(node, value) {
    if (node === null) return null;

    if (value < node.data) {
      if (node.left == null) return node;
      node = insertRecursiveTraversal(node.left, value);
    } else {
      if (node.right == null) return node;
      node = insertRecursiveTraversal(node.right, value);
    }

    return node;
  }

  function remove(value) {
    removeRecursiveTraversal(root, value);
  }

  function removeRecursiveTraversal(node, value) {
    if (node === null) return null;

    //node found.
    if (value === node.data) {
      //one child.
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }

      //two children.
      const successors = removeRecursiveFindSuccessor(node.right);
      const successorParent = successors.sp;
      const successor = successors.s;

      if (successor === null) {
        node.data = successorParent.data;
        if (successorParent.right !== null) node.right = successorParent.right;
        else node.right = null;
      } else {
        node.data = successor.data;
        if (successor.right !== null) successorParent.left = successor.right;
        else successorParent.left = null;
      }
    }

    //node not found, keep looking.
    if (value < node.data) {
      node.left = removeRecursiveTraversal(node.left, value);
    } else if (value > node.data) {
      node.right = removeRecursiveTraversal(node.right, value);
    }

    return node;
  }

  //helper function used inside the removeRecursiveTraversal function, to find the "inorder" successor to a two-child-node, to be removed.
  function removeRecursiveFindSuccessor(successorParent) {
    const successor = successorParent.left;

    if (successor === null) return { sp: successorParent, s: null };

    if (successor.left === null) return { sp: successorParent, s: successor };
    else {
      const successors = removeRecursiveFindSuccessor(successor);
      return successors;
    }
  }

  function find(value) {
    return findRecursiveTraversal(root, value);
  }

  function findRecursiveTraversal(node, value) {
    if (node === null) return null;

    if (value === node.data) return node;
    else if (value < node.data) return findRecursiveTraversal(node.left, value);
    else return findRecursiveTraversal(node.right, value);
  }

  function levelOrder(fn) {
    let queue = [];
    let visited = [];

    queue.push(root);
    while (queue.length != 0) {
      let node = queue[0];

      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);

      if (fn) fn(node);
      else visited.push(node);

      queue.shift();
    }

    if (!fn) return visited;
  }

  function preOrder(fn) {
    return preOrderRecursiveTraversal(root, fn);
  }

  function preOrderRecursiveTraversal(node, fn) {
    if (node === null) return;

    if (fn) {
      //callback exists
      fn(node);
      preOrderRecursiveTraversal(node.left, fn);
      preOrderRecursiveTraversal(node.right, fn);
    } else {
      //callback does not exist
      let visited = [node];
      if (node.left !== null) {
        visited = visited.concat(preOrderRecursiveTraversal(node.left, fn));
      }
      if (node.right !== null) {
        visited = visited.concat(preOrderRecursiveTraversal(node.right, fn));
      }

      return visited;
    }
  }

  function inOrder(fn) {
    return inOrderRecursiveTraversal(root, fn);
  }

  function inOrderRecursiveTraversal(node, fn) {
    if (node === null) return;

    if (fn) {
      //callback exists
      inOrderRecursiveTraversal(node.left, fn);
      fn(node);
      inOrderRecursiveTraversal(node.right, fn);
    } else {
      //callback does not exist
      let visited = [];
      if (node.left !== null) {
        visited = visited.concat(inOrderRecursiveTraversal(node.left, fn));
      }
      visited.push(node);
      if (node.right !== null) {
        visited = visited.concat(inOrderRecursiveTraversal(node.right, fn));
      }

      return visited;
    }
  }

  function postOrder(fn) {
    return postOrderRecursiveTraversal(root, fn);
  }

  function postOrderRecursiveTraversal(node, fn) {
        if (node === null) return;

    if (fn) {
      //callback exists
      postOrderRecursiveTraversal(node.left, fn);
      postOrderRecursiveTraversal(node.right, fn);
      fn(node);
    } else {
      //callback does not exist
      let visited = [];
      if (node.left !== null) {
        visited = visited.concat(postOrderRecursiveTraversal(node.left, fn));
      }
      if (node.right !== null) {
        visited = visited.concat(postOrderRecursiveTraversal(node.right, fn));
      }
      visited.push(node);

      return visited;
    }
  }

  function height(node) {
  }

  function depth(node) {
    return depthRecursiveTraversal(root, node);
  }

  function depthRecursiveTraversal(startNode, node) {
    if (startNode === null) return 0;

    if (node === startNode) {
      return 1;
    }
    else if (node < startNode) return 1 + findRecursiveTraversal(startNode.left, node);
    else return 1 + findRecursiveTraversal(startNode.right, node);
  }

  return { root, insert, remove, find, levelOrder, preOrder, inOrder, postOrder, height, depth};
};

export default CreateTree;
