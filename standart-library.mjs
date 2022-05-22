import os from 'os'
import path from 'path'
import fs from 'fs'
import { EventEmitter } from 'events'
import process from 'process'

console.info(os.platform())
console.info(os.arch())
console.table(os.cpus())
// Untuk lebih lanjut https://nodejs.org/api/os.html

const file = "/Arie/project1/anime.txt"
console.info(path.dirname(file))
console.info(path.basename(file))
console.info(path.extname(file))
// Untuk lebih lanjut https://nodejs.org/api/path.html


const buffer = fs.readFileSync('index.js')
console.info(buffer.toString())

fs.writeFileSync('temp.txt','Afakah Menambah')
// Untuk lebih lanjut https://nodejs.org/api/fs.html

const emitter = new EventEmitter()

emitter.addListener('anime', (name) => {
    console.info(`Halo banh ${name}`)
})

emitter.emit('anime','Arie')
// Untuk ingfo lebih lanjut https://nodejs.org/api/events.html

process.addListener('exit', (exitcode) => {
    console.info(`Node keluar dengan kode ${exitcode}`)
})
console.info(process.version)
console.table(process.argv)

process.exit(1)
// console.info(process.env)
//  Untuk ingfo lebih lanjut https://nodejs.org/api/process.html