type GenericObject = Record<string, any>;

/**
 * Function to remove duplicates from an array based on a specific key.
 * @param arr - Array of objects.
 * @param key - Key on which the duplicates will be removed.
 * @returns A new array without duplicates.
 */
function removeDuplicates<T extends GenericObject>(arr: T[], key: keyof T): T[] {
  const seen = new Set();
  return arr.filter(item => {
    const keyValue = item[key];
    if (seen.has(keyValue)) {
      return false;
    } else {
      seen.add(keyValue);
      return true;
    }
  });
}

export default removeDuplicates;


/* 
    // example --------
    // pass the array and the unique key/id of the object. 
    const uniqueArr = removeDuplicates(arr, 'id');
    console.log(uniqueArr);
*/
