'use strict';

console.log('Im alive');

window.onload = function() {

    let h2 = document.createElement('h2');

    h2.textContent = 'One';

    document.getElementById('content').appendChild(h2);
};

function buttonClick() {

    let cars = document.getElementById('data').value;


    console.log(cars);
}
