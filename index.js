import LinkedList from "./Data structures/linked-list.js";
import CreateTree from "./Data structures/bst.js";

//This is a print function used to visualize BST's.
const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

//This index.js page is just made for tests.
//To run these tests, you can either bundle this with webpack or run it using the node commande (node index.js)

console.log("Creating list:")
let list = LinkedList(1, 2, 3, 4, 5);
console.log(list.toString())

console.log("Appending 6 to the end of the list:")
list.append(6)
console.log(list.toString())

console.log("Prepending 0 to the start of the list:")
list.prepend(0)
console.log(list.toString())

console.log("Checking if 6 exists in the list:")
console.log(list.contains(6))

console.log("Popping (removing) the last element (6):")
list.pop()
console.log(list.toString())

console.log("Checking if 6 exists in the list, again:")
console.log("Prepending 0 to the start of the list:")
console.log(list.contains(6))

console.log("Getting the value of the nodes at index 0, 4 and 5:")
console.log(list.at(0).val)
console.log(list.at(4).val)
console.log(list.at(5).val)


console.log("Inserting the value 10 at index 0, 2 and 5:")
list.insertAt(10, 0)
list.insertAt(10, 2)
list.insertAt(10, 5)
console.log(list.toString())

console.log("Removing the nodes at index 0, 2 and 5:")
list.removeAt(0)
list.removeAt(2)
list.removeAt(5)
console.log(list.toString())

let tree = CreateTree(1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324);
prettyPrint(tree.root);
tree.insert(69);
prettyPrint(tree.root);
