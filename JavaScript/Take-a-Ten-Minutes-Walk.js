function isValidWalk(walk) {
    //insert brilliant code here
    //1 block = 1 minute for each letter
    // n and s need to = 
    // e and w need to =
    let distanceValid = false
    let timeValid = false
    let directionsValid = false
    
    const n = walk.filter((direction) => {
      return direction == 'n'
    })
    const s = walk.filter((direction) => {
      return direction == 's'
    })
    const w = walk.filter((direction) => {
      return direction == 'w'
    })
    const e = walk.filter((direction) => {
      return direction == 'e'
    })
    
    if (n.length == s.length && w.length == e.length){
      distanceValid = true
    }
    
    
    if (walk.length === 10){
      timeValid = true
    } else {
      timeValid = false
    }
    
    if (distanceValid === true && timeValid === true) {
      directionsValid = true
    }
    
    return directionsValid
  }