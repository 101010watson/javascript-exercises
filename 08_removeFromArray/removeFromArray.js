const removeFromArray = function(arr,...args) {
    return arr.filter(x => !args.includes(x));
    // Explanation - so the x iterator iterates through the array and checks 
    // if the argument is present (expression become false) do not include that element in the array(arr)
    // in the array or not (expression becomes true) include the element in the array(arr)
};

// Do not edit below this line
module.exports = removeFromArray;
