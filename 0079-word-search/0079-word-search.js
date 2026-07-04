/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const DIR = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const [m, n] = [board.length, board[0].length];
    const isValid = (i, j) => i >= 0 && i < m && j >= 0 && j < n;
    
    // (i, j): location
    // k: word[k] waiting to be matched in the board
    const backtrack = (i, j, k) => {
        if (k === word.length) return true;
        if (!isValid(i, j) || board[i][j] !== word[k]) return false;

        let cur = board[i][j];
        board[i][j] = '#'; // visited
        for (let [di, dj] of DIR) {
            if (backtrack(i + di, j + dj, k + 1)) {
                board[i][j] = cur;
                return true;
            }
        }

        board[i][j] = cur;
        return false;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (backtrack(i, j, 0)) return true;
        }
    }

    return false;
};