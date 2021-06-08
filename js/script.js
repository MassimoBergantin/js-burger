

var createSum = document.getElementById('somma-button');

var resultSumElement = document.getElementById('result-sum');

var userCoupon = document.getElementById("discount");

var price = document.getElementById('price');

createSum.addEventListener('click', function() {

    var resultSumInt = 10;

    var checkNum = document.getElementsByClassName('somma-check');
    
    for (var i = 0; i < checkNum.length; i++) {

        if (checkNum[i].checked) {

             resultSumInt += parseInt (checkNum[i].value);

        }
    } if (userCoupon.value.length === 6){
        document.getElementById('price').innerHTML =  " € "  + parseInt(resultSumInt - 20 / 100).toFixed(2);
    } else{
        document.getElementById('price').innerHTML =  " € "  +  resultSumInt.toFixed(2);  


}
})