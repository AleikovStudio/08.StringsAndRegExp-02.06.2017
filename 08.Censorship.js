function censorship(str, arrStr) {
    for (let current of arrStr) {
        let replaced = "-".repeat(current.length);
        while (str.indexOf(current) > -1) {
            str = str.replace(current, replaced);
        }
    }
    console.log(str);
}

censorship('roses are red, violets are blue', [', violets are', 'red']);