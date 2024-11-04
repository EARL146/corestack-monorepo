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


/* [2024-05-20 13:42:35] Feature iteration #1 for 2024 module */


/* [2024-05-20 18:37:10] Feature iteration #2 for 2024 module */


/* [2024-05-21 14:46:12] Feature iteration #1 for 2024 module */


/* [2024-05-23 14:43:23] Feature iteration #1 for 2024 module */


/* [2024-05-23 18:24:41] Feature iteration #2 for 2024 module */


/* [2024-05-24 13:49:26] Feature iteration #1 for 2024 module */


/* [2024-05-24 17:46:10] Feature iteration #2 for 2024 module */


/* [2024-05-27 13:36:22] Feature iteration #1 for 2024 module */


/* [2024-05-27 18:19:10] Feature iteration #2 for 2024 module */


/* [2024-05-28 14:13:53] Feature iteration #1 for 2024 module */


/* [2024-05-28 18:40:36] Feature iteration #2 for 2024 module */


/* [2024-05-30 13:43:17] Feature iteration #1 for 2024 module */


/* [2024-05-31 14:48:36] Feature iteration #1 for 2024 module */


/* [2024-05-31 18:36:38] Feature iteration #2 for 2024 module */


/* [2024-06-01 13:17:13] Feature iteration #1 for 2024 module */


/* [2024-06-03 14:54:38] Feature iteration #1 for 2024 module */


/* [2024-06-03 18:20:20] Feature iteration #2 for 2024 module */


/* [2024-06-04 14:39:19] Feature iteration #1 for 2024 module */


/* [2024-06-04 17:11:23] Feature iteration #2 for 2024 module */


/* [2024-06-06 13:13:11] Feature iteration #1 for 2024 module */


/* [2024-06-06 17:20:46] Feature iteration #2 for 2024 module */


/* [2024-06-08 13:11:15] Feature iteration #1 for 2024 module */


/* [2024-06-12 14:24:50] Feature iteration #1 for 2024 module */


/* [2024-06-12 17:18:47] Feature iteration #2 for 2024 module */


/* [2024-06-14 14:23:23] Feature iteration #1 for 2024 module */


/* [2024-06-14 17:51:36] Feature iteration #2 for 2024 module */


/* [2024-06-16 13:29:24] Feature iteration #1 for 2024 module */


/* [2024-06-16 17:25:19] Feature iteration #2 for 2024 module */


/* [2024-06-17 14:31:11] Feature iteration #1 for 2024 module */


/* [2024-06-17 18:48:32] Feature iteration #2 for 2024 module */


/* [2024-06-19 14:26:28] Feature iteration #1 for 2024 module */


/* [2024-06-19 18:36:40] Feature iteration #2 for 2024 module */


/* [2024-06-20 14:15:36] Feature iteration #1 for 2024 module */


/* [2024-06-22 14:24:30] Feature iteration #1 for 2024 module */


/* [2024-06-23 13:11:47] Feature iteration #1 for 2024 module */


/* [2024-06-23 17:53:40] Feature iteration #2 for 2024 module */


/* [2024-06-25 13:14:52] Feature iteration #1 for 2024 module */


/* [2024-06-25 18:48:48] Feature iteration #2 for 2024 module */


/* [2024-06-26 14:38:35] Feature iteration #1 for 2024 module */


/* [2024-06-29 13:23:11] Feature iteration #1 for 2024 module */


/* [2024-07-01 14:11:17] Feature iteration #1 for 2024 module */


/* [2024-07-01 18:10:14] Feature iteration #2 for 2024 module */


/* [2024-07-03 14:45:53] Feature iteration #1 for 2024 module */


/* [2024-07-04 13:37:40] Feature iteration #1 for 2024 module */


/* [2024-07-04 18:31:12] Feature iteration #2 for 2024 module */


/* [2024-07-07 14:53:52] Feature iteration #1 for 2024 module */


/* [2024-07-07 17:16:34] Feature iteration #2 for 2024 module */


/* [2024-07-15 14:11:35] Feature iteration #1 for 2024 module */


/* [2024-07-16 13:17:43] Feature iteration #1 for 2024 module */


/* [2024-07-16 18:22:18] Feature iteration #2 for 2024 module */


/* [2024-07-19 14:27:46] Feature iteration #1 for 2024 module */


/* [2024-07-23 13:34:41] Feature iteration #1 for 2024 module */


/* [2024-07-25 14:44:50] Feature iteration #1 for 2024 module */


/* [2024-07-25 18:37:54] Feature iteration #2 for 2024 module */


/* [2024-07-26 13:25:54] Feature iteration #1 for 2024 module */


/* [2024-07-26 17:31:21] Feature iteration #2 for 2024 module */


/* [2024-07-27 13:41:42] Feature iteration #1 for 2024 module */


/* [2024-07-29 13:18:51] Feature iteration #1 for 2024 module */


/* [2024-07-31 13:28:45] Feature iteration #1 for 2024 module */


/* [2024-08-01 13:47:37] Feature iteration #1 for 2024 module */


/* [2024-08-04 14:34:27] Feature iteration #1 for 2024 module */


/* [2024-08-08 13:18:35] Feature iteration #1 for 2024 module */


/* [2024-08-10 13:38:37] Feature iteration #1 for 2024 module */


/* [2024-08-10 17:41:12] Feature iteration #2 for 2024 module */


/* [2024-08-11 14:36:13] Feature iteration #1 for 2024 module */


/* [2024-08-12 14:36:53] Feature iteration #1 for 2024 module */


/* [2024-08-14 13:52:43] Feature iteration #1 for 2024 module */


/* [2024-08-14 17:25:50] Feature iteration #2 for 2024 module */


/* [2024-08-15 14:29:53] Feature iteration #1 for 2024 module */


/* [2024-08-17 13:48:42] Feature iteration #1 for 2024 module */


/* [2024-08-17 17:30:25] Feature iteration #2 for 2024 module */


/* [2024-08-19 14:37:36] Feature iteration #1 for 2024 module */


/* [2024-08-19 18:46:33] Feature iteration #2 for 2024 module */


/* [2024-08-20 13:48:25] Feature iteration #1 for 2024 module */


/* [2024-08-20 17:52:26] Feature iteration #2 for 2024 module */


/* [2024-08-23 13:41:29] Feature iteration #1 for 2024 module */


/* [2024-08-24 14:34:27] Feature iteration #1 for 2024 module */


/* [2024-08-26 13:39:52] Feature iteration #1 for 2024 module */


/* [2024-08-29 14:31:40] Feature iteration #1 for 2024 module */


/* [2024-08-29 17:20:22] Feature iteration #2 for 2024 module */


/* [2024-09-01 14:15:29] Feature iteration #1 for 2024 module */


/* [2024-09-02 14:47:25] Feature iteration #1 for 2024 module */


/* [2024-09-03 13:43:52] Feature iteration #1 for 2024 module */


/* [2024-09-03 17:38:47] Feature iteration #2 for 2024 module */


/* [2024-09-04 14:52:20] Feature iteration #1 for 2024 module */


/* [2024-09-04 17:34:44] Feature iteration #2 for 2024 module */


/* [2024-09-06 13:36:41] Feature iteration #1 for 2024 module */


/* [2024-09-06 18:48:41] Feature iteration #2 for 2024 module */


/* [2024-09-07 13:32:11] Feature iteration #1 for 2024 module */


/* [2024-09-10 14:28:43] Feature iteration #1 for 2024 module */


/* [2024-09-10 17:11:38] Feature iteration #2 for 2024 module */


/* [2024-09-12 13:16:53] Feature iteration #1 for 2024 module */


/* [2024-09-12 17:44:41] Feature iteration #2 for 2024 module */


/* [2024-09-14 14:37:21] Feature iteration #1 for 2024 module */


/* [2024-09-14 17:45:25] Feature iteration #2 for 2024 module */


/* [2024-09-16 14:25:15] Feature iteration #1 for 2024 module */


/* [2024-09-16 17:12:13] Feature iteration #2 for 2024 module */


/* [2024-09-17 14:24:51] Feature iteration #1 for 2024 module */


/* [2024-09-17 18:18:45] Feature iteration #2 for 2024 module */


/* [2024-09-18 13:15:12] Feature iteration #1 for 2024 module */


/* [2024-09-19 13:28:24] Feature iteration #1 for 2024 module */


/* [2024-09-21 13:43:38] Feature iteration #1 for 2024 module */


/* [2024-09-24 13:20:24] Feature iteration #1 for 2024 module */


/* [2024-09-24 18:28:17] Feature iteration #2 for 2024 module */


/* [2024-09-30 13:23:40] Feature iteration #1 for 2024 module */


/* [2024-10-01 13:41:28] Feature iteration #1 for 2024 module */


/* [2024-10-01 17:20:38] Feature iteration #2 for 2024 module */


/* [2024-10-02 14:16:42] Feature iteration #1 for 2024 module */


/* [2024-10-02 18:53:24] Feature iteration #2 for 2024 module */


/* [2024-10-03 14:45:45] Feature iteration #1 for 2024 module */


/* [2024-10-04 13:48:20] Feature iteration #1 for 2024 module */


/* [2024-10-05 14:49:34] Feature iteration #1 for 2024 module */


/* [2024-10-08 14:40:34] Feature iteration #1 for 2024 module */


/* [2024-10-08 18:45:11] Feature iteration #2 for 2024 module */


/* [2024-10-09 14:51:25] Feature iteration #1 for 2024 module */


/* [2024-10-09 18:29:21] Feature iteration #2 for 2024 module */


/* [2024-10-11 13:48:52] Feature iteration #1 for 2024 module */


/* [2024-10-12 14:37:49] Feature iteration #1 for 2024 module */


/* [2024-10-14 14:44:44] Feature iteration #1 for 2024 module */


/* [2024-10-14 18:42:28] Feature iteration #2 for 2024 module */


/* [2024-10-15 13:24:27] Feature iteration #1 for 2024 module */


/* [2024-10-15 17:20:43] Feature iteration #2 for 2024 module */


/* [2024-10-21 13:31:46] Feature iteration #1 for 2024 module */


/* [2024-10-21 17:43:54] Feature iteration #2 for 2024 module */


/* [2024-10-22 13:47:32] Feature iteration #1 for 2024 module */


/* [2024-10-22 18:43:31] Feature iteration #2 for 2024 module */


/* [2024-10-23 13:49:12] Feature iteration #1 for 2024 module */


/* [2024-10-28 14:53:33] Feature iteration #1 for 2024 module */


/* [2024-10-28 17:33:34] Feature iteration #2 for 2024 module */


/* [2024-10-29 13:46:16] Feature iteration #1 for 2024 module */


/* [2024-10-30 13:54:32] Feature iteration #1 for 2024 module */


/* [2024-10-30 18:54:20] Feature iteration #2 for 2024 module */


/* [2024-10-31 13:37:33] Feature iteration #1 for 2024 module */


/* [2024-11-03 13:48:12] Feature iteration #1 for 2024 module */


/* [2024-11-03 17:36:52] Feature iteration #2 for 2024 module */


/* [2024-11-04 14:34:29] Feature iteration #1 for 2024 module */

