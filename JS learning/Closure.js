//Example 1
// function outerfunction(){
//     let outervariable=10;
//     function innerfunction(){
//         console.log(outervariable);
//     }
//     return innerfunction;
// }
// const closureExample = outerfunction();
// closureExample();

//Example 2:
// function Fun(){
//     let cnt=0;
//     return function(){
//         cnt++;
//         console.log(cnt);
//     };
// }
// const counter=Fun();
// for(i=0; i<5; i++){
//     counter();
// }

//Example 3