function twoSum(nums, target) {
    const comp = new Map();
    const len = nums.length;

    for (let i = 0; i < len; i++) {

        if (comp[nums[i]] >= 0) {
            return [comp[nums[i]], i]
        }
        comp[target - nums[i]] = i;
    }
    return []
}

const nums = [2, 7, 11, 15];
console.log(twoSum(nums, 9));

// JavaScript #2

// const twoSum = (nums, target) => {
//     let storage = {};

//     for (let [index, num] of nums.entries()) {
//         if (storage[num] !== undefined) return [storage[num], index];
//         storage[target - num] = index;
//     }
// };

// JavaScript #3 

// var twoSum = function(nums, target) {
//     const previousValues = {}
//     for(let i = 0; i < nums.length; i++){
//         const currenNumber = nums[i];
//         const neededValue = target - currenNumber;
//         const index2 = previousNumber[neededValue];
//         if (index2 != null) {
//             return [index2, index];
//         } else {
//             previousValues[currentNumber] = i;
//         }
//     }
// }
