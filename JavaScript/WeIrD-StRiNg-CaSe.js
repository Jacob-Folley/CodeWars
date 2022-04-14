function toWeirdCase(string){
    //TODO
    let char = ""
    let newArray =[]
    
    //SPLIT EACH WORD INTO AN ARRAY
    let arrayString = string.split(' ')
    
    //LOOP THROUGH EACH WORD
    for (let word of arrayString){
      //LOOP THROUGH EACH CHAR
      for (let i = 0; i < word.length; i++){
        //IF EVEN NUMBER ELSE IF ODD
        if (i % 2 == 0){
          char = word[i].toUpperCase()
        }
        else {
          char = word[i]
        }
        newArray.push(char)
      }
      //IF IT IS LAST WORD IN ARRAY DON'T ADD A SPACE
      if (word == arrayString[arrayString.length-1]){
      }
      else {
        newArray.push(" ")
      }
    }
    
    let newString = newArray.join('')
    return newString
  }