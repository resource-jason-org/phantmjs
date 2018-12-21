var page = require('webpage').create();
var address = 'http://www.facebook.com';//填写需要打印的文件位置
var output = './screen.png';//存储文件路径和名称
page.viewportSize = { width: 1280, height: 800 };//设置长宽
 
var flag = phantom.addCookie({"domain":".facebook.com","expires":"周三, 05 12月 2018 06:11:05 GMT","expiry":1543990265,"httponly":true,"name":"spin","path":"/","secure":true,"value":"r.4594015_b.trunk_t.1543900264_s.1_v.2_"},{"domain":".facebook.com","expires":"周一, 04 3月 2019 05:11:04 GMT","expiry":1551676264,"httponly":true,"name":"pl","path":"/","secure":true,"value":"n"},{"domain":".facebook.com","expires":"周一, 04 3月 2019 05:11:04 GMT","expiry":1551676264,"httponly":true,"name":"fr","path":"/","secure":true,"value":"1FrzUQXRj7RBLmm1H.AWVApYNkSlDd52zW1gMZJp5r5_s.BcBgxg.OV.AAA.0.0.BcBgxo.AWWA3sPA"},{"domain":".facebook.com","expires":"周一, 04 3月 2019 05:11:04 GMT","expiry":1551676264,"httponly":true,"name":"xs","path":"/","secure":true,"value":"74%3AQ4o-HITlmYtzmw%3A2%3A1543900264%3A15071%3A14255"},{"domain":".facebook.com","expires":"周一, 04 3月 2019 05:11:04 GMT","expiry":1551676264,"httponly":false,"name":"c_user","path":"/","secure":true,"value":"100008557038798"},{"domain":".facebook.com","expires":"周四, 03 12月 2020 05:11:04 GMT","expiry":1606972264,"httponly":true,"name":"sb","path":"/","secure":true,"value":"YAwGXOuIOzxvRwJjzQVOMXTn"},{"domain":".facebook.com","expires":"周四, 03 12月 2020 05:11:04 GMT","expiry":1606972264,"httponly":true,"name":"datr","path":"/","secure":true,"value":"YAwGXLuAq6xWilScxHMtmIIM"});
 
console.log(flag);
 
if(flag){
    page.open(address, function (status) {
	    if (status !== 'success') {
		console.log('Unable to load the address!');
		phantom.exit();
	    } else {
		window.setTimeout(function () {
		    page.render(output);
		    phantom.exit();
		}, 500);
	    }
    });
}else{
        console.log('error!!!');
}

