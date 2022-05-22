function samplePromise() {
    return Promise.resolve('Arie');
}

const name = await samplePromise();
console.log(name);