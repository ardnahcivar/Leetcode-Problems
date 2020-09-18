// 1041. Robot Bounded In Circle

// On an infinite plane, a robot initially stands at (0, 0) and faces north.  The robot can receive one of three instructions:

// "G": go straight 1 unit;
// "L": turn 90 degrees to the left;
// "R": turn 90 degress to the right.
// The robot performs the instructions given in order, and repeats them forever.

// Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.

 

// Example 1:

// Input: "GGLLGG"
// Output: true
// Explanation: 
// The robot moves from (0,0) to (0,2), turns 180 degrees, and then returns to (0,0).
// When repeating these instructions, the robot remains in the circle of radius 2 centered at the origin.
// Example 2:

// Input: "GG"
// Output: false
// Explanation: 
// The robot moves north indefinitely.
// Example 3:

// Input: "GL"
// Output: true
// Explanation: 
// The robot moves from (0, 0) -> (0, 1) -> (-1, 1) -> (-1, 0) -> (0, 0) -> ...


/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    // let d = ['N','E','S','W']
    let co = [0,0,0]
    for(let i=0; i<instructions.length; i++){
        if(instructions[i] == 'G'){
            if(co[2] == 0){
                co[1]++    
            }else if(co[2] == 1){
                co[0]--
            }else if(co[2] == 2){
                co[1]--
            }else if(co[2] == 3){
                co[0]++                    
            }
        }else if(instructions[i] == 'L'){
            co[2] = (co[2] + 3) % 4
        }else if(instructions[i] == 'R'){
            co[2] = (co[2] + 1) % 4
        }
    }
    if(co[0] == 0 && co[1] == 0) return true
    if(co[2] == 0) return false
    return true
};