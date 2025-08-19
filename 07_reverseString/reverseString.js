const reverseString = function(string) {
    if(string === '') return '';
    let reversed = '';
    for(let i = string.length; i >= 0;i--){
        reversed += string.slice(i,i+1);
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
