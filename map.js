var myObject = { 'a': 1, 'b': 2, 'c': 3};

undefined

Object.keys(myObject).map(function(key, index) {
	myObject[key] *=2;
});

[undefined, undefined, undefined]

console.log(myObject);

Object {a: 2, b: 4, c: 6} VM267:2
undefined