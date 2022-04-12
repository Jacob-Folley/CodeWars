function spinWords(string){
    //TODO Have fun :)
  
    //Set an empty array
    let reverseArray = []
    
    //Split the string into an array
    let checkArray = string.split(' ')
    
    //Loop through each word to see if it needs to be reversed
    for (word of checkArray){
      if (word.length < 5){
        let arrayOfChars = word.split('')
        for (char of arrayOfChars){
          reverseArray.push(char)
        }
      }
      else {
        let arrayOfChars = word.split('')
  
        //Iterate through the array starting at the end
        for (let i = arrayOfChars.length - 1; i >= 0; i--){
          reverseArray.push(arrayOfChars[i])
        }
      }
      reverseArray.push(' ')
    }
    //Join the array so it returns a string again
      reverseArray.pop()
      let reverseString = reverseArray.join('')
      console.log(reverseString)
      return reverseString
      
  }