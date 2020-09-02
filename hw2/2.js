//function memoize() that accepts a function f() as its argument and returns a memoized version of the function f().
function create_func(func){
	var cache=[];
	function memoized_func(n){
		if(cache[n]!=undefined){
			return cache[n];
		}
		cache[n]=func(n);
		//console.log(cache)
		return cache[n];
	}
	return memoized_func;
}

//function minus(x){
//	return -x;
//}
//var fun=create_func(minus);
//console.log(fun(12));
//console.log(fun(6));
