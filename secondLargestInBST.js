/**
 * Description:
 * Write a function to find the 2nd largest element in a binary search tree. ↴
 * 
 * Url: https://www.interviewcake.com/question/python/second-largest-item-in-bst?utm_source=weekly_email&utm_source=drip&utm_campaign=weekly_email&utm_campaign=Interview%20Cake%20Weekly%20Problem%20%23354:%202nd%20Largest%20Item%20in%20a%20Binary%20Search%20Tree&utm_medium=email&utm_medium=email
 */


// Clarification Questions: Can we assume that we will always have at least two nodes?
// Assume:
// - We can have any number of nodes - including none

let findSecondLargestInBST = (root) => {
    let hasOnlyOneElem = !root.left && !root.right;
    if (!root || hasOnlyOneElem) {
        return null;
    } else {
        // valid
        findSecondLargestInBST(root, null);
    }

}

let findSecondLargestInBSTHelper = (node, parent) => {
    // find the right-most child - aka the largest elem
    // if right-most child is a leaf, then the second largest would be its parent
    // if right-most child is an internal node, then it has a left-node, and the largest elem of the left-node is the second largest

    // Base Case 1: node is a leaf:
    if (!node.left && !node.right) {
        return parent.value;
    } else if (!node.right && node.left) {
        return node.left;
    } else {
        // has both node.right and node.left
        // .: we're not at right-most node yet
        // recurse to find right-most node
        findSecondLargestInBST(node.right, node);
    }
}