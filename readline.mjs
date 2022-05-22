import readline from 'readline'
import { stdin, stdout } from 'process'

// Untuk ingfo lebih lanjut https://nodejs.org/api/readline.html

const input = readline.createInterface({
    input: stdin,
    output: stdout
})

input.question("Nama luwh siafa banh ?" , (name) => {
    console.info(`Halo banh ${name}`)
    input.close()
})

