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
}
/*path
**************************************/
var path ={
    html:"../htmls",
    public: "../public"
}
//end common


http.createServer(function(request, response){

}).listen(8080);