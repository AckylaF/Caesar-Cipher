const FormData = require('form-data')
const fs = require('fs')
const axios = require('axios')


async function submit() {
    try {
        const data = new FormData()
        
        data.append("file", fs.createReadStream('answer.json'))
        
        const result = await axios.post('https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=2418ea5373ee4dbd1a714e7d2d1a881ec810688e', data, {
            headers: data.getHeaders()
        })

        console.log(`A nota deste desafio é ${result.data.score}`)

        return

    } catch (error) {
        console.error(error)
    }
} 

submit()
