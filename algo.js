// 219. Contains Duplicate II



// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.









/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    
    let map = new Map()

    for(let i = 0; i < nums.length; i++){

        if(map.has(nums[i])){
            let mapIndex = map.get(nums[i])

            if(i - mapIndex <= k){
                return true
            }

            map.set(nums[i], i)
        }else{
            map.set(nums[i], i)
        }
    }

    return false
};