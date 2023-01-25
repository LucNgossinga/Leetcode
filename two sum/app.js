//Voir : https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const nums = [2, 7, 11, 15];
target = 17;

let twoSum = function (nums, target) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    const elt = [nums[i], i]; //i == elt[1] ==> index of the main item
    for (let j = i + 1; j < nums.length; j++) {
      if (target === elt[0] + nums[j]) {
        res.push(elt[1]);
        res.push(j); //j index of comparative item
        break;
      }
    }
    return !res.length == 0 ? res : null; //if tab is not empty, return the tab
  }
};

console.log(twoSum(nums, target));
