const repeatString = function(string,num) {
    let rep = "";
    if(num < 0) return 'ERROR';
    for(let i = 0;i<num;i++){
        rep+=string;
    }
    return rep;
};

// Do not edit below this line
module.exports = repeatString;
