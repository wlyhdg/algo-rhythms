function isBalanced(s) {
  // Write your code here
  if (s.length % 2 !== 0) {
    return false;
  }
  
  if (s.length === 0) {
    return false;
  }
  
  let map = {
    '{': '}',
    '[': ']',
    '(': ')'
  }
  
  let stack = [];
  
  for (let i = 0; i < s.length; i++) {
    if (i < s.length / 2) {
      stack.push(s[i]);
    } else {
      if(map[stack.pop()] !== s[i]) {
        return false;
      }
    }
    
  }
  
  return true;
  
}
