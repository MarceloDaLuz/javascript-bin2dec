//  get the numbers passed in args
var numbers = process.argv.slice(2);
function validateNumber(n){
    if(n.length > 8){
        return false;
    }else{
        return true;
    }    
}

numbers.forEach( n => {
    validateResult = validateNumber(n);
    console.log(n, validateResult);
    if(validateNumber === true){
        console.log("é true");
    }
    if(validateNumber === false){
        console.log("é false");
    }
});



