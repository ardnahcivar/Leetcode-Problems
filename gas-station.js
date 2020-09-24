// 134. Gas Station
// here are N gas stations along a circular route, where the amount of gas at station i is gas[i].

// You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from station i to its next station (i+1). You begin the journey with an empty tank at one of the gas stations.

// Return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1.

// Note:

// If there exists a solution, it is guaranteed to be unique.
// Both input arrays are non-empty and have the same length.
// Each element in the input arrays is a non-negative integer.
// Example 1:

// Input: 
// gas  = [1,2,3,4,5]
// cost = [3,4,5,1,2]

// Output: 3

// Explanation:
// Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
// Travel to station 4. Your tank = 4 - 1 + 5 = 8
// Travel to station 0. Your tank = 8 - 2 + 1 = 7
// Travel to station 1. Your tank = 7 - 3 + 2 = 6
// Travel to station 2. Your tank = 6 - 4 + 3 = 5
// Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
// Therefore, return 3 as the starting index.
// Example 2:

// Input: 
// gas  = [2,3,4]
// cost = [3,4,3]

// Output: -1

// Explanation:
// You can't start at station 0 or 1, as there is not enough gas to travel to the next station.
// Let's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
// Travel to station 0. Your tank = 4 - 3 + 2 = 3
// Travel to station 1. Your tank = 3 - 3 + 3 = 3
// You cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.
// // Therefore, you can't travel around the circuit once no matter where you start.


//Recursive soln O(n^2)
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let total_g = 0
    let can_complete = []
    for(let i = 0; i<gas.length; i++){
        total_g = 0
        if(coverGas(i,i,gas.length)) break
    }
    return can_complete.length > 0 ? can_complete[0] : -1
    
    function coverGas(i,j,n){
        if((total_g + gas[j] >= cost[j]) && n>=0){
            total_g = total_g + gas[j] - cost[j]
            if(i == j && n == 0){
                can_complete.push(i)
                return true
            }else if(j == gas.length-1 && n!= 0){
                j = 0
            }else{
                j++
            }
            n = n-1
            return coverGas(i,j,n)
        }
        return false
    }
};


//best/optimized soln - O(n)
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let diff_s = 0,r = 0,curr_s=0
    let diff = gas.map((v,i) => v - cost[i])
    for(let i = 0;i<gas.length; i++){
        diff_s = diff_s + gas[i] - cost[i]
    }
    if(diff_s < 0) return -1
    for(let i = 0; i<gas.length; i++){
        curr_s = curr_s + diff[i]
        if(curr_s < 0){
            curr_s = 0
            r = i + 1
        }   
    }
    return r
};