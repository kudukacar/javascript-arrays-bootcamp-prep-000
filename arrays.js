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
accessElementInArray(chocolateBars,Index) {
  return chocolateBars[Index]
}
}