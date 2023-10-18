let arr = [7,2,-1,9,5]
max_num = arr[0]
second_max = max_num
for(let i=1;i<arr.length;i++){
    if(arr[i]> max_num){
        second_max = max_num
        max_num = arr[i]
    }
}
console.log(second_max)