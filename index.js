const fs = require("fs");
const heading = "The internal clock in JavaScript starts from Jan 1, 1970."

var today = new Date();
//console.log(today);

const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

let minutes = Math.round(today.getTime() / minute);
//console.log(minutes);

let hours = Math.round(today.getTime() / hour);
//console.log(hours);

let days = Math.round(today.getTime() / day);
//console.log(days);

let years = Math.round(today.getTime() / year);
//console.log(years);

const quote = "Hello world"
const n = 10;

// create a new file
fs.writeFile(`./files-demo/date-time.txt`, 
`${heading}
Today, ${today}
The total number of minutes from Jan 1, 1970 to till date are ${minutes}
The total number of hours from Jan 1, 1970 to till date are ${hours}
The total number of days from Jan 1, 1970 to till date are ${days}
The total number of years from Jan 1, 1970 to till date are ${years}`, (err) => {
    console.log("Completed writing");
});

//creating 10 files
// for (let i = 1; i <= n; i++) {
//     fs.writeFile(`./files-demo/date-time-${i}.txt`, quote, (err) => {
//         console.log(`Completed writing !!! - date-time-${i}.txt`);
//     });
// }

//retrieving data to console
fs.readFile("./files-demo/date-time.txt", "utf-8", (err, content) => {
    if (err) {
        console.log("❌", err);
    }
    console.log("📚", content);
})

//updating a file
// fs.appendFile("./files-demo/date-time.txt", niceQuote, (err) => {
//     console.log("Updated file !!!");
// });

// deleting a file
// fs.unlink("./files-demo/date-time.txt", err => {
//     console.log("File Deleted!!!");
// });

//deleting number of files
// fs.readdir("./files-demo", (err, files) => {
//     files.forEach((fileName) => fs.unlink(`./files-demo/${fileName}`, (err) => {
//         console.log("Files deleted");
//     }))
// });