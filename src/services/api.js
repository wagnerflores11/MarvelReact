import axios from 'axios';
import md5 from 'md5';

const publicKey = '0dc01c44bb43144fbd26b9b6bc9f5e66';
const privateKey = '4f0dbd449a4316755c808e1c50b98c9ba23204d0';
const ts = Date.now();  


const api = axios.create({
    baseURL: `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${md5(`${ts}${privateKey}${publicKey}`)}`, 
    version: 'Cable',
});

export default api; 