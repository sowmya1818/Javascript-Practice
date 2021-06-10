var str = 'my ip addresses are 172.169.43.1, 128.0.0.0, 0.0.0.0, 127.255.256.255, 255.255.255.256, 224.0.0.0, 239.255.255.256, 240.0.0.0, 247.255.255.256, 223.255.255.255, 192.168.0.0, 192.168.1.128 and 192.0.0.0 with mail ids sowmya@gmail.com and sowmya18@swecha.org. It is hard to hack';
var patt = /\b(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/g; //ip address in the range 0.0.0.0 to 255.255.255.255
var imp = /\b192\.168\.1\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/g; //ip address in the range 192.168.1.0 to 192.168.1.255
var classic = /\b(22[0-3]|2[0-1][0-9]|19[2-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/g; //ip address in the range 192.0.0.0 to 223.255.255.255
var phrase = /hard to hack/g;
var mail = /[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]*@(swecha.org)/g;
console.log(str.match(imp));
console.log(str.match(phrase));
console.log(str.match(mail));
