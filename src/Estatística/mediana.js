function Mediana(arr) {
    arr = arr.sort(function(a,b) {
        return a - b;
    });
    if (Array.isArray(arr)) {
        if (arr.length) {
            let i = arr.length/2;
            if (Number.isInteger(i)) {
                return (arr[i-1]+arr[i])/2
            } else {
                return arr[Math.floor(i)];
            }
        }
    }
}
export { Mediana }