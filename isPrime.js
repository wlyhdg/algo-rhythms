function isPrime(n) {
	if (n == 2 || n === 3) {
  	return true;
  }
  
	let i = 2;
	while(i * i <= n) {
  	if (n % i === 0) {
    	return false;
    }
    i++;
  }
  
  return true;

}
