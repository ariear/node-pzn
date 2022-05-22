import util from 'util'

const firstname = 'Arie'

const name = {
    firstname: 'Arie',
    lastName: 'Akbarull Ridho'
}

console.info(util.format('Name : %s', firstname))
console.info(util.format('Person : %j', name))

// Gak usah pake json stringify lagi cuy 
console.info(`Person : ${JSON.stringify(name)}`)

// Ingfo lebih lanjut https://nodejs.org/api/util.html