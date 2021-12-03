//we are now goinh to bring html files here

const http = require('http')
const fs = require('fs'); //work with the fs
const path = require ('path'); //we also need to bring in path to create a folder 

const server= http.createServer((req, res) => {
   

    console.log(req.url);
    
    if(req.url ==='/'){
        //bring index. html

        fs.readFile(path.join(__dirname,'public','index.html'),(err, content)=>{

                if (err) throw err;
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(content)
        });       
    }
    
    else if(req.url ==='/api'){
        // bring about.html
        fs.readFile(path.join(__dirname,'public','db.json'),(err, content)=>{

            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(content)
    });   

    }else {
        fs.readFile(path.join(__dirname,'public','404.html'),(err, content)=>{

            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content)
    });   
    }




})
.listen(process.env.PORT || 4000, () => console.log('Our first server in class exercise is running...'))
/*const PORT =process.env.PORT || 5959
//const PORT = 8752;
server.listen(PORT, () => console.log('Server running...'));
console.log(PORT);*/

