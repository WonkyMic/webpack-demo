import _ from 'lodash';
import './style.css';
import Logo from './ll-logo.png';

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  var myLogo = new Image();
  myLogo.src = Logo;

  element.appendChild(myLogo);

  return element;
}

document.body.appendChild(component());
