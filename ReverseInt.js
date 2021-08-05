

var reverse = function (x) {
    let negative = x < 0;
    let reversed = 0;

    if (negative) {
        x *= -1;
    }

    while (x > 0) {
        reversed = (reversed * 10) + (x % 10);
        x = Math.floor(x / 10);
    }

    if (reversed > (2 ** 31 - 1)) {
        return 0;
    }

    return negative ? (reversed * -1) : reversed;
}


// JS simpler but uses helpers

// const reverse = (x) => {
//     if(x < 0) return -1* reverse(-x);
//     const solution = (x+"").split('').reverse().join('');
//     return (solution > 2**31 -1) ? 0 : solution;
// };