// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

// Example 1:
// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: l1 = [], l2 = []
// Output: []

// Example 3:
// Input: l1 = [], l2 = [0]
// Output: [0]




// Solution #1: While loop
// In this fairly classic approach to a comparison question, we start by creating a while loop. This loop will run for as long as both LinkedLists contain a node, and in each iteration will compare the two available nodes, take the lower one, and finally move that LinkedList along to its next entry.
// Once the loop is broken, the remaining elements of whichever LinkedList is not empty are then appended to the end of the new LinkedList (as there are no remaining values in the other LinkedList for them to be compared against).

var mergeTwoLists = function (l1, l2) {
    // Initialise a new LinkedList with a dummy ListNode
    let newList = new ListNode(0);

    // Maintain a reference to the head of the new LinkedList
    let headOfNewList = newList;

    // Whilst both of the passed in lists contain more elements
    while (l1 != null && l2 != null) {
        // If l1's value is smaller
        if (l1.val < l2.val) {
            // Add l1's value to the new list
            newList.next = l1;

            // Move l1 to its next element
            l1 = l1.next;
        } else {
            // Add l2's value to the new list
            newList.next = l2;

            // Move l2 to its next element
            l2 = l2.next;
        }

        // Move into the next level of the LinkedList for the next iteration
        newList = newList.next;
    }

    // If l1 has run out of elements
    if (l1 == null) {
        // Append l2 to the new list
        newList.next = l2;
    }
    // If l2 has run out of elements
    else {
        // Append l1 to the new list
        newList.next = l1;
    }

    return headOfNewList.next;
};




