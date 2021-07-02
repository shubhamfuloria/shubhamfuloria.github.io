let operationString = '';

document.querySelector('.key_1').addEventListener('click', function(){
    operationString += '1';
    updateUI();
})


document.querySelector('.key_2').addEventListener('click', function(){
    operationString += '2';
    updateUI();
})


document.querySelector('.key_3').addEventListener('click', function(){
    operationString += '3';
    updateUI();
})


document.querySelector('.key_4').addEventListener('click', function(){
    operationString += '4';
    updateUI();
})


document.querySelector('.key_5').addEventListener('click', function(){
    operationString += '5';
    updateUI();
})


document.querySelector('.key_6').addEventListener('click', function(){
    operationString += '6';
    updateUI();
})


document.querySelector('.key_7').addEventListener('click', function(){
    operationString += '7';
    updateUI();
})


document.querySelector('.key_8').addEventListener('click', function(){
    operationString += '8';
    updateUI();
})

document.querySelector('.key_9').addEventListener('click', function(){
    operationString += '9';
    updateUI();
});


document.querySelector('.key_0').addEventListener('click', function(){
    operationString += '0';
    updateUI();
})

document.querySelector('.key_start').addEventListener('click', function(){
    operationString = '';
    updateUI();
})


document.querySelector('.key_plus').addEventListener('click', function(){
    operationString += '+';
    updateUI();
})



document.querySelector('.key_minus').addEventListener('click', function(){
    operationString += '-';
    updateUI();
})



document.querySelector('.key_multi').addEventListener('click', function(){
    operationString += '*';
    updateUI();
})



document.querySelector('.key_devide').addEventListener('click', function(){
    operationString += '/';
    updateUI();
})



document.querySelector('.key_delete').addEventListener('click', function(){
    operationString= operationString.substring(0, operationString.length-1);
    updateUI();
})

document.querySelector('.key_equal').addEventListener('click', function(){

    let result = eval(operationString);
    operationString = result;

    updateUI();
})



function updateUI(){

    document.querySelector('.display').innerText = operationString;
}
