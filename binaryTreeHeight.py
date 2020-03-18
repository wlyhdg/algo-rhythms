class Node:
      def __init__(self,info): 
          self.info = info  
          self.left = None  
          self.right = None 
           

       // this is a node of the tree , which contains info as data, left , right
'''

def height(root, count = -1):
    if root is None: 
        return count
    count += 1
    leftHeight = height(root.left, count)
    rightHeight = height(root.right, count)
    return max(leftHeight, rightHeight)
