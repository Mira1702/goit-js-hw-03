const countProps = function(obj) {
    'use strict';
  // Write code under this line
  const keys = Object.keys(obj);
  let count = 0;
  /* i = 0; i < obj.length; i += 1; */
  for (let key in obj) {
    count++;
  }

};

console.log(countProps({})); // 0

console.log(countProps({a:1, b:1})); // 2

console.log(countProps({a:1, b:1, c:1, d:1, e:1})); // 5