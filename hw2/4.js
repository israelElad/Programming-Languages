//Generalizing memoize() to accept functions f(…) with several arguments
function create_func(func){
	var cache=[];
	function memoized_func(){
		args=Array.prototype.slice.call(arguments);
		if(args in cache){
			return cache[args];
		}
		cache[args]=func.apply(this,args);
		//console.log(cache)
		return cache[args];
	}
	return memoized_func;
}

//function add(x,y,z){
//	return x+y+z;
//}
//var fun=create_func(add);
//console.log(fun(1,2,3));
//console.log(fun(2,6,7));
