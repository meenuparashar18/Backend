//1. Print each element (basic iteration)
// const arr =[10,20,30,40];
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

//2. Sum of array (accumulator)
// const arr = [10,20,30,40];
// let sum =0;
// for(let i=0; i<arr.length; i++){
//     sum +=arr[i];
// }
// console.log(sum);

//3. Maximum value without Math.max
const arr = [10,20,30,40];
let max =arr[0];
for(let i=1; i<arr.length; i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log(max);
