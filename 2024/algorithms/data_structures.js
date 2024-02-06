/**
 * Data Structures & Algorithm Core Module (2024)
 * Author: Early Pajo (@EARL146)
 */
class BinarySearchTree {
    constructor() { this.root = null; }
    insert(val) {
        const node = { val, left: null, right: null };
        if (!this.root) { this.root = node; return; }
        let curr = this.root;
        while (true) {
            if (val < curr.val) {
                if (!curr.left) { curr.left = node; break; }
                curr = curr.left;
            } else {
                if (!curr.right) { curr.right = node; break; }
                curr = curr.right;
            }
        }
    }
}

function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr[arr.length - 1];
    const left = [], right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

module.exports = { BinarySearchTree, quickSort };

/* [2024-01-02 13:36:18] Feature iteration #1 for 2024 module */


/* [2024-01-02 18:46:20] Feature iteration #2 for 2024 module */


/* [2024-01-03 14:44:16] Feature iteration #1 for 2024 module */


/* [2024-01-05 13:27:20] Feature iteration #1 for 2024 module */


/* [2024-01-05 17:39:41] Feature iteration #2 for 2024 module */


/* [2024-01-06 13:11:33] Feature iteration #1 for 2024 module */


/* [2024-01-08 14:50:41] Feature iteration #1 for 2024 module */


/* [2024-01-08 17:44:37] Feature iteration #2 for 2024 module */


/* [2024-01-09 13:46:27] Feature iteration #1 for 2024 module */


/* [2024-01-13 13:24:29] Feature iteration #1 for 2024 module */


/* [2024-01-15 14:41:14] Feature iteration #1 for 2024 module */


/* [2024-01-16 13:44:54] Feature iteration #1 for 2024 module */


/* [2024-01-17 14:28:51] Feature iteration #1 for 2024 module */


/* [2024-01-17 18:52:43] Feature iteration #2 for 2024 module */


/* [2024-01-18 14:38:46] Feature iteration #1 for 2024 module */


/* [2024-01-18 18:49:11] Feature iteration #2 for 2024 module */


/* [2024-01-19 14:17:49] Feature iteration #1 for 2024 module */


/* [2024-01-19 17:15:54] Feature iteration #2 for 2024 module */


/* [2024-01-20 14:51:40] Feature iteration #1 for 2024 module */


/* [2024-01-20 17:27:46] Feature iteration #2 for 2024 module */


/* [2024-01-21 14:12:35] Feature iteration #1 for 2024 module */


/* [2024-01-22 13:35:51] Feature iteration #1 for 2024 module */


/* [2024-01-24 13:32:44] Feature iteration #1 for 2024 module */


/* [2024-01-24 18:30:45] Feature iteration #2 for 2024 module */


/* [2024-01-31 14:48:51] Feature iteration #1 for 2024 module */


/* [2024-01-31 17:43:32] Feature iteration #2 for 2024 module */


/* [2024-02-02 14:13:41] Feature iteration #1 for 2024 module */


/* [2024-02-03 13:26:21] Feature iteration #1 for 2024 module */


/* [2024-02-04 14:35:33] Feature iteration #1 for 2024 module */


/* [2024-02-06 14:44:35] Feature iteration #1 for 2024 module */


/* [2024-02-06 17:54:49] Feature iteration #2 for 2024 module */

