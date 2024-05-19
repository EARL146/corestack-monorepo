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


/* [2024-02-08 14:50:50] Feature iteration #1 for 2024 module */


/* [2024-02-15 13:52:49] Feature iteration #1 for 2024 module */


/* [2024-02-15 17:33:42] Feature iteration #2 for 2024 module */


/* [2024-02-16 13:31:20] Feature iteration #1 for 2024 module */


/* [2024-02-16 17:31:35] Feature iteration #2 for 2024 module */


/* [2024-02-18 14:35:13] Feature iteration #1 for 2024 module */


/* [2024-02-20 13:47:32] Feature iteration #1 for 2024 module */


/* [2024-02-21 13:38:39] Feature iteration #1 for 2024 module */


/* [2024-02-24 14:10:54] Feature iteration #1 for 2024 module */


/* [2024-02-28 14:53:24] Feature iteration #1 for 2024 module */


/* [2024-02-28 17:21:38] Feature iteration #2 for 2024 module */


/* [2024-02-29 14:54:35] Feature iteration #1 for 2024 module */


/* [2024-03-01 13:34:47] Feature iteration #1 for 2024 module */


/* [2024-03-01 17:23:12] Feature iteration #2 for 2024 module */


/* [2024-03-03 14:44:53] Feature iteration #1 for 2024 module */


/* [2024-03-04 13:33:44] Feature iteration #1 for 2024 module */


/* [2024-03-07 14:16:18] Feature iteration #1 for 2024 module */


/* [2024-03-08 13:16:47] Feature iteration #1 for 2024 module */


/* [2024-03-09 13:12:50] Feature iteration #1 for 2024 module */


/* [2024-03-10 13:16:42] Feature iteration #1 for 2024 module */


/* [2024-03-11 14:15:38] Feature iteration #1 for 2024 module */


/* [2024-03-16 13:14:54] Feature iteration #1 for 2024 module */


/* [2024-03-16 18:23:39] Feature iteration #2 for 2024 module */


/* [2024-03-18 13:35:31] Feature iteration #1 for 2024 module */


/* [2024-03-18 17:43:28] Feature iteration #2 for 2024 module */


/* [2024-03-19 14:29:25] Feature iteration #1 for 2024 module */


/* [2024-03-20 13:46:11] Feature iteration #1 for 2024 module */


/* [2024-03-23 13:40:23] Feature iteration #1 for 2024 module */


/* [2024-03-24 14:21:35] Feature iteration #1 for 2024 module */


/* [2024-03-24 17:29:29] Feature iteration #2 for 2024 module */


/* [2024-03-26 14:13:17] Feature iteration #1 for 2024 module */


/* [2024-03-28 13:40:12] Feature iteration #1 for 2024 module */


/* [2024-03-29 13:54:15] Feature iteration #1 for 2024 module */


/* [2024-03-29 18:19:37] Feature iteration #2 for 2024 module */


/* [2024-03-31 14:48:31] Feature iteration #1 for 2024 module */


/* [2024-03-31 18:48:43] Feature iteration #2 for 2024 module */


/* [2024-04-03 13:35:33] Feature iteration #1 for 2024 module */


/* [2024-04-03 18:28:36] Feature iteration #2 for 2024 module */


/* [2024-04-04 13:23:29] Feature iteration #1 for 2024 module */


/* [2024-04-04 17:28:34] Feature iteration #2 for 2024 module */


/* [2024-04-06 13:51:34] Feature iteration #1 for 2024 module */


/* [2024-04-10 13:29:48] Feature iteration #1 for 2024 module */


/* [2024-04-10 17:32:51] Feature iteration #2 for 2024 module */


/* [2024-04-11 14:14:35] Feature iteration #1 for 2024 module */


/* [2024-04-14 13:32:49] Feature iteration #1 for 2024 module */


/* [2024-04-15 14:25:17] Feature iteration #1 for 2024 module */


/* [2024-04-15 17:27:22] Feature iteration #2 for 2024 module */


/* [2024-04-16 14:43:38] Feature iteration #1 for 2024 module */


/* [2024-04-18 13:51:43] Feature iteration #1 for 2024 module */


/* [2024-04-19 14:49:37] Feature iteration #1 for 2024 module */


/* [2024-04-20 14:39:32] Feature iteration #1 for 2024 module */


/* [2024-04-20 18:47:10] Feature iteration #2 for 2024 module */


/* [2024-04-21 13:11:14] Feature iteration #1 for 2024 module */


/* [2024-04-21 17:39:17] Feature iteration #2 for 2024 module */


/* [2024-04-23 13:18:37] Feature iteration #1 for 2024 module */


/* [2024-04-26 13:52:11] Feature iteration #1 for 2024 module */


/* [2024-04-26 17:27:18] Feature iteration #2 for 2024 module */


/* [2024-04-29 14:39:13] Feature iteration #1 for 2024 module */


/* [2024-04-29 18:34:33] Feature iteration #2 for 2024 module */


/* [2024-04-30 13:28:43] Feature iteration #1 for 2024 module */


/* [2024-04-30 17:53:25] Feature iteration #2 for 2024 module */


/* [2024-05-02 13:26:35] Feature iteration #1 for 2024 module */


/* [2024-05-03 14:14:40] Feature iteration #1 for 2024 module */


/* [2024-05-05 14:48:16] Feature iteration #1 for 2024 module */


/* [2024-05-05 18:42:49] Feature iteration #2 for 2024 module */


/* [2024-05-09 13:35:20] Feature iteration #1 for 2024 module */


/* [2024-05-09 18:28:53] Feature iteration #2 for 2024 module */


/* [2024-05-10 14:32:16] Feature iteration #1 for 2024 module */


/* [2024-05-10 17:17:29] Feature iteration #2 for 2024 module */


/* [2024-05-11 13:47:49] Feature iteration #1 for 2024 module */


/* [2024-05-14 14:53:33] Feature iteration #1 for 2024 module */


/* [2024-05-14 17:21:28] Feature iteration #2 for 2024 module */


/* [2024-05-15 14:53:20] Feature iteration #1 for 2024 module */


/* [2024-05-16 13:18:54] Feature iteration #1 for 2024 module */


/* [2024-05-17 13:43:20] Feature iteration #1 for 2024 module */


/* [2024-05-19 14:12:23] Feature iteration #1 for 2024 module */


/* [2024-05-19 17:29:15] Feature iteration #2 for 2024 module */

