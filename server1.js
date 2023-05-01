const http = require("http")
const fs = require("fs")

const server = http.createServer((req,res) => {
    const url = req.url;
    if (url === "/"){
        res.setHeader("content-type","text/html");
        res.write("<html>");
        res.write("<head><title>File Generator Server</title></head>");
        res.write("<body><h1>Home Page</h1></body>");
        res.write("</html>");
        return res.end();
    }
    if(url === "/file"){
        fs.writeFileSync("New File","You have Sucessfully Created a new file");
        res.statusCode = 302;
        res.setHeader("Location","/");
        return res.end();
    }
    res.setHeader("content-type","text/html");
    res.write("<html>");
    res.write("<head><title>File Generator Server</title></head>");
    res.write("<body><h1>Second Page</h1></body>");
    res.write("</html>");
    res.end();
})

server.listen(3000);