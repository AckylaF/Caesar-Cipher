const axios = require('axios')
const fs = require('fs')

// GETS FILE FROM API

axios.get("https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=2418ea5373ee4dbd1a714e7d2d1a881ec810688e")
.then((response) => { 
    fs.writeFile("answer.json", JSON.stringify(response.data, null, 2), (err) => {
        if(err) return console.log("Write file error")
        
        return console.log("File written")
        
    })

    console.log(response);
    
})


