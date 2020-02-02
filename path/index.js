const path =require('path');

const fileName = __filename;

const basename = path.basename(fileName);
console.log({basename});


const dirName = path.dirname(fileName)
console.log({dirName});


const extname = path.extname(fileName);
console.log({extname});

const url = path.format({
  dir:'/usr',
  base:'file.txt'
});
console.log({url});

const url1 = path.format({
  dir:process.cwd(),
  name:'hello',
  ext:'.md',
})
console.log({url1});


const pathObj = path.parse(url1);
console.log(pathObj);


const isAbsolute = path.isAbsolute(url1);
console.log(isAbsolute);

const isAbsolute1 = path.isAbsolute('../../index.js');
console.log(isAbsolute1);

const joinPath = path.join('home','dir','index.js');
console.log({joinPath});

const joinPath1  = path.join(process.cwd(),'path','hello.js');
console.log({joinPath1});

const current = path.resolve();
console.log({current});


const resolvePath1  = path.resolve('/home/test','./index.js');
console.log({resolvePath1});