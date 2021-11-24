let arr=[3,4];
//sum of array
// let sumofarr=arr.reduce(function(prev,curr){
//   return prev+curr;
// });
// console.log(sumofarr);
// 
//get sqauresum
// let sqsum=arr.reduce((target,i)=>target+=i*i,0);
// console.log(sqsum);
//sum of values in an object array
// let sum=[{x:1},{x:2},{x:3}].reduce((prev,curr)=>{
//   return prev+curr.x
// },0);
//console.log(sum);
//flaten an array
// let bulgearr=[[1,2],[3,4],[5,6]];
// let flattenarr=bulgearr.reduce((prev,curr)=>{
//   return prev.concat(curr);
// },[]);
// console.log(flattenarr);
//remove duplicate array
let myarr=[1,2,2,5,3,6,6,8,9,9,1];
let ans=myarr.reduce((prev,curr)=>{
  if(prev.indexOf(curr)===-1){
    prev.push(curr);
  }return prev;
},[]);
console.log(ans);
console.log(myarr.indexOf(5));
