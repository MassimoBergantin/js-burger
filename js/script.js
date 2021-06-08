alert("Per un codice sconto,inserisci un nome al tuo burger!");

var createSum = document.getElementById('somma-button');

var resultSumElement = document.getElementById('result-sum');

createSum.addEventListener('click', function() {

    var resultSumInt = 10;

    var checkNum = document.getElementsByClassName('somma-check');
    
    for (var i = 0; i < checkNum.length; i++) {

        if (checkNum[i].checked) {

             resultSumInt += parseInt (checkNum[i].value)

        }
    }

    resultSumElement.innerHTML = '€' + resultSumInt;
})