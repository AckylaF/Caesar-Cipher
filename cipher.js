const answer = require('./answer.json')
const fs = require('fs')

const shift = answer.numero_casas
function eleven(phrase) {
    let solved = ""
    
    for(i = 0; i < phrase.length; i++) {
        let character = phrase.charCodeAt(i)
   
        if( character >= 97 && character < (97 + shift)) {
            solved += String.fromCharCode(character - shift + 26)
        } else if (character >= (97 + shift) && character <= 122) {
            solved += String.fromCharCode(character + shift - (shift * 2))
        } else {
            solved += phrase[i]
        }

    }
    
    answer.decifrado = solved

    fs.writeFile("answer.json", JSON.stringify(answer, null, 2), (err) => {
        if(err) return console.log("Write file error")
        
        return console.log("File written")
        
    })
    
}

eleven(answer.cifrado)
