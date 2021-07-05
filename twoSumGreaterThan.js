/**
Description:
Given an array of ints
and a target
find how many pairs in the array total to a sum greater than the target
return the number of pairs
*/

/**
Purpose: Given an array of ints and a target, returns a count of all the pairs that sum to a total greater than target
@param {Array} nums: array of ints
@param {int} target: number that the sum of pairs need to be greater than
@return {int}: number of pairs that sum to a total greater than given <target>

Clarifications:
- Do we have duplicate pairs (Yes)
- Do we count only unique pairs if there are duplicates (no. Count all pairs)

Challenge: 
- Time Complexity: O(nlogn)
- Space Complexity: O(1)
*/

// Ex.1:
// I: [], 10
// E: 0

// Ex.2:
// I: [1], 10
// E: 0

// Ex.3:
// I: [1,1], 1
// E: 1

// Ex.4:
// I: [1,2,1,3], 2
// E: [{1,2},{1,3},{2,1},{2,1},{2,3}] = 5

// Ex.3 (D&C): [1,1], 1 
// merge = 1

// Ex.4 (D&C): [1,2][1,3], 2
// L: 1, R: 1
// Merge: L + R + Merging = 1 + 1 + (1 + 1 + 1) = 5

// Ex.5 (D&C): [1,2,1,3,1], 2 ==> 1 + 2 + (1+1+1+1) = 1 + 2 + 4 = 7
// L: [1,2] = 1, R: [1,3,1] = 2
// 			 L: [1] R: [3,1] M: 0 + 1 + 1 = 2
//               0       1

// Brute force: O(n^2) => a nested for loop
// D&C: O(nlogn) Time; O(n) Space to hold the temp arrays
let twoSumsGreaterThan = (nums, target) => {
    // Base Case: (n < 2)
    if (nums.length < 2) {
        return 0;
    }

    // Base Case2: (n === 2)
    if (nums.length === 2) {
        let sum = nums[0] + nums[1];
        return sum > target ? 1 : 0;
    }

    // else, we divide & conquer
    let mid = Math.floor(nums.length / 2);
    let leftArr = nums.slice(0, mid);
    let rightArr = nums.slice(mid, nums.length);

    let leftSum = twoSumsGreaterThan(leftArr, target); //1 
    let rightSum = twoSumsGreaterThan(rightArr, target);// 2 
    let mergedSum = 0; //4

    for (let i = 0; i < leftArr.length; i++) {
        let leftVal = leftArr[i];
        for (let j = 0; j < rightArr.length; j++) {
            let rightVal = rightArr[j];
            if (leftVal + rightVal > target) {
                mergedSum++;
            }
        }
    }

    return leftSum + rightSum + mergedSum;
}