//  get the numbers passed in args
var numbers = process.argv.slice(2);

/**
 * function to validate
 * @param {string} n - Binary number. E.g.: 1001
 * @returns {boolean}
 */
function validateNumber(n){
    if(n.length > 8){        
        return false;
    }else{
        digits =  n.split("");
        if(digits.filter(digit =>  parseInt(digit) != 0 && parseInt(digit) != 1).length > 0){
            return false;
        }
        
        return true;
    }    
}
/**
 * function to convert binary to decimal
 * @param {Array} binArr - array with binary numbers. e.g.: 1001 = [1,0,0,1] 
 * @returns {Number}
 */
function convertToDec(binArr){
    binArr.reverse();
    let decResult = 0;
    binArr.forEach((val, index) => decResult = decResult + (val * Math.pow(2, index)));
    return decResult;
}

numbers.forEach( n => {
    let validated = validateNumber(n);
    if(validated == true){
        let valueDec = convertToDec(n.split(""));
        console.log(`${n} = ${valueDec}`);
    }
    if(validated == false){
        console.log(`I can not converted ${n} to decimal`)
    }
});