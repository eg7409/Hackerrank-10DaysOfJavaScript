

function getLetter(s) {
    let letter;
    switch(s[0]){
       case 'a': case 'e': case 'i' :case 'o' :case 'u':
       letter ='A';
       break;
       case 'b'||'c'||'d'||'f'||'g':
       letter = 'B';
       break;
       case 'h'||'j'||'k'||'l'||'m':
       letter = 'C';
       break;
       default:
       letter = 'D';
       break;
    }
    
    return letter;
}
