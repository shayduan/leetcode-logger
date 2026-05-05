/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let i = 0, j = 0; // [i, j] are words for the current line
    let res = [];

    while (i < words.length) {
        let len = 0;
        while (j < words.length && len <= maxWidth + 1) {
            if (len + words[j].length > maxWidth) break;
            len += words[j].length + 1;
            j++;
        }
        len = len - 1;
        j = j - 1;

        let str = '';
        // when there's only one word, left justified
        if (i === j) {
            str += words[i];
            str += ' '.repeat(maxWidth - words[i].length);
        }
        //  when it's the last line, left justified
        else if (j === words.length - 1) {
            for (let k = i; k <= j; k++) {
                str += words[k];
                if (k < j) str += ' ';
            }
            str += ' '.repeat(maxWidth - len);
        }
        // other cases, middle centered
        else {
            let extra_spaces = maxWidth - len;
            let mod = extra_spaces % (j - i);
            let avg = Math.floor(extra_spaces / (j - i)) + 1;
            for (let k = i; k <= j; k++) {
                if (k < j) {
                    str += words[k] + ' '.repeat(avg);
                } else {
                    str += words[k];
                }
                if (mod !== 0) {
                    str += ' '.repeat(1);
                    mod--;
                }
            }
        }
        res.push(str);

        j++;
        i = j;
    }
    return res;
};