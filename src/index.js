// import _ from 'lodash';

// import printMe from './print.js';
import {cube} from './math.js';

function component() {
    var pre = document.createElement('pre');

    pre.innerHTML = [
      'Hello webpack!',
      '5 cubed is equal to ' + cube(5)
    ].join('\n\n');  

    return element;
}

document.body.appendChild(component());