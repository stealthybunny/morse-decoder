const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  // write your solution here
  let arr10 = [];
  let l = expr.length;
  for (i = 0; i <= l - 1; i = i + 10) {
    let x = expr.slice(i, i + 10);
    arr10.push(x);
  }
  console.log(arr10);
  let arrClean = [];
  let l2 = arr10.length;
  let z = '';
  
  
  for (let n = 0; n < l2; n++) {
   
    if (arr10[n] === "**********") {
      arrClean.push(' ');
      
    }
    else {      
      for (let j = 0; j < arr10[n].length; j++) {        
        if (arr10[n][j] == 1) {
          z = arr10[n].slice(j);
          break;
        }
      }
      console.log(z);
      arrClean.push(z);
      
    }
  }
  console.log(`arrClean = ${arrClean}`);
  
  let arrTransform = [];
  let y = '';
  for (let w = 0; w < arrClean.length; w++) {
    console.log(w);
    if (arrClean[w] === ' ') {
      arrClean[w] = ' ';
    }
    else {
      console.log(`arrClean[w] = ${arrClean[w]}`);
      arrClean[w] = arrClean[w].replace(/10/gi, '.').replace(/11/gi, '-');
     
    }
  }
  console.log(`arrClean = ${arrClean}`);
  for (let p = 0; p < arrClean.length; p++) {
    if (arrClean[p] === ' ') {
        arrTransform.push(arrClean[p]);
    }
    else {
        for (let key in MORSE_TABLE) {
            if (key == arrClean[p]) {
                arrTransform.push(MORSE_TABLE[key]);
            }
        }
    }
}

  let arrFin = arrTransform.join('');
  return arrFin;
}

module.exports = {
    decode
}