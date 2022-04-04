export default function appendToEachArrayValue(array, appendString) {
  const returnArray = [];
  for (const element of array) {
    returnArray.push(appendString + element);
  }

  return returnArray;
}
