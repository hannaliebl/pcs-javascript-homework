function toRoman(num) {
    if ((num.toString().length === 1) || num === 10) { // 1 - 10
        oneToTen(num);
        console.log(tenAndUnder);
    } else if (num.toString().length === 2) { //11 - 99
        var ones = Math.round(((num/10) - Math.floor((num/10)))*10);
        console.log(twoPlaces(num)+oneToTen(ones));
    } else if (num.toString().length === 3 ) { // 100 - 999
        var ones = Math.round(((num/10) - Math.floor((num/10)))*10);
        var tens = Math.round(((num/10) - Math.floor((num/10)))*100);
        console.log(threePlaces(num)+twoPlaces(tens)+oneToTen(ones));
    } else if (num.toString().length === 4) { //1000 - 4999 (all I care about)
        var ones = Math.round(((num/10) - Math.floor((num/10)))*10);
        var tens = Math.round(((num/10) - Math.floor((num/10)))*100);
        var hundreds = Math.round(((num/10) - Math.floor((num/10)))*1000);
        console.log(fourPlaces(num)+threePlaces(hundreds)+twoPlaces(tens)+oneToTen(ones));
    }
    //ones
    function oneToTen(a){
        if (a === 1) {
            tenAndUnder = "I";
        } else if (a === 2) {
            tenAndUnder = "II";
        } else if (a === 3) {
            tenAndUnder = "III";
        } else if (a === 4) {
            tenAndUnder = "IV";
        } else if (a === 5) {
            tenAndUnder = "V";
        } else if (a === 6) {
            tenAndUnder = "VI";
        } else if (a === 7) {
            tenAndUnder = "VII";
        } else if (a === 8) {
            tenAndUnder = "VIII";
        } else if (a === 9) {
            tenAndUnder = "IX";
        } else if (a === 10) {
            tenAndUnder = "X";
        } else {
            tenAndUnder = "";
        }
        return tenAndUnder
    }
    //tens
    function twoPlaces(num) {
        if (Math.floor(num/10) === 1) {
            var tensBase = "X";
        } else if (Math.floor(num/10) === 2) {
            var tensBase = "XX";
        } else if (Math.floor(num/10) === 3) {
            var tensBase = "XXX";
        } else if (Math.floor(num/10) === 4) {
            var tensBase = "XL";
        } else if (Math.floor(num/10) === 5) {
            var tensBase = "L";
        } else if (Math.floor(num/10) === 6) {
            var tensBase = "LX";
        } else if (Math.floor(num/10) === 7) {
            var tensBase = "LXX";
        } else if (Math.floor(num/10) === 8) {
            var tensBase = "LXXX";
        } else if (Math.floor(num/10) === 9) {
            var tensBase = "XC";
        } else {
            var tensBase = "";
        }
        return tensBase
    }
    //hundreds
    function threePlaces(num) {
        if (Math.floor(num/100) === 1) {
            var hundredsBase = "C";
        } else if (Math.floor(num/100) === 2) {
            var hundredsBase = "CC";
        } else if (Math.floor(num/100) === 3) {
            var hundredsBase = "CCC";
        } else if (Math.floor(num/100) === 4) {
            var hundredsBase = "CD";
        } else if (Math.floor(num/100) === 5) {
            var hundredsBase = "D";
        } else if (Math.floor(num/100) === 6) {
            var hundredsBase = "DC";
        } else if (Math.floor(num/100) === 7) {
            var hundredsBase = "DCC";
        } else if (Math.floor(num/100) === 8) {
            var hundredsBase = "DCCC";
        } else if (Math.floor(num/100) === 9) {
            var hundredsBase = "CM";
        } else {
            hundredsBase = "";
        }
        return hundredsBase
    }
    //thousands
    function fourPlaces(num) {
        if (Math.floor(num/1000) === 1) {
            var thousandsBase  = "M";
        } else if (Math.floor(num/1000) === 2) {
            var thousandsBase  = "MM";
        } else if (Math.floor(num/1000) === 3) {
            var thousandsBase  = "MMM";
        } else if (Math.floor(num/1000) === 4) {
            var thousandsBase  = "MMMM";
        } else {
            thousandsBase  = "";
        }
        return thousandsBase   
    }
}
toRoman(1987);