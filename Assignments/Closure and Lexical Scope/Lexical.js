// Exaple 1
// function Fun(){
//     let temp=10;
//     function Fun1(){
//         console.log(temp);
//     }
//     Fun1();
// }
// Fun();

// Exaple 2
// function Fun(){
//     const lst=[];
//     for(let i=0; i<10; i++){
//         lst.push(function(){
//             console.log(i);
//         });
//         }
//     return lst;
// }
// const ans = Fun();
// for(let i=0; i<5; i++){
//     ans[i]();
// }


// Example 3
// function outer() {
//     let outerVar = 'Hii im outer';
  
//     function inner() {
//       console.log(outerVar);
//     }
  
//     return inner;
// }

// const closureExample = outer();
// closureExample();