/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for (let c of s) {
        if (isLeft(c)) stack.push(c);
        if (isRight(c)) {
            let left = stack.pop();
            if (!isMatched(left, c)) return false;
        }
    }

    return stack.length === 0 ? true : false;
};

let isLeft = (c) => c === '(' || c === '{' || c === '[';
let isRight = (c) => c === ')' || c === '}' || c === ']';
let isMatched = (c1, c2) => 
    c1 === '(' && c2 === ')' || 
    c1 === '{' && c2 === '}' || 
    c1 === '[' && c2 === ']';