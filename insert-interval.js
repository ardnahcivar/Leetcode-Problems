// Insert Interval

// Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

// You may assume that the intervals were initially sorted according to their start times.

// Example 1:

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]
// Example 2:

// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
// NOTE: input types have been changed on April 15, 2019.
//  Please reset to default code definition to get new method signature.

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if(intervals.length == 0) return  [newInterval]
    let t1 = [], t2 = []
    let min,max
    let inserted_flag = false,merge_flag = false
    for(let i = 0; i<intervals.length; i++){
        if(intervals[i][0] >= newInterval[0] && !inserted_flag){
            inserted_flag = !inserted_flag
            t1.push([newInterval[0],newInterval[1]])
        }
        t1.push([intervals[i][0],intervals[i][1]])    
    }
    if(!inserted_flag) t1.push([newInterval[0],newInterval[1]])
    for(let i = 1;i < t1.length; i++){
        let s1 = t1[i-1][0]
        let e1 = t1[i-1][1]
        let s2 = t1[i][0]
        let e2 = t1[i][1] 
        if( e1 >= s2){
            min = merge_flag ? Math.min(s1,s2,min) : Math.min(s1,s2) 
            max = merge_flag ? Math.max(e1,e2,max) : Math.max(e1,e2)
            t1[i][0] = min
            t1[i][1] = max
            merge_flag = true
        }else{
            if(merge_flag && i == t1.length-1 ){
                t2.push([min,max])
                t2.push([s2,e2])
            }else if(merge_flag){
                t2.push([min,max])
            }else if(i == t1.length-1){
                 t2.push([s1,e1])     
                 t2.push([s2,e2])     
            }else{
                t2.push([s1,e1])     
            }           
            merge_flag = false
        }  
    }
    if(merge_flag) t2.push([min,max])
    return t2
};