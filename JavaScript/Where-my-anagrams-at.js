function anagrams(word, words) {
    let anagramList = []
    
    //I need to put the letters of the word into an array
    let chars = word.split('')
    //Sort the array alphabetically
    let sortedArray = chars.sort()
    //Join the word back together
    let sorted = sortedArray.join('')
    
    for (checkword of words) {
      //Putting the letters of the word into an array
      let charArray = checkword.split('')
      //Sort the letters alphabetically
      let sortedCharArray = charArray.sort()
      //Now I need to join the letters again
      let sortedWord = sortedCharArray.join('')
      
      //Compare the sortedWord to sorted
      if (sortedWord == sorted){
        //add to anagramList
        anagramList.push(checkword)
      }
    }
    return anagramList
  }