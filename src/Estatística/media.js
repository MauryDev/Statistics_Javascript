// primeiro vamos fazer a função.
module.exports = function(arr) {
    var total = 0;
    if (Array.isArray(arr)) {
        for (let i in arr) {
            total += arr[i];
        }
        return total/arr.length;
    }
    console.error('Undefined')
}