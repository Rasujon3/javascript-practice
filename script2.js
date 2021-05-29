let re;
let str;
// Literal Character
re = /hello/;
re = /hello/i;
re = /hell/i;
re = /low/i;

// Meta Characters
re = /^hello/; // Must start with
re = /World$/; // Must end with
re = /^hello$/; // Must start and end with
re = /^h.llo$/; // Matches any one character
re = /h.llo/;
re = /h*llo/;//0 or more times
re = /he?a?llo/; // optional
re = /hello\?/; // escaping


str = "hello World";
str = "hello";
str = "hereerllo";
str = "hello?";


console.log(re.exec(str));

reText(re, str);

function  reText(re, str) {
    if(re.test(str)){
        console.log(`'${str}' matches '${re.source}'`);
    }
    else{
        console.log(`'${str}' doesn't match '${re.source}'`);
    }
}