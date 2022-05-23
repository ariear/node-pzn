import {Console} from 'console'
import fs from 'fs'

const file = fs.createWriteStream('aplicaton.log')

const loh = new Console({
    stdout: file,
    stderr: file
})

loh.info('Halo Banh')

// Ingfo lebih lanjut https://nodejs.org/api/console.html