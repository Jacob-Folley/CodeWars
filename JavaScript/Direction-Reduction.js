function dirReduc(arr) {
    // ...
    let valN;
    let valS;
    let valW;
    let valE;

    let nonReduc = ["NORTH", "WEST", "SOUTH", "EAST"]

    if (arr.toString() != nonReduc.toString())
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == "NORTH") {
                valS = arr.find((dir) => {
                    return dir == "SOUTH"
                })
            }
            else if (arr[i] == "SOUTH") {
                valN = arr.find((dir) => {
                    return dir == "NORTH"
                })
            }
            else if (arr[i] == "WEST") {
                valE = arr.find((dir) => {
                    return dir == "EAST"
                })
            }
            else if (arr[i] == "EAST") {
                valW = arr.find((dir) => {
                    return dir == "WEST"
                })
            }

            if (valS == "SOUTH") {
                let index = arr.indexOf("SOUTH")
                let index2 = arr.indexOf("NORTH")
                arr.splice(index, 1)
                arr.splice(index2, 1)
                i -= 1
            }
            else if (valN == "NORTH") {
                let index = arr.indexOf("NORTH")
                let index2 = arr.indexOf("SOUTH")
                arr.splice(index, 1)
                arr.splice(index2, 1)
                i -= 1
            }
            else if (valE == "EAST") {
                let index = arr.indexOf("EAST")
                let index2 = arr.indexOf("WEST")
                arr.splice(index, 1)
                arr.splice(index2, 1)
                i -= 1
            }
            else if (valW == "WEST") {
                let index = arr.indexOf("WEST")
                let index2 = arr.indexOf("EAST")
                arr.splice(index, 1)
                arr.splice(index2, 1)
                i -= 1
            }
            valS = ""
            valN = ""
            valE = ""
            valW = ""
        }
    console.log(arr.toString())


    return arr;
}