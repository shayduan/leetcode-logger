/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */

var fullJustify = function(words, maxWidth) {
    const res = [];
    let i = 0;
    while (i < words.length) {
        const j = getLineEnd(words, i, maxWidth);
        res.push(buildLine(words, i, j, maxWidth));
        i = j;
    }
    return res;
};

const getLineEnd = (words, start, maxWidth) => {
    let j = start;
    let lineLen = 0;
    while (
        j < words.length &&
        lineLen + words[j].length + (j - start) <= maxWidth
    ) {
        lineLen += words[j].length;
        j++;
    }
    return j; // [start, j)
}

const buildLine = (words, i, j, maxWidth) => {
    const gaps = j - i - 1;
    // total length of words
    let wordsLen = 0;
    for (let k = i; k < j; k++) {
        wordsLen += words[k].length;
    }
    // last line or single word
    if (j === words.length || gaps === 0) {
        return leftJustify(words, i, j, maxWidth);
    }
    return fullJustifyLine(words, i, j, wordsLen, gaps, maxWidth);
}

const leftJustify = (words, i, j, maxWidth) => {
    let line = '';
    for (let k = i; k < j; k++) {
        line += words[k];
        if (k < j - 1) line += ' ';
    }
    return line + ' '.repeat(maxWidth - line.length);
}

const fullJustifyLine = (words, i, j, wordsLen, gaps, maxWidth) => {
    const totalSpaces = maxWidth - wordsLen;
    const base = Math.floor(totalSpaces / gaps);
    const extra = totalSpaces % gaps;
    let line = '';
    for (let k = i; k < j; k++) {
        line += words[k];
        if (k < j - 1) {
            const spaces = base + (k - i < extra ? 1 : 0);
            line += ' '.repeat(spaces);
        }
    }
    return line;
}

// --------------------------------------------------------------------

var fullJustify0 = function(words, maxWidth) {
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