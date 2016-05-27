'use strict';

function fibonacci_series(n) {
	var a=0,b=1,res;
	var arr = [];
	arr.push(a);
	arr.push(b);
	for(var i=2;i<=n;i++){
		res=a+b;
		a=b;
		b=res;
		arr.push(res);
		}
		return arr;
}
module.exports = fibonacci_series;
