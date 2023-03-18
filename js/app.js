function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        // console.log('3 digit pin not allow')
        return getPin()
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    // display pin 
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})
// calculator er calculate section
document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNumbersField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumbersField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typedNumbersField.value = '';
        }
        else if(number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumbersField.value = remainingDigits;
        }
    }
    else{
        const newTypedNumber = previousTypedNumber + number;
        typedNumbersField.value = newTypedNumber;
    }
});

// pin matched and submit system section

document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNumbersField = document.getElementById('typed-numbers');
    const typedNumber = typedNumbersField.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinWrongMessage = document.getElementById('pin-wrong')
    if(typedNumber === currentPin){
        pinSuccessMessage.style.display = 'block';
        pinWrongMessage.style.display = 'none';
    }
    else{
        pinWrongMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
});