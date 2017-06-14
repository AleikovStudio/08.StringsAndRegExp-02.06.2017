String.prototype.htmlEscape = function() {
    return this.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
};



function escapeHTML(str) {
    let result = "";
    for (let ch of str) {
        if (ch == "<") {
            result += "&lt;";
        } else if (ch == ">") {
            result += "&gt;";
        } else if (ch == "'") {
            result += "&#39;";
        } else if (ch == "\"") {
            result += "&guot;";
        } else {
            result += ch;
        }
    }
    return result;
}

console.log(escapeHTML(['<b>unescaped text</b>', 'normal text']));
