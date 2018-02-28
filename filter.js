function filter (arr){
    let newArr = [];
    for(let i = 0;i <= arr.length;i++){
        if(arr[i] > 5){
            newArr.push(arr[i])
        }
    }
    return newArr;
}

filter([2,4,6,8])