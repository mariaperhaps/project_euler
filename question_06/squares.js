function sumOfSqauresUpTo(number){
  var sum = 0
  for(var i = 0; i <= number; i++){
    var square = i * i
    sum += square
  }
  return sum
}

function sqaureOfTheSum(number){
  var sum = 0
  for(var i = 0; i <= number; i++){
    sum += i
  }
  return sum * sum
}

function differenceOfSquares(number){
  return sqaureOfTheSum(number) - sumOfSqauresUpTo(number)
}

console.log(differenceOfSquares(100))
