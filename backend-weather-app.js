const http = require('http')

//then we create the server object

http.createServer((req, res) => {
    //now we write the response
    res.write('This is from our server');
    res.end();

})
.listen(4000, () => console.log('Our first server in class exercise is running...'))

