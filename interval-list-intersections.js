var intervalIntersection = function(A, B) {
    let r = []
    let s,m
    i = 0
    j = 0
    while(i < A.length && j < B.length){
        console.log(`checking with ${A[i]},${B[j]}`)
        if(A[i][1] >= B[j][0] && A[i][0] <= B[j][1] ){
             s = Math.max(A[i][0],B[j][0])
             m = Math.min(A[i][1], B[j][1])
             r.push([s,m])
             console.log(r)
        }
        if(A[i][1] < B[j][1]){
            i++
        }else{
            j++
        }
    }
    return r
};

var a = [[0,2],[5,10],[13,23],[24,25]]
var b = [[1,5],[8,12],[15,24],[25,26]]
console.log(intervalIntersection(a,b))