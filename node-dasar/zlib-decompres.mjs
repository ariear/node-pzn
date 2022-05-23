import zlib from "zlib"
import fs from 'fs'

const source = fs.readFileSync('zlib-compres.mjs.txt')
const result = zlib.gunzipSync(source)

fs.writeFileSync('zlib-compres.mjs.txt', result)

// untuk ingfo lebih lanjut https://nodejs.org/api/zlib.html