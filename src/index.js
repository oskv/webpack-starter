import {one} from './tabs'
import './styles.css'
import './gallery.css'

console.log(333);
function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = `Hello webpacks ${one}`;

  return element;
}

document.body.appendChild(component());