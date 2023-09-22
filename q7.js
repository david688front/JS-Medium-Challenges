function getMax(arr) {
    let max = arr[0];
    for(let i=1; i < arr.lenght; ++i){
        if( arr[i] > max ) {
            max = arr[i];
        }
    }
    return max;
}

console.log( getMax([1000,3,500]));