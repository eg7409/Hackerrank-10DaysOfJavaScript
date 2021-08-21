

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        var sp = s.split("");
        var r = sp.reverse();
        var j = r.join("");
        console.log(j);
    }
    catch (e){
        console.log(e.message);
        console.log(s);
    }
}

