/**
 * Description:
 * A magical string S consists of only '1' and '2' and obeys the following rules:
 * The string S is magical because concatenating the number of contiguous occurrences of characters '1' and '2' generates the string S itself.
 * The first few elements of string S is the following: S = "1221121221221121122……"
 * If we group the consecutive '1's and '2's in S, it will be:
 * 1 22 11 2 1 22 1 22 11 2 11 22 ......
 * and the occurrences of '1's or '2's in each group are:
 * 1 2 2 1 1 2 1 2 2 1 2 2 ......
 * You can see that the occurrence sequence above is the S itself.
 * Given an integer N as input, return the number of '1's in the first N number in the magical string S.
 * 
 * Info: N will not exceed 100,000.
 * Url: https://www.lintcode.com/problem/1215/description
 * Url2: https://leetcode.com/problems/magical-string/
 */



// Clarification Questions:
// 1. Clearer explanation of "magical string" - is it unique? How does it work?
// 2. Can N be negative or 0? (Assumption: Yes, it can - for edge cases)

// Example 1: (Edge case)
// Input: 0
// Expected: 0 

// Example 2:
// I: 1
// E: 1

// Example 3:
// I: 3
// E: 1

// Example 4:
// I: 6
// E: 3
// Explanation: [122112]12212211

/**
 * My Notes:
 * To generate the "Magic String", we look at the sequence (which starts from the beginning and whose position increments by 1 each iteration), 
 * the current value, and the count of the consecutive appearance of the current value
 * 
 * Always start with 1, which means that the next item in the sequence must be a '2' because otherwise, there would be two '1's, and that would not
 * be consistent with the idea that there would be '1' of that item in the sequence.
 */

/**
 * Iteration: 1
 * Sequence:      1
 * CountPointer:  |
 * 
 * Iteration: 2
 * Sequence:      1 2
 * CountPointer:    |
 * 
 * Iteration: 3
 * Sequence:      1 2 2
 * CountPointer:      |
 * 
 * Iteration: 4
 * Sequence:      1 2 2 1
 *                      |
 */

/**
 * Purpose: Given an integer N as input, return the number of '1's in the first N number in the magical string S.
 * @param {int} n 
 * @return {int}: the number of 1s in first n number in magical string S
 */

let magicalString = function (n) {

    // edge cases
    if (n <= 0) {
        return 0;
    }

    if (n <= 3) {
        return 1;
    }

    // else create magical string up to n elements
    let sequence = [1, 2, 2];
    let countNextPtr = 2;
    let nextNum = 1;
    let lastIdx = 3;
    let countOnes = 1;

    while (sequence.length < n) {
        let countNext = sequence[countNextPtr];
        while (countNext > 0) {
            if (nextNum === 1) {
                countOnes++;
            }
            sequence[lastIdx] = nextNum;
            lastIdx++;
            countNext--;
        }

        countNextPtr++;
        nextNum = nextNum === 1 ? 2 : 1;
    }

    return countOnes;
}
