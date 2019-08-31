module.exports = function(arr) {
    if (Array.isArray(arr)) {
        arr = arr.sort(function(a,b) {
            return a - b;
        })
        let loop = 0;
        let highest_loop = 0;
        let fashion = [];
        let value = arr[0];
        let i = 0;
        while (i < arr.length) {
            if (arr[i] === value) {
                loop += 1;
            } else {
                loop = 1;
                value = arr[i];
            }
            if (loop > highest_loop) {
                highest_loop = loop;
                fashion = [arr[i]];
            } else if(loop === highest_loop) {
                fashion.push(arr[i]);
            }
            i += 1;
        }
        if (highest_loop > 1) {
            return fashion.toString();
        } else {
            return "isn't fashion";
        }
    }
}