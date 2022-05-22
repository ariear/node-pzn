import { threadId , parentPort } from 'worker_threads'

parentPort.addListener('message', (message) => {
    for (let index = 0; index < message; index++) {
        console.info(`Thread-${threadId} mengirim pesan ${index}`)
    }

    parentPort.close()
})