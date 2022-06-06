/* Course Schedule

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
ou are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

Example 1:
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.

Example 2:
Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function(numCourses, prerequisites) {
    let adj = {};
    let visited = new Array(prerequisites.length).fill(0);
    
    for(let i = 0; i < prerequisites.length; i++){
        if(prerequisites[i][0] in adj){
            adj[prerequisites[i][0]] = adj[prerequisites[i][0]].concat(prerequisites[i][1])
        }else{
            adj[prerequisites[i][0]] = [prerequisites[i][1]]
        }
    }
    
    function isCyclic(node){
        if(visited[node] === 2){
            return true;
        }
        
        visited[node] = 2;
        
        let adjNodes = adj[node] || [];
        for(let i  = 0; i < adjNodes.length; i++){
            if(visited[adjNodes[i]] !== 1 && isCyclic(adjNodes[i])){
                return true;
            }    
        }
        
        visited[node] = 1;
        
        return false;
    }
        
    for(let i = 0; i < prerequisites.length; i++){
        if(visited[i] === 0 && isCyclic(prerequisites[i][0])){
            return false;
        }
    }
    
    return true;  
};