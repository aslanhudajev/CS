import mergeSort from "../Recursion/merge-sort.js";

function CreateNode(value) {
    let data = value;
    let left = null;
    let right = null;

    return { data, left, right };
}

const CreateTree = function BinarySearchTree(...values) {
    values = [...new Set(values)];
    values = mergeSort(values);
    let root = buildTree(values);

    function buildTree(arr) {
        const start = 0;
        const end = arr.length - 1;
        const mid = Math.floor((start + end)/2);

        if(start > end) return null
        
        let node = CreateNode(arr[mid]);
        node.left = buildTree(arr.slice(start, mid));
        node.right = buildTree(arr.slice(mid + 1, end + 1));

        return node;
    }

    function insert(value) {
        const node = insertRecursiveTraversal(root, value);

        if(value < node.data) {
            node.left = CreateNode(value);
        } 
        else {
            node.right = CreateNode(value)
        }
    }

    function insertRecursiveTraversal(node, value) {
        if(value < node.data) {
            if(node.left == null) return node
            node = insertRecursiveTraversal(node.left, value);
        } 
        else {
            if(node.right == null) return node
            node = insertRecursiveTraversal(node.right, value);
        }

        return node;
    }

    function remove(value) {

    }

    return { root, insert, remove };
}

export default CreateTree