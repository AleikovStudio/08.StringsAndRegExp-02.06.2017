//let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,20}$/i;
//
//console.log(emailPattern.test("test@abv.bg"));
//console.log(emailPattern.test("a.hills@gtx.de"));
//console.log(emailPattern.test("invalid@@mail"));
//console.log(emailPattern.test("err test@abv.bg"));


//let towns = "Sofia, Varna,Pleven,   Veliko Tarnovo; Paris - London--Vienna\n\n";
//let pattern = /\s*[.,|;\n\t-]+\s*/;
//console.log(towns.split(pattern));

let str = "Visit <link>http://facebook.com</link> or <link>http://wordpress.com</link>";

let replacedLink = str.replace(/<link>(.*?)<\/link>/g,'<a href="$1">Link</a>');

console.log(replacedLink);

