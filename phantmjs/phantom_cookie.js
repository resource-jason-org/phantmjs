var webPage = require('webpage');
var page = webPage.create();
var fs = require('fs');
var CookieJar = "cookiejar.json";
var pageResponses = {};

page.settings.userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.98 Safari/537.36';
page.settings.javascriptEnabled = true;
page.settings.loadImages = true;
phantom.cookiesEnabled = true;
phantom.javascriptEnabled = true;


page.onResourceReceived = function(response) {
    pageResponses[response.url] = response.status;
    fs.write(CookieJar, JSON.stringify(phantom.cookies), "w");
};
if(fs.isFile(CookieJar))
    Array.prototype.forEach.call(JSON.parse(fs.read(CookieJar)), function(x){
        phantom.addCookie(x);
    });

//page.open("https://www.facebook.com", function(status) {
  page.open("https://www.facebook.com/sang.lunglinh?fref=pymk", function(status) {
    if ( status === "success" ) {
      var content = page.content;


        //document.query("window.scrollTo(0, document.body.scrollHeight);");
         //document.window.location.href="www.baidu.com";

        //window.document.scrollTo(0, document.body.scrollHeight);
        //window.document.scrollTo(0, document.body.scrollHeight);
        //window.scrollTo(0, document.body.scrollHeight);
        //window.scrollTo(0, document.body.scrollHeight);
        //window.scrollTo(0, document.body.scrollHeight);
        //window.scrollTo(0, document.body.scrollHeight);

window.document.body.scrollTop = document.body.scrollHeight;
window.document.body.scrollTop = document.body.scrollHeight;
window.document.body.scrollTop = document.body.scrollHeight;
window.document.body.scrollTop = document.body.scrollHeight;
window.document.body.scrollTop = document.body.scrollHeight;
        fs.write("test.html", content, "w");


       // console.log(content);
        page.evaluate(function() {
              document.querySelector("input[name='email']").value = "";
              document.querySelector("input[name='pass']").value = "";
              document.querySelector("#login_form").submit();

        });


        window.setTimeout(function () {
          page.render('facebook_page.png');
          phantom.exit();
        }, 5000);
   }
});