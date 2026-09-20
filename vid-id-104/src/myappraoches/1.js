    let newpswd = "";
    const alphabets = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G',
  'H', 'I', 'J', 'K', 'L', 'M', 'N',
  'O', 'P', 'Q', 'R', 'S', 'T', 'U',
  'V', 'W', 'X', 'Y', 'Z'
    ];

    const alphanum = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G',
  'H', 'I', 'J', 'K', 'L', 'M', 'N',
  'O', 'P', 'Q', 'R', 'S', 'T', 'U',
  'V', 'W', 'X', 'Y', 'Z',0,1,2,3,4,5,6,7,8,9]

  const alphanumchar = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M',
  'N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
  '0','1','2','3','4','5','6','7','8','9',
  '!','@','#','$','%','^','&','*','(',')',
  '-','_','=','+',
  '[',']','{','}',
  '\\','|',
  ';',':',
  "'",'"',
  ',','.','<','>',
  '/','?',
  '`','~'
];

const alphachar = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M',
  'N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
  '!','@','#','$','%','^','&','*','(',')',
  '-','_','=','+',
  '[',']','{','}',
  '\\','|',
  ';',':',
  "'",'"',
  ',','.','<','>',
  '/','?',
  '`','~'
];

    let l1 = alphabets.length;
    let l2 = alphanum.length;
    let l3 = alphanumchar.length;
    let l4 = alphachar.length;

    if(numberchanged && Characterchanged){
        for(let i=0;i<length;i++){
            let ch = alphanumchar[Math.floor(Math.random()*l3)];
            newpswd+=ch;

        }
    }
    if(!numberchanged && Characterchanged){
        for(let i=0;i<length;i++){
            let ch = alphachar[Math.floor(Math.random()*l4)];
            newpswd+=ch;

        }

    }
    if(numberchanged && !Characterchanged){
        for(let i=0;i<length;i++){
            let ch = alphanum[Math.floor(Math.random()*l2)];
            newpswd+=ch;

        }
    }
    if(!numberchanged && !Characterchanged){
        for(let i=0;i<length;i++){
            let ch = alphabets[Math.floor(Math.random()*l1)];
            newpswd+=ch;

        }
    }
    setpassword(newpswd)