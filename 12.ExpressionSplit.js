function exSplit(input) {
    let pattern = /[\s\.();,]+/;
    let result = input.split(pattern)
        .join("\n");
    console.log(result);
}

exSplit('let sum = 4 * 4,b = "wow";');