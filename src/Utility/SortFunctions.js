export const sortByCompletion = (a, b) => {
  if ( a.complete && !b.complete ){
    return 1;
  }
  if ( !a.complete && b.complete ){
    return -1;
  }
  return 0;
};