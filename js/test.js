// const printMessage = function(message) {
//     console.log(message);
//   };
  
//   const higherOrderFunction = function(callback) {
//     const string = 'HOCs are awesome';
//     callback(string);
//   };
  
//   higherOrderFunction(printMessage);


// const repeatLog = function(n) {
//     for (let i = 0; i < n; i += 1) {
//       console.log(i);
//     }
//   };
  
//   repeatLog(5);


// const filter = function(array, test) {
//     const filteredElements = [];
  
//     for (const element of array) {
//       const passed = test(element);
  
//       if (passed) {
//         filteredElements.push(element);
//       }
//     }
  
//     return filteredElements;
//   };
  
//   const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
//   ];
  
//   const freshFruits = filter(fruits, fruit => fruit.isFresh);
//   console.log(freshFruits); // массив с объектами apples и bananas
  
//   const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
//   console.log(fruitsWithAmount); // массив с объектами apples и grapes


const bar = function () {
    console.log('bar');
  };
  
  const baz = function () {
    console.log('baz');
  };
  
  const foo = function () {
    console.log('foo');
    bar();
    baz();
  };
  
  foo();