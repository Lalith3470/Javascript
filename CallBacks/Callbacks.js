// //example 1:
// let test1 = (a)=>{
//     console.log("a---->",a);
//     a();
// };
// let test2 = ()=>{
//     console.log("Hello");
// };
// test1(test2);

// //Example 2:
// function fun(name, callback){
//     console.log("Hello, "+name);
//     callback();
// }
// function fun1(){
//     console.log("Goodbye!...");
// }
// fun("Lalith",fun1);

// //Example 3:
function fun(name,callback){
    console.log("Hello, "+name);
    setTimeout(function (){
        callback();
    },2000);
}
function fun1(){
    console.log("Goodbe after 2 seconds!");
}
fun("Bob",fun1);