function isSolved(board) {
    // TODO: Check if the board is solved!
    let xWin = false
    let oWin = false
    let xValue = 1
    let oValue = 2
    let vertical1 = []
    let vertical2 = []
    let vertical3 = []
    let diagonal1 = []
    let diagonal2 = []
    let checkAll = []
    let emptySpaces = true
    let result
    
    console.log("Board: " + board)
    
    //CHECKS EACH ROW
    for (let check of board){
      let x = check.filter((x)=> {
        return x == 1
      })
      let o = check.filter((o)=> {
        return o == 2
      })
      
      if (x.length == 3){
        return xValue
      }
      
      if (o.length == 3){
        return oValue
      }
      
      //CHECKS THE COLLUMNS 
      vertical1.push(check[0])
      vertical2.push(check[1])
      vertical3.push(check[2])
      
    }
    
    //CHECKS THE DIAGONALS 
    for (let i = 0; i < board.length; i++){
        if (i==0){
          diagonal1.push(board[0][0])
          diagonal2.push(board[0][2])
        }
        else if (i==1){
          diagonal1.push(board[1][1])
          diagonal2.push(board[1][1])
        }
        else {
          diagonal1.push(board[2][2])
          diagonal2.push(board[2][0])
        }
    }
    
    checkAll.push(vertical1)
    checkAll.push(vertical2)
    checkAll.push(vertical3)
    checkAll.push(diagonal1)
    checkAll.push(diagonal2)
    
    for (let array of checkAll){
      let x = array.filter((x)=> {
        return x == 1
      })
      let o = array.filter((o)=> {
        return o == 2
      })
      
      if (x.length == 3){
        xWin = true
      }
      
      if (o.length == 3){
        oWin == true
      }
    }
    
    for (let row of board){
      for (let space of row){
        if (space == 0){
          emptySpaces = false
        }
      }
     
    }
    
    if (emptySpaces == false && xWin == false && oWin == false){
      result = -1
    }
    else if (xWin){
      result = 1
    }
    else if (oWin){
      result = 2
    }
    else {
      result = 0
    }
    
    return result
  }