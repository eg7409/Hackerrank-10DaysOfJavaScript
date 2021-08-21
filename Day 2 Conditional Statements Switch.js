Objective

In this challenge, we learn about switch statements. Check out the attached tutorial for more details.

Task

Complete the getLetter(s) function in the editor. It has one parameter: a string, 
consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D 
depending on the following criteria:

If the first character in string  is in the set , then return A.
If the first character in string  is in the set , then return B.
If the first character in string  is in the set , then return C.
If the first character in string  is in the set , then return D.
Hint: You can get the letter at some index  in  using the syntax s[i] or s.charAt(i).



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
