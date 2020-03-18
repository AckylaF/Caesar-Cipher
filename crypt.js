const crypto = require('crypto')
const fs = require('fs')
const answer = require('./answer.json')

function crypt(text) {

    let sha1 = crypto.createHash('sha1').update(text).digest('hex')

    answer.resumo_criptografico = sha1
    
    fs.writeFile("answer.json", JSON.stringify(answer, null, 2), (err) => {
        if(err) return console.log("Write file error") 

        return console.log("File written")
        
    } )

}

crypt(answer.decifrado)
