

// function getInputValueById(){

//     const addmoney = document.getElementById('input-add-money').value ;
//     return addmoney;
// }

function getInputValueById(id){

    const inputValue = document.getElementById(id).value ;
    const inputNumber = parseFloat(inputValue);

    return inputNumber;

}

function getTextFieldById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function ShowSectionById(id){

    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('trans-form').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');

}