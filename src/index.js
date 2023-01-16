module.exports = function toReadable (number) {
    const numbers = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten' ];
    const secondDecade = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];
    const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];

    let numberArr = number.toString().split('');

    function getPrimeNumber() {
        let lastNumber = numberArr.length - 1;
            return numbers[numberArr[lastNumber]];
    };

    function getDoubleNumber() {
        let lastTwoNumbersArr = numberArr.slice(-2);
        let condition = +lastTwoNumbersArr.join('');
            if ( condition > 9 && condition < 20 ) {
                return secondDecade[lastTwoNumbersArr[1]];
            } else {
                return +lastTwoNumbersArr[1] === 0 ? tens[lastTwoNumbersArr[0] - 2] : `${tens[lastTwoNumbersArr[0] - 2]} ${numbers[lastTwoNumbersArr[1]]}`;
            }
    }
    
    function getTripleNumber () {
        if (number % 100 === 0) {
            return `${numbers[numberArr[0]]} hundred`
        } else if (+numberArr[1] === 0) {
            return `${numbers[numberArr[0]]} hundred ${getPrimeNumber()}`
        } else {
            return `${numbers[numberArr[0]]} hundred ${getDoubleNumber()}`
        }
    }

    switch(numberArr.length) {
        case 1:
            return getPrimeNumber();
        case 2:
            return getDoubleNumber();
        case 3:
            return getTripleNumber();
    }
}

