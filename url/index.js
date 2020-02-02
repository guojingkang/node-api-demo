const url = require('url');

const url1 = new url.URL('http://test:hello@www.baidu.com:8080/p/a/t/h?query=string#hash');
console.log(url1);


const searchParams = url1.searchParams;
console.log(searchParams.get('query'));
