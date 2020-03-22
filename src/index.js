module.exports = function check(str, bracketsConfig) {
    for (let i = 0; i <= bracketsConfig.length - 1;) {
        let col = bracketsConfig[i].join('');
        if (str.includes(col)) {
            str = str.replace(col, '');
            i = 0;
        } else {
            i = i + 1;
        }
    }
    if (str.length == 0) {
        return true;
    } else {
        return false;
    }
};
