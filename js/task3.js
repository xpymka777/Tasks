//сделать палиндромы из строк "дим" "манек" "рота" чтоб получилось "димид" "манекенам" "ротатор"

//фуннкция которая нам будет делать полиндромы из входящих строк
function makePalindrome(str) {
    //создаёт полиндром, соединяя изначальную строку с перевёрнутой строкой без 1 символа, чтобы получилось правильное слово
    let palindrome = str + str.split('').reverse().splice(1).join('')
    return palindrome;
}

//строки с изначальными значениями
let str1 = "дим";
let str2 = "манек";
let str3 = "рота";

//строки полиндромы, которые вызывают функцию и передают строки
let palindrome1 = makePalindrome(str1);
let palindrome2 = makePalindrome(str2);
let palindrome3 = makePalindrome(str3);

//итоговый вывод
console.log(palindrome1);
console.log(palindrome2);
console.log(palindrome3);
