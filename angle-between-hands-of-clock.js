
/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    let h1 = (hour % 12) * 30, m1 = 0,d = 0
    while(m1 != minutes){
        d += 6
        h1 += (1/12) * 6
        m1++
    }
    d = Math.abs((d - h1))
    // console.log(`val is d ${d}, h1 ${h1},m1 ${m1}`)
    return Math.min(d,360-d)
};