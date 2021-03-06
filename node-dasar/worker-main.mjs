import { threadId , Worker } from 'worker_threads'

const worker1 = new Worker('./worker.mjs')
const worker2 = new Worker('./worker.mjs')

worker1.addListener('message', (message) => {
    console.info(`Thread=${threadId} menerima pesan dari worker1 : ${message}`)
})

worker2.addListener('message', (message) => {
    console.info(`Thread=${threadId} menerima pesan dari worker2 : ${message}`)
})

worker1.postMessage(10)
worker2.postMessage(20)