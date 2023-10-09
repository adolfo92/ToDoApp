// Create data-key on HTML as data-chore-index
export function _setIndex(container, number) {
  console.log(number);
  container.dataset.choreIndex = `${number}`;
}

export function _addClasses(container, ...classes) {
  for (let i = 0; i < classes.length; i++) {
    const currentClass = classes[i];

    if (hasWhiteSpace(currentClass)) {
      const classWithoutSpaces = replaceWhiteSpace(currentClass);
      container.classList.add(classWithoutSpaces);
      continue;
    }
    container.classList.add(currentClass);
  }
}

function hasWhiteSpace(s) {
  return /\s/g.test(s);
}

function replaceWhiteSpace(s) {
  return s.replace(/\s/g, "-");
}
