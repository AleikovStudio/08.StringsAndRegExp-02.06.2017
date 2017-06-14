function brackets(str) {
    let results = [];
    let rightBracket = -1;
    while (true) {
        let leftBracket = str.indexOf("(", rightBracket + 1);
        if (leftBracket == -1) {
            break
        }
        rightBracket = str.indexOf(")", leftBracket - 1);
        if (rightBracket == -1) {
            break
        }
        else {
            let textInside = str.substring(leftBracket + 1, rightBracket);
            results.push(textInside);
        }
    }
    console.log(results.join(", "));
}

brackets("Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)");