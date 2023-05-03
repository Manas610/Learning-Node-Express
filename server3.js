const http = require("http")
const fs = require("fs")

const server = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;
    if (url === "/"){
        res.setHeader("content-type","text/html");
        res.write("<html>");
        res.write("<head><title>File Generator Server</title></head>");
        res.write('<body><form action="/file" method="POST" name="msg"><input type="text" name="msg"><button type="submit">Submit</button></body>');
        res.write("</html>");
        return res.end();
    }
    if(url === "/file" && method === "POST"){
        const body = [];
        req.on("data",(chunk) =>{
            console.log(chunk);
            body.push(chunk);
        })
        req.on("end",()=>{
            const parsedBody =  Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync("New File",message , (err)=> {
                //non-blocking code
                res.statusCode = 302;
                res.setHeader("Location","/");
                return res.end();
            }); 
        })
    }
    res.setHeader("content-type","text/html");
    res.write("<html>");
    res.write("<head><title>File Generator Server</title></head>");
    res.write("<body><h1>Second Page</h1></body>");
    res.write("</html>");
    res.end();
})

server.listen(3000);