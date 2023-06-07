const fs = require("fs");

//Creating a file and writing text to it.
fs.writeFile("message.txt", "Hello from Node JS!", (err) => {
    if(err) throw err;
    console.log("The file has been saved!");
});


//Reading from a file
fs.readFile("./message.txt", 'utf-8', (err, data) => {
    if(err) throw err;
    console.log(data);
});




