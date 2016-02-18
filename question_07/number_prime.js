function isPrime(number){
  var temp = []
  for(var i = 2; i <= Math.sqrt(number); i++){
    if(number % i == 0 && number / i != 1){
      temp.push(number)
    }
  }
  if(temp.length == 0 ){
    return true
  }
}


function getNthPrime(number){
  var counter = 2;
  var primes = [];
  while(primes.length < number){
    if(isPrime(counter)){
      primes.push(counter)
    }
    counter++
  }
  return primes[primes.length - 1]
}

console.log(getNthPrime(10001))
