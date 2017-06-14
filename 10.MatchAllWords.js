function matchWords(str) {
    let pattern = /([a-zA-Z-0-9_]+)/g;
    //or //let patternTwo = /\w+/g;

    console.log(str.match(pattern).join("|"));
}

matchWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text');