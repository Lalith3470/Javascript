//Example 1
// let list = [1,17,7,10,5,2,7]
//  for(i=0; i< list.length; i++){
//     console.log(i,list[i]);
// }

// list.forEach(i => {
//     console.log(i);
// });

// console.log(list.length);


// console.log(list[5]); //It will print 5th index element

// console.log(list.pop()); //It will pop the last element

// list.push(10) //Push will append new value
// console.log(list); 

//To change string to array

// let string = "Hi Lalith kiran"
// let a = string.split(" ");
// console.log(a);

// let lst = ["Hi", "Lalith","Kiran"]
// let a = lst.join(" ");
// console.log(a);

// let l=[1,2,3,4,5,6,7,8,9,10]
// let sm=0;
// for(i=0; i<l.length; i++){
//     if(i%2==0){
//         sm=sm+i;
//     }
// }
// console.log(sm);


// let n=5;
// for(i=0; i<n; i++){
//     let lst=[]
//     for(j=0; j<=i; j++){
//         lst.push(j+1);
//     }
//     console.log(lst);

// }


// let lst=["Lalith","Kiran","Hi","Asdfgh"]
// lst.sort()
// console.log(lst);

// let s="Lalith Kiran"
// console.log(s.slice(1,8));

// const numbers = [43, 12, 67, 89, 5, 21, 54, 78];

// let maxNumber = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > maxNumber) {
//     maxNumber = numbers[i];
//   }
// }

// console.log("Maximum number:", maxNumber);


// const numbers = [10, 20, 30, 40, 50];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// console.log("Sum of elements:", sum);


// const numbers = [2, 4, 6, 8, 10];
// const doubledNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   doubledNumbers.push(numbers[i] * 2);
// }

// console.log("Doubled numbers:", doubledNumbers);


// const numbers = [3, 8, 12, 17, 22, 30];
// let evenCount = 0;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     evenCount++;
//   }
// }

// console.log("Number of even elements:", evenCount);


const grades = [85, 92, 78, 95, 88];
let total = 0;

for (let i = 0; i < grades.length; i++) {
  total += grades[i];
}

const average = total / grades.length;
console.log("Average grade:", average);
