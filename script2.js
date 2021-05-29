// Regular Expression
// Pattern Matching Technique

let re;
let str;

re = /hello/;
re = /Hello/;
re = /hello/i; // i = case insensitive

console.log(re);
console.log(re.source);

str = "Hello World!";
str = "Again Hello World!";
str = "Hell World!";
str = "sfsdHellofsd World!";
str = "Again Hello World! hello";
str = "World!";

// exec() - Returns result in an array or null
let result = re.exec(str);

// test() - true/false
result = re.test(str);

// match() - Returns array or null
str = "Again Hello World! hello";
result = str.match(re);

// search() - Returns index of the first match or -1
str = "World";
result = str.search(re);

// replace() - Return new string
str = "Again Hello World! hello";
let newstr = str.replace(re , "hi");

console.log(result);
console.log(str);
console.log(re.source);
console.log(newstr);