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


// Chatacter Set Using Brackets []
re = /h[eai]llo/; // Must be one of them inside brackets
re = /[HA]ello/i;
re = /[^ha]ello/; // Anything except those inside brackets
re = /^[ha]ello/;//Must start with h or a
re = /[A-Z]ello/; // Start with Upper Case
re = /^[A-Z]/i; // Fisrt letter must be upper case
re = /^[a-zA-Z]ello/;
re = /^[0-9]ello/;
re = /[^0-9]ello/;// not digit
re = /[0-9][0-9]ello/; // not digit

// Braces {} - Quantifier
re = /hel{2}o/; // Must occur exactly 2 times
re = /hel{2,5}o/; // range
re = /hel{2,}o/; // atleast 2 times


str = "hello";
str = "aello";
str = "hello";
str = "hellllllo";



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