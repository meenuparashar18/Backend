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
// const a = { x: 1 };
// const b = { y: 2 };

// const result = { ...a, ...b };

// console.log(result);

//25. Convert keys ↔ values (invert object)
// const obj = { a: 1, b: 2 };

// const inverted = Object.entries(obj).reduce((acc, [key, value]) => {
//   acc[value] = key;
//   return acc;
// }, {});

// console.log(inverted);

//26. Deep clone simple object (no functions)
// const obj = { a: { b: 2 } };

// const deepCopy = JSON.parse(JSON.stringify(obj));

// deepCopy.a.b = 100;

// console.log(obj.a.b); 
// console.log(deepCopy.a.b); 

//27. Count properties (keys)
// const obj = { a: 1, b: 2 };

// const count = Object.keys(obj).length;

// console.log(count); 

//28. Default values using destructuring
// const user = { name: 'A' };

// // Destructure with default value for role
// const { name, role = 'user' } = user;

// console.log(name); 
// console.log(role); 

// function greet({ name, role = 'user' }) {
//   console.log(`Hello ${name}, your role is ${role}`);
// }

// greet({ name: 'A' }); 

// greet({ name: 'B', role: 'admin' }); 

//29. Pick subset of properties (pick)
// const user = { id: 1, name: 'A', email: 'a@x' };
// const keysToPick = ['id', 'email'];

// const picked = keysToPick.reduce((obj, key) => {
//   if (key in user) {
//     obj[key] = user[key];
//   }
//   return obj;
// }, {});

// console.log(picked); 


//30. Omit properties (opposite of pick)
// const user = { user: 'A', password: 'x' };

// // Destructure the property to omit, gather the rest
// const { password, ...safeUser } = user;

// console.log(safeUser); 


//31. Merge nested objects immutably (one-level nested)
// const user = { 
//   name: 'A', 
//   address: { city: 'Old', zip: 123 } 
// };

// // Update city immutably
// const updatedUser = {
//   ...user,
//   address: {
//     ...user.address,
//     city: 'New'
//   }
// };

// console.log(updatedUser);
// /* Output:
// {
//   name: 'A',
//   address: { city: 'New', zip: 123 }
// }
// */

// // Original object remains unchanged
// console.log(user);
// /* Output:
// {
//   name: 'A',
//   address: { city: 'Old', zip: 123 }
// }
// */

//32. Rename a key in object immutably
// const user = { fullName: 'A', age: 20 };

// // Destructure to pick the value and rest of the object
// const { fullName, ...rest } = user;

// // Create new object with renamed key
// const updatedUser = { name: fullName, ...rest };

// console.log(updatedUser);
// // Output: { name: 'A', age: 20 }

// // Original object remains unchanged
// console.log(user);
// // Output: { fullName: 'A', age: 20 }


//33. Merge defaults with provided config
// const defaults = { retries: 3, timeout: 500 };
// const config = { timeout: 100 };
// const mergedConfig = { ...defaults, ...config };

// console.log(mergedConfig);

//34. Check if object is empty
// const obj1 = {};

// const isEmpty = Object.keys(obj1).length === 0;

// console.log(isEmpty); 

//SECTION C — ARRAY OF OBJECTS (30 questions)
//(Goal: real backend-like tasks — aggregation, joins, grouping, paging, search, update patterns)

//Use the base data for many questions (adjusted per question):

//35. Total spending per user (aggregate)
const orders = [
  { id: 1, userId: 1, total: 500, status: 'completed' },
  { id: 2, userId: 2, total: 300, status: 'pending' },
  { id: 3, userId: 1, total: 200, status: 'completed' },
  { id: 4, userId: 3, total: 700, status: 'completed' }
];

const totalSpentPerUser = orders.reduce((acc, order) => {
  acc[order.userId] = (acc[order.userId] || 0) + order.total;
  return acc;
}, {});

console.log(totalSpentPerUser);
