function htmlList(items) {
    console.log("<ul>");
    for (let item of items) {
        console.log("    <li>" + htmlEscape(item) + "</li>");
    }
    console.log("</ul>");

    function htmlEscape(text) {
        let map = {
            '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;'
        };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}

console.log(htmlList(['<b>unescaped text</b>', 'normal text']));

//2nd solution:
function printList(items) {
    return "<ul>\n" +
        items.map(htmlEscape).map(
                item => `  <li>${item}</li>`).join("\n") +
        "\n</ul>\n";

    function htmlEscape(text) {
        let map = {
            '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;'
        };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}

console.log(printList(['<div style=\"color: red;\">Hello, Red!</div>', '<table><tr><td>Cell 1</td><td>Cell 2</td><tr>']));