function solution (roman) {
    // complete the solution by transforming the 
    // string roman numeral into an integer
    let sum = 0;
    console.log(roman)
    let array = roman.split('');
    let newArray = array.map((num) => {
      if (num == "I"){
        return 1
      } else if (num == "V"){
        return 5
      } else if (num == "X"){
        return 10
      } else if (num == "L"){
        return 50
      } else if (num == "C"){
        return 100
      } else if (num == "D"){
        return 500
      } else if (num == "M"){
        return 1000
      }
    })
    console.log(newArray)
    
    for (let i = 0; i < newArray.length; i++){
      if (newArray[i] < newArray[i+1]){
        sum -= newArray[i]
      } else {
        sum += newArray[i]
      }
    }
    console.log(sum)
    return sum;
  }