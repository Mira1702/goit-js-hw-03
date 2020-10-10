function calculateTotalPrice (array, prop) {
    'use strict';
    // Write code under this line
    let total = 0;
    for (let i = 0; i < array.length; i += 1){  
      const keys = Object.keys(array[i])      
        if (prop === array[i][keys[0]]){
          total += array[i][keys[1]]*array[i][keys[2]]
        }          
    }
    return total;
}
/* console.log(sumProps_1 (array)); */

  // Объекты и ожидаемый результат
const products = [
      { name: 'Радар', price: 1300, quantity: 4 },
      { name: 'Радар', price: 1280, quantity: 2 },
      { name: 'Радар', price: 1320, quantity: 1 },
      { name: 'Сканер', price: 2700, quantity: 1 },
      { name: 'Сканер', price: 2500, quantity: 3 },
      { name: 'Дроид', price: 400, quantity: 7 },
      { name: 'Захват', price: 1200, quantity: 2 }
]; 


  
console.log(calculateTotalPrice(products, 'Радар'));  
  // 9080
  
console.log(calculateTotalPrice(products, 'Сканер')); 
  // 10200
  
console.log(calculateTotalPrice(products, 'Захват'));
  // 2400
  
console.log(calculateTotalPrice(products, 'Дроид')); 
  // 2800

  /* let total = 0;
for (let i = 0; i < array.length; i += 1){  
  const value = Object.values(array)    
      if (value[0]===prop){
        total += this[i][array]
      }      
      return total;
} */

/* var a = [
  {prop_1: 1, prop_2: 2, prop_3: 5},
  {prop_1: 2, prop_2: 4},
  {prop_1: 3, prop_2: 6, prop_3: 8},
  {prop_1: 4, prop_2: 8, prop_4: 5}
];
  
// *1 вариант, низкоуровневое решение
  function sumProps_1 (arr) {
   var out = {};
   arr.forEach(function(i) {
    for (var p in i) {
     if (i.hasOwnProperty(p)) {
      out[p] = out[p] || 0;
      out[p] += i[p];
     }
    }
   });
   return out;
  }
console.log(sumProps_1 (a)); */

/* let total = {};
   array.forEach(function(i) {
    for (let p in i) {
     if (i.hasOwnProperty(p)) {
      total[p] = total[p] || 0;
      total[p] += i[p];
     }
    }
   });
   return total; */