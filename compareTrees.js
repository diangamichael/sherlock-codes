// return true if the binary trees rooted and a and b are equal in structure and value
// return false otherwise

function compare(a, b){
  if (Object.is(a, b)) {
    return true;
  } 
  
  return false;
}