
// Ingfo lebih lanjut https://nodejs.org/api/buffer.html

const buffer = Buffer.from('Arie Akbarull Ridho')

console.info(buffer);
console.info(buffer.toString());
console.info(buffer.toString('hex'));
console.info(buffer.toString('base64'));

buffer.reverse()
console.info(buffer.toString())

const bufferBase64 = Buffer.from('QXJpZSBBa2JhcnVsbCBSaWRobw==','base64')
console.info(bufferBase64.toString('utf8'))