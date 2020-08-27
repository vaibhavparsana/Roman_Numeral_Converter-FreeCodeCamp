function convertToRoman(num) {
    var newStr = "";
    var copyNum = num;
    var newVal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];


    if (num >= 10) {
        var numlength = num.toString().length;
        if (num >= 1000) {
            var dumNum = (num - num % 1000) / 1000;
            while (dumNum > 0) {
                checkOne(1000);
                dumNum--;
            }
            if ((num % 1000).toString().length === 2) {
                numlength = 2;
            }
            else if (((num % 1000).toString().length === 1)) {
                numlength = 1;
            }
            else {
                numlength = numlength - 1;
            }
        } else if ((num < 1000) && (num % 100 !== 0)) {
            if ((num % 100).toString().length === 1) {
                checkWhole(num);
                numlength = 1;
            }
        } else if (num % 100 === 0) {
            numlength = 0;
            checkWhole(num);
        }
        switch (numlength) {
            case 3:
                num = num % 1000;
                checkWhole(num);
                num = num % 100;
                checkWhole(num);
                num = num % 10;
                checkWhole(num);
                break;
            case 2:
                num = num % 100;
                checkWhole(num);
                num = num % 10;
                checkWhole(num);
                break;
            case 1:
                num = num % 10;
                checkOne(num);
                break;
        }
    } else {
        checkOne(num);
    }

    function checkWhole(val2) {
        for (var i = 0; i < newVal.length; i++) {
            if (val2 > 0 && val2 < 10) {
                return newStr = checkOne(val2);
            }
            if (val2 === newVal[i]) {
                return newStr = checkOne(newVal[i]);
            }
            if (val2 > newVal[i] && val2 < newVal[i + 1]) {
                return newStr = checkOne(newVal[i]);
            }
        }
    }

    function checkOne(val) {
        switch (val) {
            case 1: return newStr += 'I'; break;
            case 2: return newStr += 'II'; break;
            case 3: return newStr += 'III'; break;
            case 4: return newStr += 'IV'; break;
            case 5: return newStr += 'V'; break;
            case 6: return newStr += 'VI'; break;
            case 7: return newStr += 'VII'; break;
            case 8: return newStr += 'VIII'; break;
            case 9: return newStr += 'IX'; break;
            case 10: return newStr += 'X'; break;
            case 20: return newStr += 'XX'; break;
            case 30: return newStr += 'XXX'; break;
            case 40: return newStr += 'XL'; break;
            case 50: return newStr += 'L'; break;
            case 60: return newStr += 'LX'; break;
            case 70: return newStr += 'LXX'; break;
            case 80: return newStr += 'LXXX'; break;
            case 90: return newStr += 'XC'; break;
            case 100: return newStr += 'C'; break;
            case 200: return newStr += 'CC'; break;
            case 300: return newStr += 'CCC'; break;
            case 400: return newStr += 'CD'; break;
            case 500: return newStr += 'D'; break;
            case 600: return newStr += 'DC'; break;
            case 700: return newStr += 'DCC'; break;
            case 800: return newStr += 'DCCC'; break;
            case 900: return newStr += 'CM'; break;
            case 1000: return newStr += 'M'; break;
        }
    }
    console.log(newStr)
    return newStr;
}


convertToRoman(36);
