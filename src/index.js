// import _ from 'lodash';

// import printMe from './print.js';
import {cube} from './math.js';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

function component() {
    var pre = document.createElement('pre');

    pre.innerHTML = [
      'Hello webpack!',
      '5 cubed is equal to ' + cube(5)
    ].join('\n\n');  

    return pre;
}

document.body.appendChild(component());