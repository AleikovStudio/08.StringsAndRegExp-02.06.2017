function username(arrStr) {
    let result = [];

    for (let email of arrStr) {
        let [alias,domain]=email.split("@");//using this solution because we know how many elements (2) are in the e-mail: (1) before @ and (2) after @
        let username = alias + ".";
        let domainParts = domain.split(".");
        domainParts.forEach(p=>username += p[0]);
        result.push(username);
    }
    console.log(result.join(", "));
}

username(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);