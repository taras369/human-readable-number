
module.exports = function toReadable (number = 243) {
    let a = ['zero','one','two','three','four', 'five','six', 'seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'],
        b = ['','','twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'], 
        result = [],
        hundreads = 0,
        tens = 0;
    
    if(!number) {return a[0];}

    if (number >= 100) {
        hundreads = (number - number % 100) / 100;
        number = number % 100;
    } if (number >= 20) {
        tens = (number - number % 10)/10;
        number = number % 10;
    } if (hundreads) {
        result.push(a[hundreads]);
        result.push('hundred');
    } if (tens) {
        result.push(b[tens]);
    } if (number) {
        result.push(a[number]);
    } return result.join(' ');
};


