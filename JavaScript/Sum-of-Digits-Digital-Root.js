function digital_root(n) {  
    let sum = 0; 
    let answer = n;
  
    while (answer > 9){
      let nArray = answer.toString().split('')
      for (let i of nArray){
        sum = sum + parseInt(i)
      } 
      answer = sum
      sum = 0
    }
  
    return answer
}