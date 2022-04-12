var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
    //sort input into an array
    //check to see if char after matches
    //if the char doesn't match return first char
    
    const arr = []
    const finalArr = []
    
    for (const char of iterable){
      arr.push(char)
    }
    
    for (i=0; i<=arr.length; i++){
      if (arr[i] != arr[i+1]){
        finalArr.push(arr[i])
      }
    }
    return finalArr
  }