/**
 * Description:
 * Given an array of integers, find how many unique pairs in the array 
 * such that their sum is equal to a specific target number. 
 * Please return the number of pairs.
 * 
 * Url: https://www.lintcode.com/problem/587/
 * Difficulty: Medium
 */

// Ex. 1:
// I: [] or null, 10
// E: 0

// Ex. 2:
// I: [1], 1
// E: 0 (there's no pair)

// Ex. 3
// I: [1,2], 10
// E: 0 (no pair that adds up to 10)

// Ex. 4
// I: [2,9,0,7,11,-2,10,-3], 9
// E: 3 ({2,7}, {0, 9}, {-2, 11})

// Ex. 5
// I: [2,9,0,7,11,-2,10,-3,2,7], 9
// E: 3 ({2,7}, {0, 9}, {-2, 11})

// Ex. 5
// I: [2,11,11],22
// E: 1

// Ex. 6
// I: [1,1,2,45,46,46], 47
// E: 2

/**
 * Purpose: Given an array nums and a target number, returns number of unique pairs in array that add up to given target
 * @param {Array} nums 
 * @param {int} target 
 * @returns {int} : number of unique pairs in the array that add up to given <target> number
 */
let twoSum6 = (nums, target) => {
    // edge cases:
    if (!nums || nums.length <= 1)
        return 0;

    // else: possible pairs
    let countUniquePairs = 0;
    // {key: num, value: isCounted}
    let pairMap = {};

    for (let i = 0; i < nums.length; i++) {
        let val = nums[i];
        let pair = target - val;
        if (pairMap[pair] === undefined && pairMap[val] === undefined) {
            pairMap[val] = false;
        } else if (pairMap[pair] !== undefined && !pairMap[val]) {
            // we have seen the pair && haven't seen this val before ==> this is the first unique instance of this pairing
            pairMap[pair] = true;
            pairMap[val] = true;
            countUniquePairs++;
        }
        // we've seen the pair && have seen val before. Do nothing
    }

    return countUniquePairs;
}