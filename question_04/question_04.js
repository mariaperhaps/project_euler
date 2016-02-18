
var counter = 100
var numbers = []
var largest = 0
var count = 0

while(counter < 1000){
  numbers.push(counter)
  counter++
}


while(count < numbers.length){
  for(var i = 0; i < numbers.length; i++){
    var product = numbers[count] * numbers[i]
    if(isPalidrome(product)){
      if(product > largest){largest = product}
    }
  }
  count++
 }

console.log(largest)

function isPalidrome(number){
  var string = number.toString();
  if(string.length == 0 || string.length == 1){
    return true
  } else if(string[0] == string[string.length - 1]){
    string = string.substring(1, string.length - 1)
    return isPalidrome(string)
  } else {
    return false
  }
}



