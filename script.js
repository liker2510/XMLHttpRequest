'use strict';
let xhr = new XMLHttpRequest();
xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
xhr.send();
xhr.onload = function() {
    console.log(xhr.response);
};
