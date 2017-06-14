function conRev(arrStr){
    let s = arrStr.join("");
    let chars = Array.from(s);
    let revChars = chars.reverse();
    let revStr = revChars.join("");

    let result="";
    for (let i in revStr) {
        result+=`${revStr[i]}`;
    }
    console.log(result);
}

conRev(['I', 'am', 'student']);

//2nd solution:

function solve(arrS){
    let s = arrS.join("");
    let chars = Array.from(s);
    let reverseChars = chars.reverse();
    let revString = reverseChars.join("");
    console.log(revString);
}

solve(['I', 'am', 'student']);

