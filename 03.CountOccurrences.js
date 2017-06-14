function repStr(whatStr, text) {
    let count = 0;
    let index = text.indexOf(whatStr);

    while (index > -1) {
        count++;
        index = text.indexOf(whatStr, index + 1);
    }
    console.log(count);
}

repStr('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.');



//function solve(str, text) {
//    let s = text.split(str).length-1;
//    console.log(s);
//}
//
//solve('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.');