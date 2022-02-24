/* 
* Priamry file for the API
*
*
*/

// Dependecies

const http = require('http');

//  Ther server responds to all requests as string

const server = http.createServer(function(req, res){
    res.end("Hello World");
});



// Starting server here
server.listen(3000, function(){
    console.log("Ther server is running on port 3000 now")
});
