function exam1() {//0~100 시간 측정
    // var sum = 0
    // var startTime = new Date().getTime();
    // for (var i = 0; i <= 100; i++) {
    //     sum += i;
    // }
    // var endTime = new Date().getTime();
    // var resultTime = endTime - startTime;
    // return resultTime;
    return 0;
}

function exam2(str) {//문자열 공백, 소문자 치환
    var Rstr = str.replace(/ /g, '_').toLowerCase();
    return Rstr;
}

function exam3(iden_num) {//생년월일 출력
    var year, month, day, sex;
    year = iden_num.substring(0, 2);
    month = iden_num.substring(2, 4);
    day = iden_num.substring(4, 6);
    sex = iden_num.substring(7, 8);
    if (sex == 1 || sex == 3) {
        sex = "남자";
    }
    else if (sex == 2 || sex == 4) {
        sex = "여자";
    }
    else {
        sex = "외국인";
    }
    var result = year + "년" + month + "월" + day + sex;
    return result;
}

function exam4(str) {//문자열 뒤집기
    var strReverse = str.split("").reverse().join("");
    return strReverse;
}

function exam5(str) {
    var longest = 0;
    var array = str.split(' ');
    for (var i = array.length - 1; i >= 0; i--) {
        if (array[i].length > longest) {
            longest = array[i].length;
            var maxWork = array[i];
        }
    }
    return maxWork;
}

function exam6(year, month) {//마지막 날 출력
    var lastDate = new Date(year, month, "");
    return lastDate.getDate();
}

function exam7(str, num) {
    var strRplace;
    var num = parseInt(num);
    var list = [];
    for (var i = 0; i < str.length; i += num) {
        strRplace = str.slice(i, i + num);
        list.push(strRplace);
    }
    return list;
}

function exam8(str) {
    // var text = str.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, "");
    // return text;
    return str.replace(/(<([^>]+)>)/ig, "");
}

function exam9(num) {
    // for (var j = 1; j <= 9; j++) {
    //     console.log(num + " * " + j + " = " + num * j);
    // }
    return 0;
}

function exam10(num) {
    if (!isNaN(num)) {// 숫자면 true
        if (num % 2 == 0) {
            return "Even";
        }
        else {
            return "Odd";
        }
    }
    else return "isNan"

}
function exam11(arr) {
    var sum = 0;
    var arr;
    if (Array.isArray(arr)) {
        for (var i = 0, j = arr.length; i < j; i++) {
            sum += arr[i];
        }
        return sum / arr.length;
    }
    else return "notArr";
}

function exam12(str) {
    var result = str.match(/a/g);
    if (result != null) {
        return result.length;
    }
}
function exam13(arr) {//마지막 배열 값 리턴
    if (Array.isArray(arr)) {
        return arr[arr.length - 1];
    }
    else return "not Arr";
}
function exam14(str) {//뒤집힌 문자열 비교
    if (isNaN(str)) {

        var strReverse = str.split("").reverse().join("");
        if (str == strReverse) {
            return true;
        }
        else {
            return false;
        }
    } else return "not String";
}

function exam15(num) {
    var str = num.toString();
    if (str == undefined || str === '') {
        return '';
    }
    else if (str.length >= 4) {
        var b = str.substring(str.length - 2);
        return "*".repeat(num.toString().length - 2) + b;
    }
}

function exam16(str) {
    var chkInt = Number(str);
    if (!isNaN(chkInt)) {// 숫자면 true
        return chkInt;
    }
    else return "isNaN";
}
function exam17(arr) {
    return Array.isArray(arr);
}
function exam18(s) {
    var jbSplit = s.split('');
    var zeroNumCheck = 0;
    var zero = 0;
    for (var i in jbSplit) {
        if (jbSplit[i] == "(") {
            zeroNumCheck += 1;
        }
        else if (jbSplit[i] == ")") {
            zeroNumCheck -= 1;
            if (zeroNumCheck < 0) {
                break;
            }
        }
    }
    return zeroNumCheck == 0 ? true : false;
}

function exam19(num) {
    var num = parseInt(num);
    var re = 0;
    for (var i = 1; i <= num; i++) {
        if (num % i == 0 && i % 2 == 1)
            re++;
    }
    return re;
}
function exam20(num) {
    var num = parseInt(num);
    var sum=0;
    var Re2 = 0;//2+2, 2+2+2등 2로만 더해지는 수의 개수
    function fac(n) {
        end_num = 1;
        if (n == end_num) return end_num;
        else return n * fac(n - 1);
    }
    if (num % 2 == 0) {
        Re2++;//8일 경우: 2 2 2 2, 6: 2 2 2, 4:  2 2등
    }
    for (var n = 1; n <= (num / 2); n++) {
        var k = (num - (2 * n));
        if ((2 * n) + k == num) {
            if (k > 0) {
                var calc = fac(k + n) / (fac(k) * fac(n));
                sum+=calc;  
            }
        }
    }
    var Answer=1+Re2+sum;
    return Answer;
}