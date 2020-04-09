var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0);
    let current = head;
    let carry = 0;
    head.val = 0;
    while(l1 || l2) {
        if (!l1) {
            l1 = new ListNode(0);
        }
        if (!l2) {
            l2 = new ListNode(0);
        }
        let sum = l1.val + l2.val + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10)
        current = current.next;
        l1 = l1.next;
        l2 = l2.next;
    }
    
    if (carry > 0) {
        current.next = new ListNode(carry);
    }
    
    return head.next;
};

// Space: O(Math.max(M.N)) with respect to longest input list
// Time: O(Math.max(M,N)) with respect to longest input list
