/**
 * QUESTION: Search Insert Position
 * Description:
 * Given a sorted array and a target value, return the index if the target is found. 
 * If not, return the index where it would be if it were inserted in order.
 * You may assume NO duplicates in the array.
 */

// Clarification questions:
// 1.) Can target be negative?

// Example 1
// Input: [], 10
// Expected: 0

// Example 2
// I: [1,3,10], 4
// Expected: 2

// Example 3
// I: [-4, -2, 1, 2], -3
// E: 1

// Example 4
// I: [10, 11], 12
// E: 2

// Runtime: O(n)
// Memory: O(1)
let searchInsertPos = (array, target) => {

    for (let i = 0; i < array.length; i++) {
        let val = array[i];

        if (val === target || val > target) {
            return i;
        }
    }

    return array.length;
}

// Challenge: Optimize 
// Rationale: 
// Because it's sorted, we can use binary search to find the index

let searchInsertPosOpt = (A, target) => {
    let start = 0;
    let end = A.length;

    while (start < end) {
        let mid = (start + end) / 2;
        let currVal = A[mid];

        if (target === currVal) {
            return mid;
        } else if (target < currVal) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }

    return end;
}


