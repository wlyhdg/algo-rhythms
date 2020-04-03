/*
Breadth first search is used usually if you are going to find the minimum path to a solution or
if you are calculating distance between a and b.
A queue data structure is crucial to the implementation as it registers where we are in the process of visiting
nodes as we go level by level.

Color code: 
  white: not visited
  gray: visiting
  black: visited
*/

function isPath(start, end) {
  // initialize the queue
  let queue = new Queue();
  
  // start queue with initial node
  queue.enqueue(start);
  
  //process graph until there are no nodes to visit (defined by the length of the nodes queue)
  while(queue.length > 0) {
    let currNode = queue.dequeue(start)  // remove current node to process
    
    /* check all adjacent nodes of the current one. I am calling the adjacent nodes children here 
       since this is a directed graph
    */
    for(child of currNode.children) {
    
      // if the child node we are currently looking at is not visited, visit and check if we find the target end node
      
      if(child.color == 'white) {
        if (child == end) {
          return true;
        } 

        else {
          // otherwise, mark the current child as visited
          child.setColor('gray');

          // add child to the queue to process that node deeper
          queue.enqueue(child);
        }
      }
    }
    
    /* after looping through all of the current node's children, we have exhausted the current node and mark it as 
    completely visited
    */
    currNode.setColor('black');
  }
  // if we never find a target node, return false
  return false;
}
