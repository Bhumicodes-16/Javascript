let arr = [1, 2, 3, 4, 5, 7]

console.log(arr)
console.log(arr.length)
console.log(arr[0])
console.log(arr, typeof arr)
console.log(arr.toString())

console.log(arr.join(" and "))

// we have pop, push , slice, concat , for each ,for in

arr.push("Harry")
arr.push(100)

console.log(arr)
// we can use shift unshift push pop delete
 
let a1 = [1, 2, 3]
let a2 = [4, 5, 6]
let a3 = [8, 10, 9]
a1.concat(a2, a3)

console.log(a3.sort())