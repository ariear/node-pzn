import net from 'net'

// Ingfo lebih lanjut https://nodejs.org/api/net.html

const client = net.createConnection({
    port: 3000,
    host: 'localhost'
})

client.addListener('data', (data) => {
    console.info(`Received data from server : ${data}`)
})

setInterval(() => {
    client.write(`${process.argv[2]} \r\n`)
}, 5000);