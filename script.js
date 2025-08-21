const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on("line", function(line) {
    input.push(line.trim());
}).on("close", function() {
    let str = input[0] || "";   // handle empty string case
    
    function byteSize(s) {
        return Buffer.byteLength(s, 'utf8');
    }

    console.log(byteSize(str));
});
