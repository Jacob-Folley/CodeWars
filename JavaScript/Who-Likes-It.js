function likes(names) {
    // TODO
    let name = ""
    let end = ""
    let finalOutput = ""
    let numberOthers
    
    //FIND NUMBER OF OTHERS
    if (names.length > 2){
      numberOthers = names.length - 2
    }
    
    //FIND BEGINNING AND END OF THE TEXT OUTPUT
    if (names.length == 0) {
      name = "no one"
      end = "likes this"
    }
    else if (names.length == 1){
      name = names[0]
      end = "likes this"
    }
    else if (names.length == 2){
      name = names[0] + " and " + names[1]
      end = "like this"
    }
    else if (names.length == 3) {
      name = names[0] + ", " + names[1] + " and " + names[2]
      end = "like this"
    }
    else {
      name = names[0] + ", " + names[1] + " and " 
      end = "others like this"
    }
    
    //SET FINAL OUTPUT
    if (names.length <= 3){
      finalOutput = name + " " + end
    }
    else {
      finalOutput = name + numberOthers.toString() + " " + end
    }
    
    //RETURN OUTPUT
    return finalOutput

}