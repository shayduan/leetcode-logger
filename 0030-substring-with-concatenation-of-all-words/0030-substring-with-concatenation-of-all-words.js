/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */

var findSubstring = function(s, words) {
    let res = [];

    // edge cases
    if (s === '' || words.length === 0) return res;

    // calc wordLen and wordCount + build hashmap for words
    const wordLen = words[0].length;
    const wordCnt = words.length;

    let wordMap = new Map();
    for (let word of words) {
        if (wordMap.has(word)) {
            wordMap.set(word, wordMap.get(word) + 1);
        } else {
            wordMap.set(word, 1);
        }
    }

    // traverse starting from offset
    for (let i = 0; i < wordLen; i++) {
        let start = i;
        let count = 0;
        let curMap = new Map();

        // scan s word by word
        for (let end = i; end + wordLen <= s.length; end += wordLen) {
            let curWord = s.slice(end, end + wordLen);
            if (wordMap.has(curWord)) {
                curMap.set(curWord, curMap.has(curWord) ? curMap.get(curWord) + 1 : 1);
                count++;

                while (curMap.get(curWord) > wordMap.get(curWord)) {
                    let removeWord = s.slice(start, start + wordLen);
                    curMap.set(removeWord, curMap.get(removeWord) - 1);
                    start += wordLen;
                    count--;
                }

                if (count === wordCnt) {
                    res.push(start);
                }
            } else {
                // if current word is not valid, discard current window
                start = end + wordLen;
                count = 0;
                curMap.clear();
            }
        }
    }
    return res;
};