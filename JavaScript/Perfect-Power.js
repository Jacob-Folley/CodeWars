var isPP = function(n){
    let result = []
    
    for (let i=2; i<n; i++){
      let j=i
      let x=1
      while (j<n){
        j = j * i
        x = x + 1
      }
      if (j == n && x != 1){
        result.push(i)
        result.push(x)
        console.log(result)
        return result
      }
    }
    return null; // fix me
  }