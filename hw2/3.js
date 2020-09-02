//Using memoize() function of question 2 to give another solution to question 1.b (n!).
function create_func(func){
	var cache=[];
	function memoized_func(n){
		if(cache[n]!=undefined){
			return cache[n];
		}
		cache[n]=func(n);
//		console.log(cache);
		return cache[n];
	}
	return memoized_func;
}

var factorial=function(n){
	if(n==0){
		return 1;
	}
	return n * memoized_fac(n-1);
}

//var memoized_fac=create_func(factorial);
//console.log(memoized_fac(12));