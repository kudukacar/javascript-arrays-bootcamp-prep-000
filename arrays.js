var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(Element, Array) {
  return [Element,...Array];
}
function destructivelyAddElementToBeginningOfArray(Array, Element) {
  return Array.unshift(Element);
}
function addElementToEndOfArray(chocolateBars, element) {
  return [...chocolateBars, element]
}
function destructivelyAddElementToEndOfArray(chocolateBars, element) {
  return chocolateBars.push(element)
}
accessElementInArray(chocolateBars,Index) {
  return chocolateBars[Index]
}
}