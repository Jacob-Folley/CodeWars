function validParentheses(parens) {
    // your code here ..
    let answer = true; 
    let input = parens.split('')
    
    for (let i = 0; i < input.length; i++){
      if (input[i] == '('){
        let remove = input.indexOf(')')
        if (remove == -1){
          answer = false
        }
        else {
          input.splice(remove, 1)
          input.splice(i, 1)
          i = i - 1
        }
      }
      else {
        answer = false 
      }
    }
    
    return answer
  }