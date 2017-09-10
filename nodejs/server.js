var http = require('http');
var fs = require('fs');
var url = require('url');

//common
/*mimeType
**************************************/
var mimeType = {
    html : "text/html",
    ico : "image/x-icon",
    jpg : "image/jpeg",
    png : "image/png",
    gif : "image/gif",
    css : "text/css",
    js : "text/javascript",
    json : "application/json",
    wav: "audio/wav",
    svg: "image/svg+xml",
    woff2:"application/font-woff2"
};
/*path
**************************************/
var path ={
    html: "../htmls",
    public: "../public"
};
//end common


http.createServer(function(request, response){

    //analysis request
    const URL = url.parse(request.url);

    console.log("method: " + request.method);

    if(request.method == "GET"){
        var lastIndexOfDot = -1;
        try{
            lastIndexOfDot = URL.pathname.lastIndexOf('.');
        }
        catch(exception){
            lastIndexOfDot = -1;
        }
        switch(URL.pathname){
            case "/" :
                fs.readFile(path.html + "/index.html", function(err, data){
                    if(err){
                        response.writeHead(404,"Not found");
                        response.end();
                    }
                    else{
                        response.writeHead(200, {'content-type':mimeType.html});
                        response.end(data);
                    }
                });
                break;
            case "/dulich3mien":
                fs.readFile(path.html + "/index.html", function(err, data){
                    if(err){
                        response.writeHead(404,"Not found");
                        response.end();
                    }
                    else{
                        response.writeHead(200, {'content-type':mimeType.html});
                        response.end(data);
                    }
                });
                break;
            default:
                break;
        }
    }
    else if(request.method == "POST"){
        request.on('data',function(chunk){
            var a = request.url + "?" + chunk;
            var b = url.parse(a,true).query;
            switch(URL.pathname){
                case "/CreateTable" :
                    // fs.readFile(path.html + "/index.html", function(err, data){
                    //     if(err){
                    //         response.writeHead(404,"Not found");
                    //         response.end();
                    //     }
                    //     else{
                    //         response.writeHead(200, {'content-type':mimeType.html});
                    //         response.end(data);
                    //     }
                    // });
                    break;
                default:
                    break;
            }
        });
    }

}).listen(8080);
console.log("Server running at http://loaclhost:8080");