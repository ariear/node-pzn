import timers from 'timers/promises'

console.info(new Date())
await timers.setTimeout(5000)
console.info(new Date())

// Ingfo lebih lanjut https://nodejs.org/api/timers.html