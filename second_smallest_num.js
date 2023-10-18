let arr = [7,2,-1,9,5]
mim_num = arr[0]
second_min = mim_num
for(let i=1;i<arr.length;i++){
    if(arr[i]< mim_num){
        second_min = mim_num
        mim_num = arr[i]
    }
}
console.log(second_min)