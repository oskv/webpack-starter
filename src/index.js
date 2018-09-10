import {one} from './tabs'

console.log(333);
function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = `Hello webpacks ${one}`;

  return element;
}

document.body.appendChild(component());