//we are now goinh to bring html files here

const http = require('http')
const fs = require('fs'); //work with the fs
const path = require ('path'); //we also need to bring in path to create a folder 

const server= http.createServer((req, res) => {
   
    console.log(req.url);
    
    if(req.url ==='/'){
        //bring index. html
        const headers = {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'text/html'// 30 days
          };
        fs.readFile(path.join(__dirname,'public','index.html'),(err, content)=>{

                if (err) throw err;
                //res.writeHead(200, {'Content-Type': 'text/html'});
                res.writeHead(200, headers);
                res.end(content)
        });       
    }
    
    else if(req.url ==='/api'){
        // bring about.html
        const headers2 = {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json'// 30 days
          };
        fs.readFile(path.join(__dirname,'public','db.json'),(err, content)=>{

            if (err) throw err;
            res.writeHead(200,headers2);
            //res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(content)
    });   

    }else {
        const headers3 = {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'text/html'// 30 days
          };
        fs.readFile(path.join(__dirname,'public','404.html'),(err, content)=>{

            if (err) throw err;
            res.writeHead(200, headers3);
            //res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content)
    });   
    }




})
.listen(process.env.PORT || 4000, () => console.log('Our server..'))
/*const PORT =process.env.PORT || 5959
//const PORT = 8752;
server.listen(PORT, () => console.log('Server running...'));
console.log(PORT);*/

