const findBestEmployee = function (employees) {
    'use strict';
    // Write code under this line
    /* const keys = Object.keys(employees);    
    const values = Object.values(employees);
    const max = Math.max(...values);    
    for (const key of keys) {        
        const value = employees[key];        
        if (value === max) {
            return key;
        }        
    }       */

    let max = 0;
    let maxName = '';

  for(const [name, zp] of Object.entries(employees)) {
    if (max < zp) {
      max = zp;
      maxName = name;
    }
  }

  return maxName;
};
  
  // Объекты и ожидаемый результат
const developers = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
}; 
console.log(findBestEmployee(developers)); 
  // 'lorence'
  
const supports = {
    poly: 12,
    mango: 17,
    ajax: 4,
}; 
console.log(findBestEmployee(supports)); 
  // 'mango'
  
const sellers = {
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
}
console.log(findBestEmployee(sellers)); 
  // 'lux'

const seller = {
    
}
console.log(findBestEmployee(seller)); 
  