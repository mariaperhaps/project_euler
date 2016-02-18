var seq = [0,1]
var sum = 0

while (seq[seq.length - 1] < 4000000){
  seq.push(seq[seq.length - 2] + seq[seq.length - 1])
}

for(var i = 0; i < seq.length; i++){
  if(seq[i] % 2 == 0){
    sum += seq[i]
  }
}

console.log(sum)
