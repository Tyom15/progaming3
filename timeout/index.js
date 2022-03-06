


// for (let i= 0; i < 5; i++) {
//     setTimeout(function(){
//         console.log(i)
    
//     }, 5000);

// }


// let a = 100
// setInterval (function(){
//     console.log(a++);
// }, 2000);

// var fs = require('fs');
// var dummyText = "Apple yep";

// function main() {
//    fs.writeFileSync("dummytext.txt", dummyText);
//    var text = fs.readFileSync("dummytext.txt").toString();
//    console.log(dummyText == text);
//    console.log(text);
//    fs.writeFileSync("undummytext.txt",
//        text.replace("Apple", "Microsoft")
//    );
// }
// main();






let fs = require ("fs")

let grassArr = 200;
let grassEaterArr = 130;


let statistics = {};
setInterval(function(){
    statistics.grass = grassArr++;
    statistics.grassEater = grassEaterArr--;
    fs.writeFile("statistics.json",JSON.stringify(statistics),function(){
        console.log("send");
        
    })

}, 2000);

