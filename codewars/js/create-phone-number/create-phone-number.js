// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
function createPhoneNumber(numbers){
  const phoneNum = [];
  numbers.map((num, i) => {
    if (i === 0) {
      phoneNum.push('(');
      phoneNum.push(num);
    } else if (i === 2) {
      phoneNum.push(num);
      phoneNum.push(')');
      phoneNum.push(' ');
    } else if (i === 5) {
      phoneNum.push('-');
      phoneNum.push(num);
    } else {
      phoneNum.push(num);
    }
    return num;
  })
  phoneNum.join('');
}
