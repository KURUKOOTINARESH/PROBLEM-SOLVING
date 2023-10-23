let arr = [1,2,3,4,5]
let temp = arr[0]
let n = arr.length

for(let i=1;i<n;i++){
    arr[i-1]=arr[i]
}
arr[n-1] = temp
console.log(arr)