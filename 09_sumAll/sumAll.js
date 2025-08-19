const sumAll = function(min,max) {
    if(!Number.isInteger(min) || !Number.isInteger(max)) return 'ERROR';
    if(min<0 || max < 0) return 'ERROR';
    let res = 0;
    if(min>max) [min,max] = [max,min];
    for(let i = min;i<=max;i++){
        res+=i;
    }
    return res;
};

// Do not edit below this line
module.exports = sumAll;
