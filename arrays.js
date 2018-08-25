var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(Element, Array) {
  return [Element,...Array];
}
function destructivelyAddElementToBeginningOfArray(Array, Element) {
  return Array.unshift(Element);
}
function addElementToEndOfArray(Array, Element) {
  return [...Array, Element];
}
function destructivelyAddElementToEndOfArray(Array, Element) {
  return Array.push(Element);
}
function accessElementInArray(Array,Index) {
  return Array[Index];
}
function destructivelyRemoveElementFromBeginningOfArray(Array) {
  Array.shift();
  return Array;
}
function removeElementFromBeginningOfArray(Array) {
  return Array.slice(1);
}
function destructivelyRemoveElementFromEndOfArray(Array) {
  Array.pop();
  return Array;
}
function removeElementFromEndOfArray(Array) {
  return Array.slice(0, length - 1);
}
