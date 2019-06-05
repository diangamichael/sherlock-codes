function compare(a, b){
  if (!a && !b) {
      return true;
   } else if (!a || !b) {
      return false;
   } else {
      return a.val === b.val && compare(a.left, b.left) && compare(a.right, b.right);
   }
}
