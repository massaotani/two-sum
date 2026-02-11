const nums = [2,7,11,15];
const target = 9;

var twoSum = function(nums, target){
    const map = new Map(); // Map allows to use a paired key match.

    for(let i = 0; i < nums.length; i++){
        const complement = target - nums[i];

        //If there is a complement within the array, return it.
        if(map.has(complement)){
            return [map.get(complement), i];
        }

        //Otherwise, add the current number and its index to the map.
        map.set(nums[i], i);
    }

    return [];
}