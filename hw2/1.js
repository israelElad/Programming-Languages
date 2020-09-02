//Narkis Shallev Kremizi 205832447 Elad Israel 313448888
//fibonacci: F(n) returns Fibonacci number n. F(n)=F(n-1)+F(n-2), F(0)=0, F(1)=F(2)=1
function create_fib(){
	var cache=[];
	cache[0]=0;
	cache[1]=1;
	cache[2]=1;
	function fibonacci (n){
		if(cache[n]!=undefined){
			return cache[n];
		}
		cache[n]=fibonacci(n-1)+fibonacci(n-2);
		//console.log(cache)
		return cache[n];
	}
	//returns the inner function
	return fibonacci;
}
//var fib=create_fib();
////activates the inner function returned from the outer function
//console.log(fib(12));

//factorial: F(n)=n! (F(n)=n*F(n-1), F(0)=1)
function create_fac(){
	var cache = [];
	cache[0] = 1;
	function factorial(n){
		if(cache[n] != undefined){
			return cache[n]
		}
		cache[n] = n * factorial(n-1);
		//console.log(cache)
		return cache[n]
	}
	return factorial;
}	

//var fac=create_fac();
//console.log(fac(12));