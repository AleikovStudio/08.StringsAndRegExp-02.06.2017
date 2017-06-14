function printStr(strInput) {
    for (let i = 0; i < strInput.length; i++) {
        console.log(`str[${i}] -> ${strInput[i]}`);
    }
}

printStr("Hello, World!");

//2nd solution:

function print(str) {
    for (let i in str) {
        console.log(`str[${i}] -> ${str[i]}`);
    }
}

print("Hello, World!");