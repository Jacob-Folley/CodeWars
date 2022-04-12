function solution(number){
  
    const arr = []
    
    for (i=2; i<number; i++){
      if (i%3 == 0 || i%5==0){
        arr.push(i)
      }
    }
    
    let sum = 0
    
    for (const num of arr){
      sum += num
    }
    return sum
  }
  