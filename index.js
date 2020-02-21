//  get the numbers passed in args
var numbers = process.argv.slice(2);

function validateNumber(n){
    if(n.length > 8){        
        return false;
    }else{
        digits =  n.split("");
        digitsValidated = [];
        digits.forEach(digit => {
            if(parseInt(digit) != 0 && parseInt(digit) != 1){
                digitsValidated.push(false);
            }else{
                digitsValidated.push(true);
            }
        });
        if(digitsValidated.filter(digit => digit == false).length > 0){
            return false
        }
        
        return true;
    }    
}

function convertToDec(binArr){
    let decResult = 0;
    
    //get the binary and reverse it! 
    binArr.reverse();
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



