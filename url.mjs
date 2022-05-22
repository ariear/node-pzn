import { URL } from 'url'

// Ingfo lebih lanjut https://nodejs.org/api/url.html

const linkResto = new URL('http://restoran.test/foodsmenu?search=ayam')

console.info(linkResto.toString())
console.info(linkResto.protocol)
console.info(linkResto.hostname)
console.info(linkResto.pathname)
console.info(linkResto.search)
console.info(linkResto.searchParams)