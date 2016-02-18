function evenlyDivisible(max){
  var counter = 1
  var smallest
  var evenQuotients = 0

  while(smallest == undefined){

    for(var i = 1; i <= max; i++){
      if(counter % i == 0){
        evenQuotients++
      }
    }

    if(evenQuotients == (max)){
      smallest = counter
      return smallest
    } else {
      evenQuotients = 0
      counter++
    }
  }
}


console.log(evenlyDivisible(20))
