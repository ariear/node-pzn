import https from 'https'

const url = 'https://hookb.in/aBE2DJRazZfGE2odVBw7'

const request = https.request(url, {
    method: 'POST',
    headers: {
        "Content-Type" : "Aplication/json",
        "Accept" : "Aplication/json"
    }
}, (response) => {
    response.addListener('data', (data) => {
        console.info(data.toString())
    })
})

const body = JSON.stringify({
    name: 'Arie',
    message: 'kenalin banh nama gweh'
})

request.write(body)
request.end()

// Ingfo lebih lanjut https://nodejs.org/api/https.html