function addsquares(a,b){
    const sa = square(a);
    const sb = square(b);
    function square(num){
        return num*num;
    }
    return sa+sb;
}

console.log(addsquares(3,4));