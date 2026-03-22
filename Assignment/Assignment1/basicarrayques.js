//1. Print each element (basic iteration)
// const arr =[10,20,30,40];
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

//2. Sum of array (accumulator)
// const arr = [1,2,3,4];
// let sum =0;
// for(let i=0; i<arr.length; i++){
//     sum +=arr[i];
// }
// console.log(sum);

//3. Maximum value without Math.max
// const arr = [5,1,9,3];
// let max =arr[0];
// for(let i=1; i<arr.length; i++){
//     if(arr[i]>max){
//         max=arr[i];
//     }
// }
// console.log(max);

//4. Minimum value with reduce
// const arr=[7,3,9,0];
// let min=arr[0];
// for(let i=1; i<arr.length; i++){
//     if(arr[i]<min){
//         min=arr[i];
//     }
// }
// console.log(min);

//5. Reverse an array (manual)
// const arr = [1, 2, 3];

// let reversed = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//   reversed.push(arr[i]);
// }
// console.log(reversed);

//6. Remove duplicates (preserve order)
// const arr = [1, 2, 2, 3, 1];

// let result = [];

// for (let i = 0; i < arr.length; i++) {
//   if (!result.includes(arr[i])) {
//     result.push(arr[i]);
//   }
// }

// console.log(result);


//7. Count element frequency (generic)
// const arr = ['a', 'b', 'a', 'c'];

// let freq = {};

// for (let i = 0; i < arr.length; i++) {
//   let val = arr[i];

//   if (freq[val]) {
//     freq[val]++;
//   } else {
//     freq[val] = 1;
//   }
// }

// console.log(freq);

//8. Flatten 1-level nested array
// const arr = [1, [2, 3], 4];

// let result = [];

// for (let i = 0; i < arr.length; i++) {
//   if (Array.isArray(arr[i])) {
//     for (let j = 0; j < arr[i].length; j++) {
//       result.push(arr[i][j]);
//     }
//   } else {
//     result.push(arr[i]);
//   }
// }
// console.log(result);

//9. Rotate array by k steps (right)
// const arr = [1, 2, 3, 4];
// let k = 1;

// k = k % arr.length; 

// const result = [
//   ...arr.slice(-k),
//   ...arr.slice(0, arr.length - k)
// ];

// console.log(result);


//10. Chunk array into size n
// const arr = [1, 2, 3, 4, 5];
// let n = 2;

// let result = [];

// for (let i = 0; i < arr.length; i += n) {
//   result.push(arr.slice(i, i + n));
// }

// console.log(result);

//11. Remove falsy values
// const arr = [0, 1, false, 2, '', 3, null];

// const result = arr.filter(Boolean);

// console.log(result);

//12. Find index of first occurrence (manual)
// const arr = ['a', 'b', 'c'];
// const target = 'b';

// let index = -1;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === target) {
//     index = i;
//     break; 
//   }
// }

// console.log(index);

//13. Merge two arrays immutably
// const arr1 = [1, 2];
// const arr2 = [3, 4];

// const result = [...arr1, ...arr2];

// console.log(result);

//14. Interleave two arrays
// const arr1 = [1, 2];
// const arr2 = [10, 20];

// let result = [];

// let maxLen = Math.max(arr1.length, arr2.length);

// for (let i = 0; i < maxLen; i++) {
//   if (i < arr1.length) {
//     result.push(arr1[i]);
//   }
//   if (i < arr2.length) {
//     result.push(arr2[i]);
//   }
// }

// console.log(result);

//15. Sliding window sums (window size k)
// const arr = [1, 2, 3, 4];
// let k = 2;

// let result = [];
// let windowSum = 0;
// for (let i = 0; i < k; i++) {
//   windowSum += arr[i];
// }

// result.push(windowSum);


// for (let i = k; i < arr.length; i++) {
//   windowSum = windowSum + arr[i] - arr[i - k];
//   result.push(windowSum);
// }

// console.log(result);

//16. Create range array (inclusive)
// function createRange(start, end) {
//   let result = [];

//   if (start > end) return result; 

//   for (let i = start; i <= end; i++) {
//     result.push(i);
//   }

//   return result;
// }

// console.log(createRange(3, 6));

// 17. Remove item at index immutably
// const arr = [1, 2, 3];
// const i = 1;

// const result = [
//   ...arr.slice(0, i),
//   ...arr.slice(i + 1)
// ];

// console.log(result);

//18. Count elements matching predicate
// const arr = [5, 12, 8, 20];

// const count = arr.filter(x => x > 10).length;

// console.log(count);

//19. Unique sorted array
// const arr = [3, 1, 2, 3, 2];

// const result = [...new Set(arr)].sort((a, b) => a - b);

// console.log(result);

//20. Map indices to values (index map)
// const arr = ['a', 'b'];

// let result = {};

// for (let i = 0; i < arr.length; i++) {
//   result[i] = arr[i];
// }

// console.log(result);

//SECTION B — OBJECTS (15 questions)
//(Goal: property access, mutation vs immutability, merging, cloning, nested objects)


//21. List keys and values (iteration)
// const obj = { name: 'Aman', age: 22 };

// for (let key in obj) {
//   console.log(key, obj[key]);
// }


//22. Add / update property immutably
// const obj = { name: 'Aman' };

// const newObj = { ...obj, role: 'admin' };

// console.log(newObj);

//23. Delete property immutably
// const user = { name: 'A', password: 'x' };

// const { password, ...rest } = user;

// console.log(rest);

//24. Merge two objects (deep vs shallow)
const a = { x: 1 };
const b = { y: 2 };

const result = { ...a, ...b };

console.log(result);