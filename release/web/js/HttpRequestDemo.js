function processHandler(e){console.log(e)}function errorHandler(e){console.log(e)}function completeHandler(e){console.log(e)}Laya.init(1136,640);var xhr=new Laya.HttpRequest;xhr.http.timeout=3,xhr.once(Event.COMPLETE,this,completeHandler),xhr.once(Event.ERROR,this,errorHandler),xhr.on(Event.PROGRESS,this,processHandler),xhr.send("http://localhost","","get","text");