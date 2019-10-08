module.exports = function zeros(expression) {
    let array = expression.split("*");
    let result = 1n;
    for (let i = 0; i < array.length; i++) {
        let buff = BigInt(parseInt(array[i]));
        let h;
        if (array[i].match("!!") == null) {
            h = 1n;
        } else {
            h = 2n;
        }
        for (; buff > 1n ; buff-=h) {
            result *= buff;
        }
    }
    let strResult = result.toString();
    let count = 0;
    while (strResult[strResult.length - count - 1] === "0") {
        count++;
    }
    return count;
}
