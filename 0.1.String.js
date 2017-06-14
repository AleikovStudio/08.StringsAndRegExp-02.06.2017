//let s = "Zdrasti";
//console.log(s.length);
//
//for (let i = 0; i < s.length; i++) {
//    console.log(`s[${i}]->${s[i]}`);
//}


//.indexOf
let str = "I am JavaScript developer am";

console.log(str.indexOf("Java"));
console.log(str.indexOf("java"));
console.log(str.indexOf("am", 8));


//.substring(startIndex,endIndex)

let e = "Hello JS!";
console.log(e.substring(6));
console.log(e.substring(4, 7));

//.substr(start,length)
console.log(e.substr(0, 2));
console.log(e.substr(-5, 5));

//za da delete - parvo izpolzvash .split + splice:
let fd = e.split("");
let fs = fd.splice(2, 2);
console.log(fs);
//let fsp = fs.splice(2, 2);
//console.log(fsp);

//.split+filter
let strTwo = "I like      JS";
let tokens = strTwo.split(" ");
console.log(tokens);
tokens = tokens.filter(s=>s!="");
console.log(tokens);
console.log(tokens.join(" "));

let s = "I     like JS";
console.log(s.split(" "));

//.replace - zamenya samo parviya variant koito sreshta - za poveche: RegEx
let strThree = "I like JS and I am JS fan and JS is nice!";
console.log(strThree.replace("JS","C#"));
console.log(strThree.replace(/JS/g,"C#"));























