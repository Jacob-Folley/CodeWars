function domainName(url) {
    //your code here
    let domainName
    let http = []
    let www = []
    let newUrl
    let checkHttp = false
    let checkwww = false
    let firstArray
    let secondArray

    //First check for http
    for (let i = 0; i < 4; i++) {
        http.push(url[i])
    }

    //Turn http array into a string
    let httpString = http.join('')

    //If the string equals http then http is in the url
    if (httpString == 'http') {
        checkHttp = true
    }

    //If http is in the url
    if (checkHttp) {
        //Split the string at '//' into an array
        firstArray = url.split('//')
        //Then remove http from the array
        firstArray.splice(0, 1)
        //Turn the array into a string again (http will now be gone)
        newUrl = firstArray.join('')

        //Split the string at '.' into another array
        secondArray = newUrl.split('.')

        //Search through new array to see if it has www
        let found = secondArray.find((string) => {
            return string == 'www'
        })

        //If www is found then remove it from the array
        if (found) {
            secondArray.splice(0, 1)
        }
    }
    else {
        firstArray = url.split('.')

        if (firstArray[0] == 'www') {
            checkwww = true
        }

        if (checkwww) {
            firstArray.splice(0, 1)
        }

        secondArray = firstArray
    }



    domainName = secondArray[0]

    return domainName


}