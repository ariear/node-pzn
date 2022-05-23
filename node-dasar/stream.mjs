import fs from 'fs'

const write = fs.createWriteStream('target.log')

write.write('Arie ')
write.write('Akbarull ')
write.write('Ridho ')
write.end()

const read = fs.createReadStream('target.log')

read.addListener('data', (data) => {
    console.info(data.toString())
})

// Ingfo lebih lanjut https://nodejs.org/api/stream.html