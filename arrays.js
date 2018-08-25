var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(Element, Array) {
  return [Element,...Array]
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, element) {
  return chocolateBars.unshift(element)
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